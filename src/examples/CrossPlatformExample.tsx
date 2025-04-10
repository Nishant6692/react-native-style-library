import React from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView, StatusBar } from 'react-native';
import { 
  theme, 
  colors, 
  spacing, 
  textStyle, 
  containerStyle, 
  shadowStyle,
  platformSelect,
  statusBarStyle,
  touchableHighlight,
  rippleConfig
} from '../index';

/**
 * Example component demonstrating cross-platform features
 */

const CrossPlatformExample: React.FC = () => {
  // Platform detection for showing in UI
  const currentPlatform = Platform.OS;
  
  return (
    <View style={containerStyle.safeScreen}>
      {/* Platform-aware status bar */}
      <StatusBar 
        barStyle={statusBarStyle.dark}
        backgroundColor={colors.background}
        translucent={Platform.OS === 'android'}
      />
      
      <ScrollView 
        contentContainerStyle={{ padding: spacing.lg }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with platform indicator */}
        <View style={[
          containerStyle.row, 
          { justifyContent: 'space-between', marginBottom: spacing.xl }
        ]}>
          <Text style={textStyle.h2}>Cross-Platform UI</Text>
          <View style={{
            backgroundColor: colors.primaryLight,
            paddingHorizontal: spacing.md,
            paddingVertical: spacing.xs,
            borderRadius: theme.borderRadius.pill,
          }}>
            <Text style={[textStyle.label, { color: colors.primary }]}>
              {currentPlatform === 'ios' ? 'iOS' : 'Android'}
            </Text>
          </View>
        </View>
        
        {/* Platform specific UI components */}
        <Text style={[textStyle.h4, { marginBottom: spacing.md }]}>Platform-Specific Features</Text>
        
        {/* Cards with platform-specific shadows */}
        <View style={[
          containerStyle.card, 
          shadowStyle.medium, 
          { marginBottom: spacing.xl }
        ]}>
          <Text style={textStyle.h5}>Optimized Shadows</Text>
          <Text style={[textStyle.bodySm, { marginTop: spacing.xs }]}>
            {Platform.OS === 'ios' 
              ? 'Using iOS shadow properties for smooth rendering' 
              : 'Using Android elevation with additional shadow color'}
          </Text>
        </View>
        
        {/* Typography examples */}
        <Text style={[textStyle.h5, { marginBottom: spacing.md }]}>Typography Optimizations</Text>
        <View style={[
          containerStyle.card, 
          { marginBottom: spacing.xl }
        ]}>
          <Text style={textStyle.body}>
            Platform-specific font: {Platform.select({
              ios: 'San Francisco (iOS)',
              android: 'Roboto (Android)',
              default: 'System default'
            })}
          </Text>
          <Text style={[textStyle.body, { marginTop: spacing.md }]}>
            Line heights are adjusted to look consistent on both platforms.
          </Text>
        </View>
        
        {/* Touch feedback examples */}
        <Text style={[textStyle.h5, { marginBottom: spacing.md }]}>Platform Touch Feedback</Text>
        
        {/* iOS-style button */}
        {Platform.OS === 'ios' && (
          <TouchableOpacity 
            style={{
              backgroundColor: colors.primary,
              borderRadius: theme.borderRadius.md,
              paddingVertical: spacing.md,
              alignItems: 'center',
              marginBottom: spacing.lg,
              ...shadowStyle.small
            }}
            activeOpacity={touchableHighlight.ios.activeOpacity}
          >
            <Text style={textStyle.button}>iOS-Style Button</Text>
          </TouchableOpacity>
        )}
        
        {/* Android-style button */}
        {Platform.OS === 'android' && (
          <TouchableOpacity 
            style={{
              backgroundColor: colors.primary,
              borderRadius: theme.borderRadius.md,
              paddingVertical: spacing.md,
              alignItems: 'center',
              marginBottom: spacing.lg,
              elevation: 4,
            }}
            // @ts-ignore - The android_ripple prop is available but TypeScript doesn't know about it
            android_ripple={rippleConfig}
          >
            <Text style={textStyle.button}>Android-Style Button (Ripple)</Text>
          </TouchableOpacity>
        )}
        
        {/* Platform-specific spacing */}
        <Text style={[textStyle.h5, { marginBottom: spacing.md }]}>Platform-Specific Layout</Text>
        <View style={[
          containerStyle.card,
          {
            ...platformSelect({
              ios: { paddingHorizontal: spacing.xl },
              android: { paddingHorizontal: spacing.lg },
              default: { padding: spacing.lg }
            })
          }
        ]}>
          <Text style={textStyle.body}>
            This card has platform-specific padding to account for platform UI differences.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CrossPlatformExample; 