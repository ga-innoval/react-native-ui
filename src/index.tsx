import { NativeModules } from 'react-native';

import { PrimaryButton } from './components/Primary.Button';
import { AlertModal } from './components/Alert.Modal';
import { BottomModal } from './components/Bottom.Modal';
import { ChipButton } from './components/Chip.Button';
import { LinkButton } from './components/Link.Button';
import { Title, Text } from './components/Styled.Text';

export {
  PrimaryButton,
  ChipButton,
  LinkButton,
  AlertModal,
  BottomModal,
  Title,
  Text,
};

export default NativeModules.RNInnovalUiComponentsModule;
