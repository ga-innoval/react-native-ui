import { Platform } from 'react-native';

export function usePlatform() {
  const isAndroid = Platform.OS === 'android';
  const isIos = Platform.OS === 'ios';
  console.log(isIos);

  return { isAndroid, isIos };
}
