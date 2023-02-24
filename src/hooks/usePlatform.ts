import { Platform } from 'react-native';

export function usePlatform() {
  const isAndroid = Platform.OS === 'android';
  const isIos = Platform.OS === 'ios';

  return { isAndroid, isIos };
}
