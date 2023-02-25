import React, { useState } from 'react';
import { StyleSheet, Pressable, FlatList } from 'react-native';
import { Text } from './Styled.Text';
import { pressedOpacity, Theme } from '../constants/Theme';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { BottomModal } from './Bottom.Modal';
import { IconTextInput } from './Icon.Text.Input';
import type { SearchablePickerProps } from '../constants/Types';
import { usePlatform } from '../hooks/usePlatform';

const { colors, spacing } = Theme;

export function SearchablePicker({
  placeholder,
  data,
  selectedItem,
  onItemSelected,
  style,
}: SearchablePickerProps) {
  const platform = usePlatform();
  const { isIos } = platform;

  const [isVisible, setIsVisible] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(filterValue.toLowerCase())
  );

  const buttonStyles = [styles.container, style ? style : null];

  return (
    <>
      <Pressable
        android_ripple={{ borderless: false }}
        onPress={() => setIsVisible(!isVisible)}
        style={({ pressed }) => [
          ...buttonStyles,
          pressed && isIos && pressedOpacity,
        ]}
      >
        <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
        <Icon name="chevron-down" size={20} color={colors.tint} />
      </Pressable>

      <BottomModal
        containerStyle={{ backgroundColor: colors.background }}
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
      >
        <IconTextInput
          value={filterValue}
          onChangeText={(textValue) => setFilterValue(textValue)}
          iconName="magnify"
          placeholder="Buscar ..."
        />
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                if (onItemSelected) {
                  onItemSelected(item);
                  setIsVisible(false);
                }
              }}
              android_ripple={{ borderless: false }}
              style={styles.pickerItem}
            >
              <Text>{item.label}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.label}
        />
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: spacing.sm,
    justifyContent: 'space-between',
  },
  pickerItem: {
    alignItems: 'center',
    padding: spacing.sm,
    marginVertical: spacing.sm,
    borderBottomWidth: 1,
    borderColor: colors.secondary,
  },
});
