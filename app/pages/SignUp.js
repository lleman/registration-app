import React, {useReducer, useState, useEffect} from 'react';
import {Button, Input, Title} from '../components/_index';
import {RegistrationSchema} from '../validations/RegisterValidation';
import {useNavigation} from '@react-navigation/native';
import screens from '../helpers/screens';
import Layout from '../Layout';

const reducer = (state, action) => {
  return {...state, ...action};
};

const SignUpPage = () => {
  const navigation = useNavigation();
  const [data, dispatch] = useReducer(reducer, {});
  const [errors, setErrors] = useState(null);
  const [errorValue, setErrorValue] = useState(null);

  const register = async () => {
    try {
      const isValid = await RegistrationSchema.validate(data);
      if (isValid) {
        navigation.navigate(screens.SET_UP_PROFILE);
      }
    } catch (error) {
      setErrors(error.errors);
      setErrorValue(error.path);
    }
  };

  useEffect(() => {
    setErrors(null);
    setErrorValue(null);
  }, [data]);

  return (
    <Layout>
      <Title title="Sign Up" />
      <Input
        icon="email"
        onChange={value => dispatch({email: value})}
        placeholder="Email"
        error={errorValue === 'email' && errors}
      />
      <Input
        icon="key"
        onChange={value => dispatch({password: value})}
        placeholder="Password"
        secure
        error={errorValue === 'password' && errors}
      />
      <Input
        icon="key"
        onChange={value => dispatch({passwordConfirmation: value})}
        placeholder="Repeat Password"
        secure
        error={errorValue === 'passwordConfirmation' && errors}
      />
      <Button onPress={register} title="Continue" />
    </Layout>
  );
};

export default SignUpPage;
