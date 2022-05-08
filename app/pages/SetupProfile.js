import React, {useReducer, useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Button, Input, Title} from '../components/_index';
import {reg, screens, colors} from '../helpers/_index';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Layout from '../Layout';

const initialState = {
  code: '994',
  number: '',
};

const reducer = (state, action) => {
  return {...state, ...action};
};

const SetupProfilePage = ({route}) => {
  const codeSelected = route.params?.selectedCode;
  const navigation = useNavigation();
  const [data, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(null);

  const [codes, setCodes] = useState({});
  const [countries, setCountries] = useState({});
  const [keys, setKeys] = useState([]);

  const getCountries = axios.get('http://country.io/names.json');
  const getCodes = axios.get('http://country.io/phone.json');

  const fetchData = () => {
    axios
      .all([getCountries, getCodes])
      .then(
        axios.spread((...responses) => {
          const countries = responses[0].data;
          setCountries(countries);
          setKeys(Object.keys(countries));
          const codes = responses[1].data;
          setCodes(codes);
        }),
      )
      .catch(errors => {
        console.log(errors);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectCode = () => {
    navigation.navigate(screens.SELECT_COUNTRY, {
      countries,
      codes,
      keys,
    });
  };

  const updateCode = useCallback(() => {
    dispatch({code: codeSelected});
  }, [codeSelected]);

  useEffect(() => {
    if (keys.length) {
      setTimeout(() => updateCode(), 350);
    }
  }, [codeSelected]);

  const onSubmit = async () => {
    const isValid = await axios
      .get(
        `${reg.baseURL}?api_key=${reg.API_KEY}&phone=${
          data.code + data.number
        }`,
      )
      .then(res => res.data['valid']);
    if (isValid) {
      navigation.navigate(screens.HOME);
    } else {
      setError('Please enter a valid number');
    }
  };

  useEffect(() => {
    setError(null);
  }, [data]);

  return (
    <Layout>
      <Title title="Setup your profile" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={selectCode}
          activeOpacity={0.6}>
          <Text style={styles.text}>{reg.formatCode(data.code)}</Text>
        </TouchableOpacity>
        <Input
          onChange={value => dispatch({number: value})}
          placeholder="Phone"
          error={error}
          phone
        />
      </View>
      <Button onPress={onSubmit} title="Get started" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: reg.px(60),
    flex: 1,
  },
  text: {
    fontSize: reg.px(14),
    color: colors.main,
    fontWeight: '500',
  },
  selectButton: {
    width: reg.px(80),
    position: 'absolute',
    backgroundColor: colors.orange,
    paddingHorizontal: reg.px(16),
    paddingVertical: reg.px(22),
    borderTopLeftRadius: reg.px(16),
    borderBottomLeftRadius: reg.px(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: reg.isIOS ? reg.px(24) : reg.px(25),
    zIndex: 100,
  },
});

export default SetupProfilePage;
