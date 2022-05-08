import { Dimensions, PixelRatio, Platform } from 'react-native';

const reg = {
  formatCode: code => (code.startsWith('+') ? code : `+${code}`),
  isIOS: Platform.OS === 'ios',
  baseURL: 'https://phonevalidation.abstractapi.com/v1/',
  API_KEY: '5e0f351b7f7e4b67ba1f9973a5fdaf1a',
  screenOptions: {
    headerShown: false,
    animation: 'slide_from_right',
    background: 'black',
  },
  px: pixel => {
    const scale = reg.screenWidth / 375;
    const newSize = pixel * scale;
    let result = Math.round(PixelRatio.roundToNearestPixel(newSize));
    result = reg.isIOS ? result : result - 2;
    return pixel > 0 && result <= 0 ? 1 : result;
  },
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
};

export default reg;
