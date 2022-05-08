import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {reg, colors} from './helpers/_index';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Layout = ({children, style, flatlist}) => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaStyle} />
      <View style={[styles.container, {...style}]}>
        {flatlist ? (
          children
        ) : (
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            keyboardShouldPersistTaps={'always'}>
            {children}
          </KeyboardAwareScrollView>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    padding: reg.px(20),
  },
  safeAreaStyle: {
    flex: 0,
    backgroundColor: colors.main,
    height: getStatusBarHeight(),
  },
});

export default Layout;
