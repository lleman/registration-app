import React, {useState} from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import {colors, reg, screens} from '../helpers/_index';
import Layout from '../Layout';

const SelectCountryPage = ({route, navigation}) => {
  const countries = route.params.countries;
  const codes = route.params.codes;
  const [keys, setKeys] = useState(route.params.keys);

  const onSelect = item => {
    let code = codes[item];
    navigation.navigate(screens.SET_UP_PROFILE, {selectedCode: code});
  };

  const handleSearch = text => {
    const updatedData = Object.keys(countries).filter(key =>
      countries[key].match(new RegExp(text, 'ig')),
    );
    setKeys(updatedData);
  };

  const renderCountries = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.label}
        onPress={() => onSelect(item)}
        activeOpacity={0.6}>
        <Text style={styles.code}>{reg.formatCode(codes[item])}</Text>
        <Text style={styles.country} numberOfLines={1}>
          {countries[item]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout flatlist>
      <FlatList
        ListHeaderComponent={
          <Input
            onChange={handleSearch}
            placeholder="Select country"
            icon="filter"
            filter
            style={{marginBottom: reg.px(24)}}
          />
        }
        data={keys}
        keyExtractor={item => item}
        renderItem={renderCountries}
        showsVerticalScrollIndicator={false}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  label: {
    minHeight: reg.px(56),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: reg.px(16),
    borderRadius: reg.px(16),
    padding: reg.px(16),
    backgroundColor: colors.orange,
  },
  country: {
    color: colors.main,
    marginLeft: reg.px(12),
    flex: 1,
    fontSize: reg.px(16),
    fontWeight: '500',
  },
  code: {
    color: colors.main,
    width: reg.px(70),
    fontSize: reg.px(16),
    fontWeight: '500',
  },
});

export default SelectCountryPage;
