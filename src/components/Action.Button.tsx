import React from 'react';
import { StyleSheet, View, Pressable, ActivityIndicator } from 'react-native';

import { Text } from './Styled.Text';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import type { ActionButtonProps } from '../constants/Types';
import { pressedOpacity, Theme } from '../constants/Theme';
import { usePlatform } from '../hooks/usePlatform';
const { spacing, colors } = Theme;

const iconSize = 16;

export function ActionButton({
  text,
  iconName,
  iconColor,
  iconBgColor,
  onPress,
  loading,
  style,
  ...otherButtonProps
}: ActionButtonProps) {
  const platform = usePlatform();
  const { isIos } = platform;

  const buttonStyles = [styles.container, style ? style : null];

  return (
    <Pressable
      {...otherButtonProps}
      accessibilityHint="button"
      android_ripple={{ borderless: false }}
      onPress={loading ? null : onPress}
      style={({ pressed }) => [
        ...buttonStyles,
        pressed && isIos && pressedOpacity,
      ]}
    >
      {iconName && (
        <View style={[styles.iconHolder, { backgroundColor: iconBgColor }]}>
          <Icon name={iconName} color={iconColor} size={iconSize} />
        </View>
      )}

      {loading && <ActivityIndicator size={'small'} color={colors.tint} />}
      {!loading && <Text>{text}</Text>}

      <Icon size={22} name={'chevron-right'} color={colors.tint} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  iconHolder: {
    padding: spacing.sm / 2,
    borderRadius: 50,
  },
});
