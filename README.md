# React Native Style System

A reusable central styling library for React Native that can be used across multiple applications. This package provides a consistent design system with colors, typography, spacing, and helper utilities, optimized for both iOS and Android platforms.

## Features

- 🎨 **Consistent Color Palette**: Centralized color definitions with semantic naming
- 📝 **Typography System**: Font sizes, weights, and pre-defined text styles optimized for each platform
- 📏 **Spacing Scale**: Standardized spacing units for margins and paddings
- 🎭 **Theme Composition**: All design tokens composed into a single theme object
- 🧰 **Cross-Platform Style Helpers**: Platform-specific shadows, containers, and more
- 📱 **Platform-Specific Utilities**: Tools to adjust styles for iOS and Android differences
- 📦 **Tree-shakable**: Import only what you need
- 📱 **React Native Compatible**: Works with both vanilla React Native and Expo
- 🔒 **TypeScript Support**: Full type definitions included

## Platform-Specific Features

- **Shadows**: Properly implemented for both platforms (shadowProps for iOS, elevation for Android)
- **Typography**: Platform-specific font families, weights, and line heights for optimal rendering
- **Status Bar**: Pre-configured platform-aware status bar styles
- **Touch Feedback**: Platform-specific touch feedback (ripple effect for Android)
- **Safe Areas**: Handling of iOS notch and Android status bar with appropriate spacing

## Installation

### From NPM

```bash
# Install the package
npm install @nishant/react-native-style-system
# OR
yarn add @nishant/react-native-style-system

# If you encounter peer dependency issues, use one of these flags:
npm install @nishant/react-native-style-system --legacy-peer-deps
# OR
yarn add @nishant/react-native-style-system --ignore-peer-dependencies
```

### From GitHub

```bash
# Install directly from GitHub
npm install github:nishant/react-native-style-system
# OR
yarn add github:nishant/react-native-style-system
```

### Troubleshooting Installation

If you encounter peer dependency conflicts (common with React Native projects), try one of these approaches:

1. Use the `--legacy-peer-deps` flag with npm:
   ```bash
   npm install @nishant/react-native-style-system --legacy-peer-deps
   ```

2. Or use the `--ignore-peer-dependencies` flag with yarn:
   ```bash
   yarn add @nishant/react-native-style-system --ignore-peer-dependencies
   ```

3. If you're using React Native 0.70+, make sure your `@types/react` version is compatible:
   ```bash
   npm install @types/react@^19.0.0 --save-dev
   ```

## Usage

### Basic Usage

```tsx
import { colors, textStyle, spacing } from 'react-native-style-system';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => (
  <View style={[styles.container, { backgroundColor: colors.background }]}>
    <Text style={textStyle.h2}>Hello World</Text>
    <Text style={textStyle.body}>This is a styled component</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    margin: spacing.md,
  },
});
```

### Using Platform-Specific Styles

```tsx
import { platformSelect, containerStyle } from 'react-native-style-system';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => (
  <View style={[
    containerStyle.safeScreen,
    // Platform-specific styles
    platformSelect({
      ios: { paddingTop: 50 },
      android: { paddingTop: 20 },
      default: {}
    })
  ]}>
    <Text>This has platform-specific padding</Text>
  </View>
);
```

### Using the Theme Object

```tsx
import { theme } from 'react-native-style-system';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => (
  <View style={styles.container}>
    <Text style={theme.typography.textStyle.h2}>Hello World</Text>
    <Text style={theme.typography.textStyle.body}>This is a styled component</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
});
```

### Cross-Platform Shadows

```tsx
import { shadowStyle } from 'react-native-style-system';
import { View, Text } from 'react-native';

// This will automatically use the appropriate shadow implementation
// for iOS (shadowProps) and Android (elevation)
const MyComponent = () => (
  <View style={[{ padding: 16, borderRadius: 8 }, shadowStyle.medium]}>
    <Text>This card has proper shadows on both iOS and Android</Text>
  </View>
);
```

### Platform-Specific Status Bar

```tsx
import { statusBarStyle } from 'react-native-style-system';
import { StatusBar } from 'react-native';

const MyComponent = () => (
  <>
    <StatusBar 
      barStyle={statusBarStyle.dark} 
      backgroundColor="transparent"
      translucent={true}
    />
    {/* Your component content */}
  </>
);
```

### Platform-Specific Touch Feedback

```tsx
import { touchableHighlight, rippleConfig, colors } from 'react-native-style-system';
import { TouchableOpacity, Platform, Text } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={Platform.OS === 'ios' ? 
      touchableHighlight.ios.activeOpacity : 
      touchableHighlight.android.activeOpacity
    }
    // Android ripple effect (React Native 0.63+)
    android_ripple={Platform.OS === 'android' ? rippleConfig : undefined}
    style={{
      backgroundColor: colors.primary,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    }}
  >
    <Text style={{ color: 'white' }}>{title}</Text>
  </TouchableOpacity>
);
```

## Customization

### Colors

Create your own color module that extends the base colors:

```tsx
// myColors.ts
import { colors as baseColors, palette } from 'react-native-style-system';

export const colors = {
  ...baseColors,
  // Override or add your custom colors
  primary: '#FF5722',
  secondary: '#2196F3',
};
```

### Typography

```tsx
// myTypography.ts
import { textStyle as baseTextStyle } from 'react-native-style-system';

export const textStyle = {
  ...baseTextStyle,
  // Override or add your custom text styles
  customHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF5722',
  },
};
```

## API Reference

### Colors

- `colors`: Semantic color tokens (primary, text, background, etc.)
- `palette`: Raw color values organized by color scales

### Typography

- `textStyle`: Pre-defined text styles (h1-h5, body, caption, etc.)
- `fontSize`: Font size scale
- `fontWeight`: Font weight definitions with platform-specific values
- `lineHeight`: Line height scale optimized for each platform
- `fontFamily`: Font family definitions with platform-specific defaults
- `letterSpacing`: Letter spacing options adjusted for platform differences

### Spacing

- `spacing`: Spacing scale (xs, sm, md, lg, etc.)
- `UNIT`: Base spacing unit (8pt)
- `createSpacing`: Helper functions for creating spacing objects

### Theme

- `theme`: Complete theme object containing all design tokens
- `Theme`: TypeScript type for the theme object

### Style Helpers

- `createShadow`: Function to create platform-specific shadow styles
- `shadowStyle`: Pre-defined shadow levels optimized for each platform
- `containerStyle`: Common container styles (screen, safeScreen, card, etc.)
- `createCircle`: Helper to create circular components
- `truncatedText`: Style for truncated text
- `platformSelect`: Function to select styles based on the current platform
- `statusBarStyle`: Platform-specific status bar styles
- `touchableHighlight`: Platform-specific touch highlight properties
- `rippleConfig`: Android ripple effect configuration

## Compatibility

- React Native: >=0.60.0
- React: >=16.8.0
- TypeScript: >=4.9.0

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Nishant 