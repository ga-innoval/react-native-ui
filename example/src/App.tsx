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
        onPress={() => console.log('press')}
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
});
