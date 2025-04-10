import { Platform, ViewStyle, TextStyle, PlatformOSType, StatusBarStyle } from 'react-native';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

/**
 * Helper functions for common style patterns
 * 
 * This module contains reusable style helper functions that can be imported
 * and used across your application. These are optimized for cross-platform
 * compatibility between iOS and Android.
 */

// Type for platform-specific style objects
type PlatformSpecificStyle<T> = {
  ios?: T;
  android?: T;
  default: T;
};

/**
 * Select a style based on the current platform
 * @param styleObject Object containing platform-specific styles
 * @returns The appropriate style for the current platform
 */
export const platformSelect = <T>(styleObject: PlatformSpecificStyle<T>): T => {
  const platform = Platform.OS;
  if (platform === 'ios' && styleObject.ios) {
    return styleObject.ios;
  } else if (platform === 'android' && styleObject.android) {
    return styleObject.android;
  }
  return styleObject.default;
};

// Shadow styles with platform-specific implementations
export const createShadow = (
  elevation: number = 2,
  shadowColor: string = colors.shadow,
  shadowOpacity: number = 0.15,
  shadowRadius: number = 3,
  shadowOffset: { width: number; height: number } = { width: 0, height: 2 }
): ViewStyle => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor,
      shadowOpacity,
      shadowRadius,
      shadowOffset,
    };
  } else {
    // Android
    return {
      elevation,
      // On Android, we also add this for better shadow rendering on certain devices
      shadowColor: 'rgba(0, 0, 0, 0.24)',
    };
  }
};

// Predefined shadow levels
export const shadowStyle = {
  none: {},
  small: createShadow(2, colors.shadow, 0.1, 2, { width: 0, height: 1 }),
  medium: createShadow(4, colors.shadow, 0.15, 3, { width: 0, height: 2 }),
  large: createShadow(8, colors.shadow, 0.2, 6, { width: 0, height: 4 }),
  xl: createShadow(12, colors.shadow, 0.25, 12, { width: 0, height: 8 }),
};

// Common container styles
export const containerStyle = {
  // Basic screen container
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
  
  // Padded screen container
  screenPadded: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  } as ViewStyle,
  
  // Safe area screen container - handles iOS notch and Android status bar
  safeScreen: {
    flex: 1,
    backgroundColor: colors.background,
    // Different padding for iOS to account for the notch
    ...platformSelect<ViewStyle>({
      ios: { paddingTop: spacing.lg },
      android: { paddingTop: spacing.sm },
      default: {}
    })
  } as ViewStyle,
  
  // Card container
  card: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: spacing.lg,
    ...shadowStyle.small,
  } as ViewStyle,
  
  // Center content horizontally and vertically
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  
  // Row layout with centered items
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  
  // Row layout with space between items
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
};

// Helper for creating a circle with a specified size
export const createCircle = (size: number, backgroundColor: string = colors.primary): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor,
  ...containerStyle.center,
});

// Helper for truncating text
export const truncatedText: TextStyle = {
  overflow: 'hidden',
};

// Platform-specific status bar styles
export const statusBarStyle = {
  light: platformSelect<StatusBarStyle>({
    ios: 'light-content',
    android: 'light-content',
    default: 'light-content'
  }),
  dark: platformSelect<StatusBarStyle>({
    ios: 'dark-content',
    android: 'dark-content',
    default: 'dark-content'
  }),
};

// Touchable highlight states for different platforms
export const touchableHighlight = {
  ios: {
    underlayColor: colors.backgroundLight,
    activeOpacity: 0.7,
  },
  android: {
    underlayColor: colors.backgroundLight,
    activeOpacity: 0.9,
  }
};

// Android ripple effect configuration
export const rippleConfig = {
  color: 'rgba(0, 0, 0, 0.1)',
  borderless: false,
};

export default {
  createShadow,
  shadowStyle,
  containerStyle,
  createCircle,
  truncatedText,
  platformSelect,
  statusBarStyle,
  touchableHighlight,
  rippleConfig
}; 