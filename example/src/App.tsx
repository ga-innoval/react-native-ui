import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { PrimaryButton } from '@ga-innoval/react-native-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimaryButton
        style={{ marginBottom: 10 }}
        text="Press me"
        loading={false}
        onPress={() => {}}
      />
      <PrimaryButton text="Press me" loading={true} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
