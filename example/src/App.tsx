import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton, AlertModal } from '@ga-innoval/react-native-ui';

export default function App() {
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const [isPrimaryButtonLoading, setPrimaryButtonLoading] =
    React.useState(false);

  const handlePrimaryButtonPress = () => {
    setPrimaryButtonLoading(true);
    setTimeout(() => {
      setPrimaryButtonLoading(false);
      setIsAlertVisible(true);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <PrimaryButton
        style={styles.marginBottom}
        text="Press me"
        loading={isPrimaryButtonLoading}
        onPress={handlePrimaryButtonPress}
      />

      <AlertModal title="Alerta" visible={isAlertVisible}>
        <Text style={styles.marginBottom}>
          Esta es una alerta que puede contener cualquier componente!
        </Text>
        <PrimaryButton
          loading={false}
          text="Entendido"
          onPress={() => setIsAlertVisible(false)}
        />
      </AlertModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 10,
  },
});
