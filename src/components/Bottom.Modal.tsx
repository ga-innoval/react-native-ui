import React, { useCallback, useEffect, useRef } from 'react';
import {
  Dimensions,
  StyleSheet,
  Modal,
  View,
  Pressable,
  Keyboard,
  Animated,
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
  const showMask = showOpacityMask ?? true;

  const shouldDisplay = persistent || visible;
  const heightAnim = useRef(new Animated.Value(screenHeight / 2)).current;

  const decreaseHeight = useCallback(() => {
    Animated.timing(heightAnim, {
      toValue: screenHeight / 9,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [heightAnim]);

  const increaseHeight = useCallback(() => {
    Animated.timing(heightAnim, {
      toValue: screenHeight / 2,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [heightAnim]);

  const handleDismiss = () => {
    increaseHeight();
    onDismiss();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        decreaseHeight();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        increaseHeight();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [decreaseHeight, increaseHeight]);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={shouldDisplay}>
        <View style={styles.menuContainer}>
          <Animated.View
            style={[
              { height: heightAnim },
              persistent && { height: screenHeight - 150 },
            ]}
          >
            <Pressable
              testID="modalPressableArea"
              style={styles.dismissArea}
              onPress={handleDismiss}
            />
          </Animated.View>
          <Animated.View style={[styles.modalContainer, containerStyle]}>
            <View style={styles.childrenContainer}>{children}</View>
          </Animated.View>
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
    borderTopRightRadius: spacing.md,
    borderTopLeftRadius: spacing.md,
    flex: 1,
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
