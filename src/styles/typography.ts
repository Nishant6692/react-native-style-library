import { TextStyle, Platform } from 'react-native';
import { colors } from './colors';

/**
 * Typography definitions for your React Native application
 * 
 * This module exports font sizes, weights, families and pre-defined text styles
 * that can be used across your applications. It includes platform-specific adjustments
 * for optimal rendering on both iOS and Android.
 */

// Platform-specific font families
export const fontFamily = {
  // Base fonts - platform-aware defaults
  base: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  medium: Platform.select({
    ios: 'System',
    android: 'Roboto-Medium',
    default: 'System',
  }),
  bold: Platform.select({
    ios: 'System',
    android: 'Roboto-Bold',
    default: 'System',
  }),
  light: Platform.select({
    ios: 'System',
    android: 'Roboto-Light',
    default: 'System',
  }),
  // Add custom fonts here (after you've linked them in your project)
  // custom: 'CustomFont-Regular',
  // customMedium: 'CustomFont-Medium',
  // customBold: 'CustomFont-Bold',
};

// Font sizes
export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
};

// Font weights - platform-specific handling
export const fontWeight = {
  thin: Platform.select({
    ios: '100',
    android: '100',
    default: '100',
  }) as TextStyle['fontWeight'],
  extraLight: Platform.select({
    ios: '200',
    android: '200',
    default: '200',
  }) as TextStyle['fontWeight'],
  light: Platform.select({
    ios: '300',
    android: '300',
    default: '300',
  }) as TextStyle['fontWeight'],
  regular: Platform.select({
    ios: '400',
    android: '400',
    default: '400',
  }) as TextStyle['fontWeight'],
  medium: Platform.select({
    ios: '500',
    android: '500',
    default: '500',
  }) as TextStyle['fontWeight'],
  semibold: Platform.select({
    ios: '600',
    android: '600',
    default: '600',
  }) as TextStyle['fontWeight'],
  bold: Platform.select({
    ios: '700',
    android: '700', 
    default: '700',
  }) as TextStyle['fontWeight'],
  extraBold: Platform.select({
    ios: '800',
    android: '800',
    default: '800',
  }) as TextStyle['fontWeight'],
  black: Platform.select({
    ios: '900',
    android: '900',
    default: '900',
  }) as TextStyle['fontWeight'],
};

// Line heights - slightly increased on Android for better text rendering
const lineHeightFactor = Platform.OS === 'android' ? 1.2 : 1;

// Line heights
export const lineHeight = {
  xs: Math.round(16 * lineHeightFactor),
  sm: Math.round(20 * lineHeightFactor),
  md: Math.round(24 * lineHeightFactor),
  lg: Math.round(28 * lineHeightFactor),
  xl: Math.round(32 * lineHeightFactor),
  xxl: Math.round(36 * lineHeightFactor),
  xxxl: Math.round(48 * lineHeightFactor),
  xxxxl: Math.round(56 * lineHeightFactor),
};

// Letter spacing - adjusted for platform differences
const letterSpacingFactor = Platform.OS === 'android' ? 1.5 : 1;

// Letter spacing
export const letterSpacing = {
  tighter: -0.8 * letterSpacingFactor,
  tight: -0.4 * letterSpacingFactor,
  normal: 0,
  wide: 0.5 * letterSpacingFactor,
  wider: 1 * letterSpacingFactor,
  widest: 2 * letterSpacingFactor,
};

// Function to create a platform-optimized text style
const createTextStyle = (
  style: TextStyle,
  options?: { androidAdjust?: boolean }
): TextStyle => {
  // Some Android phones render text a bit smaller
  const androidStyle = options?.androidAdjust && Platform.OS === 'android'
    ? { fontSize: (style.fontSize || 0) + 1 }
    : {};
    
  return {
    ...style,
    ...androidStyle,
    // Include font family if using custom fonts
    // fontFamily: fontFamily.base,
  };
};

// Pre-defined text styles
export const textStyle = {
  // Headings
  h1: createTextStyle({
    fontSize: fontSize.xxxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxxl,
    color: colors.text,
    letterSpacing: letterSpacing.tight,
  }, { androidAdjust: true }),
  
  h2: createTextStyle({
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxxl,
    color: colors.text,
    letterSpacing: letterSpacing.tight,
  }, { androidAdjust: true }),
  
  h3: createTextStyle({
    fontSize: fontSize.xxl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xxl,
    color: colors.text,
  }),
  
  h4: createTextStyle({
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xl,
    color: colors.text,
  }),
  
  h5: createTextStyle({
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.lg,
    color: colors.text,
  }),
  
  // Body text
  bodyLg: createTextStyle({
    fontSize: fontSize.lg,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.lg,
    color: colors.text,
  }),
  
  body: createTextStyle({
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.md,
    color: colors.text,
  }),
  
  bodySm: createTextStyle({
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm,
    color: colors.text,
  }),
  
  // Caption and label text
  caption: createTextStyle({
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.sm,
    color: colors.textLight,
  }),
  
  label: createTextStyle({
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.sm,
    color: colors.text,
  }),
  
  // Special text styles
  button: createTextStyle({
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.md,
    color: colors.textInverse,
    textAlign: 'center',
  }),
};

export default textStyle; 