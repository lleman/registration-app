import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../helpers/colors';
import reg from '../helpers/reg';

const Title = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: reg.px(72),
    width: reg.screenWidth / 1.8,
  },
  text: {
    fontSize: reg.px(36),
    fontWeight: '600',
    color: colors.black,
    lineHeight: reg.px(45),
  },
});

export default Title;
