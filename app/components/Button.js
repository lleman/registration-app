import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../helpers/colors';
import reg from '../helpers/reg';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: reg.px(60),
    backgroundColor: colors.orange,
    borderRadius: reg.px(32),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: reg.px(70),
  },
  text: {
    fontSize: reg.px(18),
    color: colors.main,
    fontWeight: '500',
  },
});

export default Button;
