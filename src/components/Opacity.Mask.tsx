import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export function OpacityMask({
  visible,
  zIndex,
}: {
  visible: boolean;
  zIndex?: number;
}) {
  const elevationStyle = {
    zIndex: zIndex ?? 1,
  };
  if (visible) {
    return <View style={[styles.mask, elevationStyle]} />;
  }
  return null;
}

const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.75)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  maskContainer: {
    flex: 1,
    elevation: Platform.OS === 'android' ? 1 : 0,
  },
});
