/**
 * Color palette for your React Native applications
 * 
 * This module exports a set of semantic color tokens and a palette of colors
 * that can be used across your applications.
 */

// Base colors - the raw color values
export const palette = {
  // Primary
  purple10: '#f5f3ff',
  purple50: '#e9d5ff',
  purple100: '#d8b4fe',
  purple300: '#a855f7',
  purple500: '#8b5cf6',
  purple700: '#6d28d9',
  purple900: '#4c1d95',
  
  // Grays
  white: '#ffffff',
  gray10: '#f9fafb',
  gray50: '#f7f8fa',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  black: '#000000',
  
  // Supporting colors
  red100: '#fee2e2',
  red500: '#ef4444',
  red700: '#b91c1c',
  
  green100: '#dcfce7',
  green500: '#22c55e',
  green700: '#15803d',
  
  blue100: '#dbeafe',
  blue500: '#3b82f6',
  blue700: '#1d4ed8',
  
  yellow100: '#fef9c3',
  yellow500: '#eab308',
  yellow700: '#a16207',
  
  // Transparent helper
  transparent: 'transparent',
};

// Semantic colors - colors with meaning in your UI
export const colors = {
  // Core UI
  primary: palette.purple500,
  primaryLight: palette.purple100,
  primaryDark: palette.purple700,
  
  // Text
  text: palette.gray900,
  textMedium: palette.gray700,
  textLight: palette.gray500,
  textInverse: palette.white,
  
  // Background
  background: palette.white,
  backgroundLight: palette.gray50,
  backgroundDark: palette.gray900,
  
  // UI Elements
  border: palette.gray200,
  borderLight: palette.gray100,
  borderDark: palette.gray400,
  
  // Status
  success: palette.green500,
  successLight: palette.green100,
  danger: palette.red500,
  dangerLight: palette.red100,
  warning: palette.yellow500,
  warningLight: palette.yellow100,
  info: palette.blue500,
  infoLight: palette.blue100,
  
  // Others
  disabled: palette.gray300,
  shadow: palette.black,
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export default colors; 