import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  PrimaryButton,
  AlertModal,
  BottomModal,
  Title,
  Text,
  ChipButton,
  LinkButton,
  IconTextInput,
} from '@ga-innoval/react-native-ui';

export default function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isPrimaryButtonLoading, setPrimaryButtonLoading] = useState(false);
  const [isBottomModalVisible, setIsBottomModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handlePrimaryButtonPress = () => {
    setPrimaryButtonLoading(true);
    setTimeout(() => {
      setIsAlertVisible(true);
      setPrimaryButtonLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <PrimaryButton
        style={styles.marginBottom}
        text="Open Alert"
        loading={isPrimaryButtonLoading}
        onPress={handlePrimaryButtonPress}
      />
      <PrimaryButton
        style={[styles.marginBottom]}
        text="Open bottom modal"
        onPress={() => setIsBottomModalVisible(true)}
      />

      <ChipButton
        iconName="account-plus"
        style={styles.marginBottom}
        backgroundColor={'#40ABE8'}
        text="Chip button"
        onPress={() => {}}
      />
      <ChipButton
        style={styles.marginBottom}
        text="Chip button"
        onPress={() => {}}
      />

      <LinkButton text="Link button" onPress={() => {}} />

      <IconTextInput
        onChangeText={(value) => setSearchValue(value)}
        value={searchValue}
        iconName="magnify"
        placeholder="Buscar ..."
      />

      <AlertModal title="Alerta" visible={isAlertVisible}>
        <Text style={styles.marginBottom}>
          Esta es una alerta que puede contener cualquier componente!
        </Text>
        <PrimaryButton
          style={{ marginTop: 10 * 2 }}
          text="Entendido"
          onPress={() => setIsAlertVisible(false)}
        />
      </AlertModal>

      <BottomModal
        visible={isBottomModalVisible}
        onDismiss={() => setIsBottomModalVisible(false)}
      >
        <Title style={styles.marginBottom}>Titulo del modal</Title>
        <Text style={styles.marginBottom}>
          Este es una modal que puede contener cualquier componente!
        </Text>
        <PrimaryButton
          onPress={() => {}}
          style={styles.floatBottom}
          text="Entendido!"
        />
      </BottomModal>
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
  floatBottom: {
    marginTop: 'auto',
    marginBottom: 10,
  },
});
