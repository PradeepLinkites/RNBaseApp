import { Platform } from 'react-native';
import AppSizes from './sizes';

function lineHeight(fontSize) {
  const multiplier = (fontSize > 20) ? 0.1 : 0.33;
  return parseInt(fontSize + (fontSize * multiplier), 10);
}

const base = {
  size: 16,
  lineHeight: lineHeight(14),
  ...Platform.select({
    ios: {
      family: 'Lato',
    },
    android: {
      family: 'Lato',
    },
  }),
};

export default {

  //HelveticaNeue
  HNRegular: 'HelveticaNeue',
  HNBold: 'HelveticaNeue-Bold',
  HNLight: 'HelveticaNeue-Light',
  HNMedium: 'HelveticaNeue-Medium',
  HNBlack: 'HelveticaNeue-BlackCond',
  HNThin: 'HelveticaNeue-Thin',
  HNItalic: 'HelveticaNeue-Italic',
  HNHeavy: 'HelveticaNeue-Hv',
  
  // Lato FONTS
  LRegular: 'Lato-Regular',
  LBold: 'Lato-Bold',

  //Logo Font
  LogoName: 'SerifaStd-Bold',

  //Roboto FONTS
  RBlack: 'Roboto-Black',
  RBlackItalic: 'Roboto-Blackitalic',
  RBold: 'Roboto-Bold',
  RBoldItalic: 'Roboto-Bolditalic',
  RItalic: 'Roboto-Italic',
  RLight: 'Roboto-Light',
  RLightItalic: 'Roboto-Lightitalic',
  RMedium: 'Roboto-Medium',
  RMediumItalic: 'Roboto-Mediumitalic',
  RThin: 'Roboto-Thin',
  RThinItalic: 'Roboto-Thinitalic',

  //SF UI DISPLAY FONTS
  SFDBlack: '.SFUIDisplay-Black',
  SFDBold: '.SFUIDisplay-Bold',
  SFDHeavy: '.SFUIDisplay-Heavy',
  SFDLight: '.SFUIDisplay-Light',
  SFDMedium: '.SFUIDisplay-Medium',
  SFDRegular: '.SFUIDisplay',
  SFDSemiBold: '.SFUIDisplay-Semibold',
  SFDThin: '.SFUIDisplay-Thin',
  SFDUltraLight: '.SFUIDisplay-Ultralight',

  //SF UI TEXT FONTS
  SFTBold: '.SFUIText-Bold',
  SFTBoldItalic: '.SFUIText-Bolditalic',
  SFTHeavy: '.SFUIText-Heavy',
  SFTHeavyItalic: '.SFUIText-Heavyitalic',
  SFTLight: '.SFUIText-Light',
  SFTLightItalic: '.SFUIText-Lightitalic',
  SFTMedium: '.SFUIText-Medium',
  SFTMediumItalic: '.SFUIText-Mediumitalic',
  SFTRegular: '.SFUIText-Regular',
  SFTRegularItalic: '.SFUIText-Regularitalic',
  SFTSemiBold: '.SFUIText-Semibold',
  SFTSemiBoldItalic: '.SFUIText-Semibolditalic',
  SFTUltraThin: '.SFUIText-Ultrathin',  
  SFTUltraThinItalic: '.SFUIText-Ultrathinitalic',  

  //FONTS END
  base: { ...base },
  h1: { ...base, size: base.size * 1.75, lineHeight: lineHeight(base.size * 2) },
  h2: { ...base, size: base.size * 1.5, lineHeight: lineHeight(base.size * 1.75) },
  h3: { ...base, size: base.size * 1.25, lineHeight: lineHeight(base.size * 1.5) },
  h4: { ...base, size: base.size * 1.1, lineHeight: lineHeight(base.size * 1.25) },
  h5: { ...base },
};
