import React from 'react';
import { StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { usePlatform } from '../hooks/usePlatform';
import { pressedOpacity, Theme } from '../constants/Theme';
import type { PrimaryButtonProps } from '../constants/Types';
import { Text } from './Styled.Text';

const { spacing, colors } = Theme;

export function PrimaryButton({
  text,
  loading,
  backgroundColor,
  onPress,
  style,
  ...otherButtonProps
}: PrimaryButtonProps) {
  const platform = usePlatform();
  const { isIos, isAndroid } = platform;

  const buttonStyles = [
    styles.container,
    style ? style : null,
    {
      backgroundColor: backgroundColor ? backgroundColor : Theme.colors.tint,
    },
  ];

  return (
    <Pressable
      onPress={loading ? null : onPress}
      android_ripple={{ borderless: false }}
      style={({ pressed }) => [
        ...buttonStyles,
        pressed && isIos && pressedOpacity,
        pressed && isAndroid && !backgroundColor && pressedOpacity,
      ]}
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
