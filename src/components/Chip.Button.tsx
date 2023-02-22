import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, Pressable, StyleSheet } from 'react-native';

import { Theme } from '../constants/Theme';
const { spacing } = Theme;

import type { ChipButtonProps } from '../constants/Types';

export function ChipButton({
  onPress,
  iconName,
  text,
  backgroundColor,
  containerStyle,
}: ChipButtonProps) {
  const chipButtonStyles = [
    styles.container,
    {
      backgroundColor: backgroundColor ? backgroundColor : Theme.colors.tint,
      ...containerStyle,
    },
  ];
  return (
    <Pressable
      android_ripple={{ borderless: true }}
      onPress={onPress}
      style={chipButtonStyles}
    >
      {iconName && <Icon name={iconName} size={20} color="white" />}
      <Text style={styles.actionText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 100,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  actionText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: spacing.sm / 2,
  },
});
