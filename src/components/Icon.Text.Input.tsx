import React from 'react';
import { View, TextInput as DefaultTextInput, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../constants/Theme';
import type { TextInputProps } from '../constants/Types';

const { colors, spacing } = Theme;

export function IconTextInput({
  iconName,
  ...otherInputProps
}: TextInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={16} color={colors.tint} />
      </View>

      <DefaultTextInput
        {...otherInputProps}
        style={styles.input}
        placeholderTextColor="#0007"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: spacing.sm,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  input: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    marginVertical: spacing.sm,
  },
  iconContainer: {
    padding: spacing.sm,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderWidth: 2,
    borderTopLeftRadius: spacing.sm / 2,
    borderBottomLeftRadius: spacing.sm / 2,
  },
});
