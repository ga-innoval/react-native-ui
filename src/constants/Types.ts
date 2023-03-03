import type { ReactNode } from 'react';
import type {
  ColorValue,
  ModalProps,
  PressableProps,
  ViewStyle,
  TextInputProps as DefaultTextInputProps,
} from 'react-native';

import type { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export interface ButtonProps extends PressableProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  style?: ViewStyle | Array<ViewStyle>;
}

export interface PrimaryButtonProps extends ButtonProps {
  backgroundColor?: ColorValue;
}

export interface ActionButtonProps extends ButtonProps {
  iconName?: keyof typeof Icon.glyphMap;
  iconColor?: ColorValue;
  iconBgColor?: ColorValue;
}

export interface AlertModalProps extends ModalProps {
  title: string;
  children: ReactNode;
  visible: boolean;
}

export interface BottomModalProps {
  visible: boolean;
  onDismiss: () => void;
  children: ReactNode;
  containerStyle?: ViewStyle;
  showOpacityMask?: boolean;
}

export interface ChipButtonProps extends ButtonProps {
  iconName?: keyof typeof Icon.glyphMap;
  backgroundColor?: ColorValue;
}

export interface LinkButtonProps extends ButtonProps {
  text: string;
  onPress: () => void;
}

export interface MaskContainerProps {
  children: ReactNode;
}

export interface TextInputProps extends DefaultTextInputProps {
  iconName: keyof typeof Icon.glyphMap;
  containerStyle?: ViewStyle | ViewStyle[];
}

export type PickerItem = { label: string; value: any };

export interface SearchablePickerProps {
  placeholder: string;
  data: Array<PickerItem>;
  selectedItem?: PickerItem | null;
  onItemSelected?: (item: PickerItem) => void;
  style?: ViewStyle | ViewStyle[];
  showOpacityMask?: boolean;
}
