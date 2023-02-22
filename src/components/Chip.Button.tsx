import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text, Pressable, StyleSheet } from 'react-native';

import { Theme } from '../constants/Theme';
const { spacing } = Theme;

import type { ChipButtonProps } from '../constants/Types';

export function ChipButton({
  onPress,
  icon,
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
      {icon && <FontAwesome name={icon} size={30} color="#900" />}
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
