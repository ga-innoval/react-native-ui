import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Modal,
  View,
  Pressable,
  Keyboard,
} from 'react-native';

import { Theme } from '../constants/Theme';
import type { BottomModalProps } from '../constants/Types';
import { OpacityMask } from './Opacity.Mask';
const { spacing } = Theme;

const screenHeight = Dimensions.get('window').height;

export function BottomModal({
  visible,
  onDismiss,
  children,
  containerStyle,
  showOpacityMask,
  persistent,
}: BottomModalProps) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const showMask = showOpacityMask ?? true;

  const shouldDisplay = persistent || visible;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={shouldDisplay}>
        <View style={styles.menuContainer}>
          <Pressable
            testID="modalPressableArea"
            style={[
              styles.dismissArea,
              isKeyboardVisible && { height: screenHeight / 8 },
              persistent && { height: screenHeight - 150 },
            ]}
            onPress={onDismiss}
          />
          <View
            style={[
              styles.modalContainer,
              isKeyboardVisible && { height: screenHeight },
              containerStyle,
            ]}
          >
            <View style={styles.childrenContainer}>{children}</View>
          </View>
        </View>
      </Modal>
      {showMask && <OpacityMask visible={shouldDisplay} />}
    </>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    position: 'relative',
    bottom: 0,
    height: screenHeight / 2,
    borderTopRightRadius: spacing.md,
    borderTopLeftRadius: spacing.md,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  dismissArea: {
    position: 'relative',
    height: screenHeight / 2,
  },
  childrenContainer: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
});
