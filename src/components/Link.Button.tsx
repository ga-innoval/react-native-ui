import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../constants/Theme';
import type { LinkButtonProps } from '../constants/Types';

const { spacing, colors } = Theme;

export function LinkButton({
  text,
  onPress,
  style,
  ...otherPressableProps
}: LinkButtonProps) {
  const linkButtonStyles = [styles.container, style];
  return (
    <Pressable
      onPress={onPress}
      style={linkButtonStyles}
      {...otherPressableProps}
    >
      <Text style={{ color: colors.link }}>{text}</Text>
      <Icon
        style={{ marginLeft: spacing.sm / 2 }}
        size={16}
        name={'arrow-right'}
        color={colors.link}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
});
