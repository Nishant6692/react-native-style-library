/**
 * React Native Style System
 * 
 * A central styling library for React Native to maintain consistent design
 * across multiple applications. Optimized for both iOS and Android platforms.
 */

// Re-export all styles and utilities
export { colors, palette } from './styles/colors';
export { 
  textStyle,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  letterSpacing
} from './styles/typography';
export { spacing, UNIT, createSpacing } from './styles/spacing';
export { theme, Theme } from './styles/theme';
export { 
  createShadow,
  shadowStyle,
  containerStyle,
  createCircle,
  truncatedText,
  platformSelect,
  statusBarStyle,
  touchableHighlight,
  rippleConfig
} from './utils/styleHelpers';

// Default export is the theme
import theme from './styles/theme';
export default theme; 