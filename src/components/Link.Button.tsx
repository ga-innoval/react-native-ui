import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../constants/Theme';
import type { LinkButtonProps } from '../constants/Types';

const { spacing, colors } = Theme;

export function LinkButton({ text, onPress }: LinkButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ color: colors.link }}>{text}</Text>
      <Icon
        style={{ marginLeft: spacing.sm / 2 }}
        size={16}
        name={'arrow-right'}
        color={colors.link}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
});
