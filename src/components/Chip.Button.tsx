import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from './Styled.Text';

import { pressedOpacity, Theme } from '../constants/Theme';
const { spacing } = Theme;

import type { ChipButtonProps } from '../constants/Types';
import { usePlatform } from '../hooks/usePlatform';

export function ChipButton({
  onPress,
  iconName,
  text,
  color,
  backgroundColor,
  style,
  ...otherButtonProps
}: ChipButtonProps) {
  const platform = usePlatform();
  const { isIos, isAndroid } = platform;

  const chipButtonStyles = [
    styles.container,
    {
      backgroundColor: backgroundColor ? backgroundColor : Theme.colors.tint,
    },
  ];

  return (
    <View style={[styles.viewContainer, style]}>
      <Pressable
        android_ripple={{ borderless: false }}
        onPress={onPress}
        style={({ pressed }) => [
          ...chipButtonStyles,
          pressed && isIos && pressedOpacity,
          pressed && isAndroid && !backgroundColor && pressedOpacity,
        ]}
        {...otherButtonProps}
      >
        {iconName && (
          <Icon name={iconName} size={20} color={color ?? 'white'} />
        )}
        <Text style={[styles.actionText, { color: color ?? 'white' }]}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    borderRadius: 100,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  actionText: {
    fontWeight: 'bold',
    marginLeft: spacing.sm / 2,
  },
});
