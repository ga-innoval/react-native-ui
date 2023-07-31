import React, { useState } from 'react';
import {
  StyleSheet,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
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
  showOpacityMask,
  loading,
  loadingIndicatorColor,
  ListEmptyComponent,
  FilteredListEmptyComponent,
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
        {loading ? (
          <ActivityIndicator
            style={styles.loadingIndicator}
            color={loadingIndicatorColor ?? colors.darkText}
          />
        ) : (
          <Text style={selectedItem && { color: Theme.colors.tint }}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
        )}
        <Icon name="chevron-down" size={20} color={colors.tint} />
      </Pressable>

      <BottomModal
        showOpacityMask={showOpacityMask ?? true}
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
          ListEmptyComponent={
            data.length === 0
              ? ListEmptyComponent ?? (
                  <Text style={styles.empty}>
                    No hay opciones para seleccionar
                  </Text>
                )
              : filteredData.length === 0
              ? FilteredListEmptyComponent ?? (
                  <Text style={styles.empty}>
                    No hay opciones con "{filterValue}"
                  </Text>
                )
              : null
          }
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                if (onItemSelected) {
                  onItemSelected(item);
                  setIsVisible(false);
                }
              }}
              android_ripple={{ borderless: false }}
              style={[
                styles.pickerItem,
                selectedItem?.value === item.value && styles.selectedItem,
              ]}
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
  loadingIndicator: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  selectedItem: {
    backgroundColor: 'rgba(54,127,195,0.1)',
    borderRadius: spacing.sm,
  },
  empty: {
    paddingTop: spacing.lg,
    textAlign: 'center',
  },
});
