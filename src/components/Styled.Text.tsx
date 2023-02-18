import React from 'react';
import { Text as DefaultText, StyleSheet, TextProps } from 'react-native';

import { Theme } from '../constants/Theme';
const { colors } = Theme;

export function Title({ style, children, ...otherProps }: TextProps) {
  const textStyles = [style, styles.title];
  return (
    <DefaultText {...otherProps} style={textStyles}>
      {children}
    </DefaultText>
  );
}

export function Text({ style, children, ...otherProps }: TextProps) {
  const textStyles = [styles.text, style];
  return (
    <DefaultText {...otherProps} style={textStyles}>
      {children}
    </DefaultText>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: colors.tint,
    fontSize: 20,
  },
  text: {
    color: colors.darkText,
    fontSize: 16,
  },
});
