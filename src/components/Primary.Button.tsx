import React from 'react';
import { Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { Theme } from '../constants/Theme';
import type { PrimaryButtonProps } from '../constants/Types';

const { spacing, colors } = Theme;

export function PrimaryButton({
  text,
  loading,
  backgroundColor,
  onPress,
  style,
  ...otherButtonProps
}: PrimaryButtonProps) {
  const buttonStyles = [
    styles.container,
    style,
    {
      backgroundColor: backgroundColor ? backgroundColor : Theme.colors.tint,
    },
  ];
  return (
    <Pressable
      onPress={loading ? null : onPress}
      android_ripple={{ borderless: false }}
      style={buttonStyles}
      {...otherButtonProps}
    >
      {loading && <ActivityIndicator size={'small'} color={colors.lightText} />}

      {!loading && <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderRadius: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.lightText,
    fontWeight: 'bold',
  },
});
