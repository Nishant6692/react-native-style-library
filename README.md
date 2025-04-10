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

### From NPM (after publishing)

```bash
npm install react-native-style-system
# OR
yarn add react-native-style-system
```

### From GitHub

```bash
npm install github:yourusername/react-native-style-system
# OR
yarn add github:yourusername/react-native-style-system
```

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/react-native-style-system.git
   cd react-native-style-system
   ```

2. Install dependencies and build
   ```bash
   npm install
   npm run build
   ```

3. Link to your project
   ```bash
   npm link
   cd /path/to/your/project
   npm link react-native-style-system
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

### Using Style Helpers

```tsx
import { containerStyle, shadowStyle } from 'react-native-style-system';
import { View, Text } from 'react-native';

const MyComponent = () => (
  <View style={[containerStyle.card, shadowStyle.medium]}>
    <Text>This is a card with cross-platform shadow</Text>
  </View>
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

## License

MIT 