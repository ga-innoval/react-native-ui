import type { ReactNode } from 'react';
import type {
  ColorValue,
  ModalProps,
  PressableProps,
  ViewStyle,
  TextInputProps as DefaultTextInputProps,
} from 'react-native';

export interface Icon {
  name: string;
  color: ColorValue;
  backgroundColor?: ColorValue;
}

export interface ButtonProps extends PressableProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  style?: ViewStyle;
}

export interface PrimaryButtonProps extends ButtonProps {
  backgroundColor?: ColorValue;
}

export interface ActionButtonProps extends ButtonProps {
  icon?: Icon;
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
}

export interface ChipButtonProps {
  onPress: () => void;
  icon?: string;
  text: string;
  backgroundColor?: ColorValue;
  containerStyle?: ViewStyle;
}

export interface LinkButtonProps {
  text: string;
  onPress: () => void;
}

export interface MaskContainerProps {
  children: ReactNode;
}

export interface TextInputProps extends DefaultTextInputProps {
  icon: string;
}

type PickerItem = { label: string; value: string | number };

export interface SearchablePickerProps {
  text: string;
  data: Array<PickerItem>;
  selectedItem: PickerItem;
  onItemSelected: (item: PickerItem) => void;
}
