/**
 * Spacing system for your React Native applications
 * 
 * This module exports spacing values for consistent margins, paddings,
 * and layouts across your application.
 */

// Base spacing unit in points (8pt grid)
export const UNIT = 8;

// Spacing scale based on the base unit
export const spacing = {
  // General spacing
  none: 0,
  xxs: UNIT / 4, // 2
  xs: UNIT / 2,   // 4
  sm: UNIT,       // 8
  md: UNIT * 1.5, // 12
  lg: UNIT * 2,   // 16
  xl: UNIT * 3,   // 24
  xxl: UNIT * 4,  // 32
  xxxl: UNIT * 6, // 48
  xxxxl: UNIT * 8, // 64
  
  // Special named spacing
  screenHorizontal: UNIT * 2, // 16 - default horizontal padding for screens
  sectionVertical: UNIT * 3,  // 24 - default vertical padding for sections
  itemVertical: UNIT,         // 8 - default vertical padding between items
  inlineItems: UNIT,          // 8 - default horizontal spacing between inline items
};

// Helper functions for creating spacing objects
export const createSpacing = {
  // Creates a margin object with the same value for all sides
  margin: (value: number) => ({
    margin: value,
  }),
  
  // Creates a padding object with the same value for all sides
  padding: (value: number) => ({
    padding: value,
  }),
  
  // Creates a margin object with horizontal (left, right) and vertical (top, bottom) values
  marginSymmetric: (vertical: number, horizontal: number) => ({
    marginVertical: vertical,
    marginHorizontal: horizontal,
  }),
  
  // Creates a padding object with horizontal (left, right) and vertical (top, bottom) values
  paddingSymmetric: (vertical: number, horizontal: number) => ({
    paddingVertical: vertical,
    paddingHorizontal: horizontal,
  }),
};

export default spacing; 