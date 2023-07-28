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
  SearchablePicker,
  PickerItem,
  ActionButton,
  MultipleSearchablePicker,
} from '@ga-innoval/react-native-ui';

export default function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isPrimaryButtonLoading, setPrimaryButtonLoading] = useState(false);
  const [isBottomModalVisible, setIsBottomModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFruit, setSelectedFruit] = useState<PickerItem | null>(null);
  const [selectedFruits, setSelectedFruits] = useState<PickerItem[]>([]);

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
        text="Open alert"
        loading={isPrimaryButtonLoading}
        onPress={handlePrimaryButtonPress}
      />
      <PrimaryButton
        style={[styles.marginBottom]}
        text="Open bottom modal"
        onPress={() => setIsBottomModalVisible(true)}
      />

      <ChipButton
        style={styles.marginBottom}
        iconName="door-open"
        color={'red'}
        backgroundColor={'#40ABE8'}
        text="Open alert"
        onPress={() => setIsAlertVisible(true)}
      />
      <ChipButton
        style={styles.marginBottom}
        text="Open bottom modal"
        onPress={() => setIsBottomModalVisible(true)}
      />

      <LinkButton text="Link button" onPress={() => {}} />

      <IconTextInput
        containerStyle={styles.marginBottom}
        onChangeText={(value) => setSearchValue(value)}
        value={searchValue}
        iconName="magnify"
        placeholder="Buscar ..."
      />

      <SearchablePicker
        loading={false}
        style={{ marginBottom: 10 }}
        selectedItem={selectedFruit}
        onItemSelected={(item) => setSelectedFruit({ ...item })}
        data={[
          { label: 'Banana', value: 0 },
          { label: 'Apple', value: 1 },
          { label: 'Watermelon', value: 2 },
          { label: 'Orange', value: 3 },
          { label: 'Lemon', value: 4 },
          { label: 'Pineapple', value: 5 },
          { label: 'Grape', value: 6 },
          { label: 'Avocado', value: 7 },
          { label: 'Mango', value: 8 },
        ]}
        placeholder="Selecciona una fruta"
      />

      <MultipleSearchablePicker
        loading={false}
        style={{ marginBottom: 10 }}
        selectedItems={selectedFruits}
        onItemSelected={(item) => setSelectedFruits([...selectedFruits, item])}
        data={[
          { label: 'Banana', value: 0 },
          { label: 'Apple', value: 1 },
          { label: 'Watermelon', value: 2 },
          { label: 'Orange', value: 3 },
          { label: 'Lemon', value: 4 },
          { label: 'Pineapple', value: 5 },
          { label: 'Grape', value: 6 },
          { label: 'Avocado', value: 7 },
          { label: 'Mango', value: 8 },
        ]}
        placeholder="Selecciona una fruta"
      />

      <ActionButton
        iconName="check"
        iconColor={'blue'}
        iconBgColor={'red'}
        text="Do something"
        loading={false}
        onPress={() => {}}
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
        persistent={false}
        visible={isBottomModalVisible}
        onDismiss={() => setIsBottomModalVisible(false)}
      >
        <Title style={styles.marginBottom}>Titulo del modal</Title>
        <Text style={styles.marginBottom}>
          Este es una modal que puede contener cualquier componente!
        </Text>
        <PrimaryButton
          onPress={() => setIsBottomModalVisible(false)}
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
    backgroundColor: '#f8f8fa',
  },
  marginBottom: {
    marginBottom: 10,
  },
  floatBottom: {
    marginTop: 'auto',
    marginBottom: 10,
  },
});
