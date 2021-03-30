import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#1558FF', // blue
  secondary: '#868998', // gray

  // colors
  black: '#130732',
  white: '#FFFFFF',

  lightGray: '#CFD6DE',
  warning: '#F2AC57',
  success: '#14A38B',
  lightGray2: '#F8F8F9',
  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 48,
  h1: 28,
  h2: 24,
  h3: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'DMSans-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'DMSans-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
