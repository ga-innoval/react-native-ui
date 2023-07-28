import { NativeModules } from 'react-native';

import { PrimaryButton } from './components/Primary.Button';
import { AlertModal } from './components/Alert.Modal';
import { BottomModal } from './components/Bottom.Modal';
import { ChipButton } from './components/Chip.Button';
import { LinkButton } from './components/Link.Button';
import { Title, Text } from './components/Styled.Text';
import { IconTextInput } from './components/Icon.Text.Input';
import { SearchablePicker } from './components/Searchable.Picker';
import { ActionButton } from './components/Action.Button';
import type { PickerItem } from './constants/Types';
import { MultipleSearchablePicker } from './components/Multiple.Searchable.Picker';

export {
  PrimaryButton,
  ChipButton,
  LinkButton,
  ActionButton,
  AlertModal,
  BottomModal,
  Title,
  Text,
  IconTextInput,
  SearchablePicker,
  PickerItem,
  MultipleSearchablePicker,
};

export default NativeModules.RNInnovalUiComponentsModule;
