import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Theme } from '../constants/Theme';
import type { AlertModalProps } from '../constants/Types';
import { OpacityMask } from './Opacity.Mask';
import { Title } from './Styled.Text';

const { spacing } = Theme;

export function AlertModal({
  title,
  children,
  visible,
  ...otherProps
}: AlertModalProps) {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        {...otherProps}
      >
        <View style={styles.contentContainer}>
          <View style={styles.modalView}>
            <Title style={styles.title}>{title}</Title>
            {children}
          </View>
        </View>
      </Modal>

      <OpacityMask visible={visible} />
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: spacing.sm,
    backgroundColor: 'white',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg * 1.5,
    borderRadius: spacing.sm,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: spacing.lg,
    fontSize: 15,
    textAlign: 'center',
  },
});
