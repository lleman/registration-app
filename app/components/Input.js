import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {colors, reg} from '../helpers/_index';

const Input = ({
  icon,
  onChange,
  placeholder,
  secure,
  error,
  phone,
  filter,
  style,
}) => {
  const [border, setBorder] = useState(reg.px(1));
  const [editable, setEditable] = useState(filter ? false : true);
  const [showSearch, setShowSearch] = useState(false);

  let inputRef = useRef();

  const setFocus = () => {
    setEditable(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 150);
    setShowSearch(true);
  };

  return (
    <View>
      <View
        style={[
          styles.box,
          error && !phone && styles.errorStyle,
          {borderWidth: border, ...style},
        ]}>
        {showSearch ? (
          <FontistoIcon name="search" size={22} color={colors.orange} />
        ) : (
          icon && (
            <Icon
              name={icon}
              size={22}
              color={colors.orange}
              onPress={() => filter && setFocus()}
            />
          )
        )}
        <TextInput
          ref={inputRef}
          onFocus={() => setBorder(reg.isIOS ? reg.px(2) : reg.px(4))}
          onBlur={() => setBorder(reg.px(1))}
          style={[styles.input, {marginLeft: phone ? reg.px(65) : 0}]}
          keyboardType={phone && 'numeric'}
          onChangeText={value => onChange(value)}
          placeholder={placeholder}
          placeholderTextColor={filter ? colors.black : colors.grey}
          secureTextEntry={secure}
          editable={editable}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: reg.px(60),
    borderWidth: reg.px(1),
    borderColor: colors.orange,
    borderRadius: reg.px(16),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: reg.px(16),
    paddingVertical: reg.px(12),
    marginTop: reg.px(24),
  },
  input: {
    height: reg.px(60),
    padding: reg.px(12),
    fontSize: reg.px(16),
    color: colors.black,
    flex: 1,
  },
  error: {
    marginTop: reg.px(6),
    fontSize: reg.px(12),
    color: colors.red,
  },
  errorStyle: {
    borderColor: colors.red,
    borderWidth: reg.px(3),
    marginBottom: 0,
  },
});

export default Input;
