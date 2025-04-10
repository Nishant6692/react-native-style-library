import { colors, palette } from './colors';
import { spacing, UNIT, createSpacing } from './spacing';
import { 
  textStyle, 
  fontSize, 
  fontWeight, 
  lineHeight, 
  fontFamily,
  letterSpacing 
} from './typography';

/**
 * Theme module that composes all design tokens
 * 
 * This module serves as a central point to access all design tokens
 * from colors, typography, and spacing.
 */

export const theme = {
  // Colors
  colors,
  palette,
  
  // Typography
  typography: {
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
    letterSpacing,
    textStyle,
  },
  
  // Spacing
  spacing,
  UNIT,
  createSpacing,
  
  // Breakpoints for responsive design
  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
  },
  
  // Z-index values
  zIndex: {
    base: 0,
    card: 10,
    dialog: 20,
    navigation: 30,
    overlay: 40,
    modal: 50,
    toast: 60,
  },
  
  // Border radius
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    pill: 9999,
    circle: '50%',
  },
};

// Type definition for the theme object
export type Theme = typeof theme;

export default theme; 