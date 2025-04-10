import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { 
  theme, 
  colors, 
  spacing, 
  textStyle, 
  containerStyle, 
  shadowStyle,
  createCircle
} from '../index';

/**
 * Example component demonstrating usage of the styling library
 */

const ExampleComponent: React.FC = () => {
  return (
    <View style={containerStyle.screenPadded}>
      {/* Heading */}
      <Text style={textStyle.h2}>Style System Example</Text>
      <Text style={[textStyle.body, { marginTop: spacing.sm, marginBottom: spacing.xl }]}>
        This example shows how to use the styling system with your components.
      </Text>
      
      {/* Card example */}
      <View style={[containerStyle.card, shadowStyle.medium, { marginBottom: spacing.xl }]}>
        <Text style={textStyle.h4}>Card Component</Text>
        <Text style={[textStyle.bodySm, { marginTop: spacing.xs }]}>
          This is a card with predefined styles and shadows.
        </Text>
      </View>
      
      {/* Colors example */}
      <Text style={[textStyle.h5, { marginBottom: spacing.md }]}>Color Examples</Text>
      <View style={[containerStyle.row, { flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.xl }]}>
        {Object.entries(colors)
          .filter(([key]) => key.startsWith('primary') || key === 'success' || key === 'danger')
          .map(([key, value]) => (
            <View 
              key={key} 
              style={{ 
                width: 80, 
                padding: spacing.sm,
                backgroundColor: value as string, 
                borderRadius: theme.borderRadius.sm,
                alignItems: 'center'
              }}
            >
              <Text style={[
                textStyle.caption, 
                { color: ['primaryLight', 'successLight', 'dangerLight'].includes(key) ? colors.text : colors.textInverse }
              ]}>
                {key}
              </Text>
            </View>
          ))}
      </View>

      {/* Button example */}
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          borderRadius: theme.borderRadius.md,
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.xl,
          alignItems: 'center',
          ...shadowStyle.small
        }}
      >
        <Text style={textStyle.button}>Primary Button</Text>
      </TouchableOpacity>
      
      {/* Circle example */}
      <View style={[containerStyle.center, { marginTop: spacing.xl }]}>
        <View style={createCircle(64, colors.primaryDark)}>
          <Text style={[textStyle.h4, { color: colors.textInverse }]}>✓</Text>
        </View>
      </View>
    </View>
  );
};

export default ExampleComponent; 