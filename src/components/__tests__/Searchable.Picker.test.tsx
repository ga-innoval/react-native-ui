import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { SearchablePicker } from '../Searchable.Picker';

describe('<SearchablePicker />', () => {
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  const mockFn = jest.fn();

  beforeEach(() => {
    render(
      <SearchablePicker
        style={{ marginTop: 10 }}
        selectedItem={null}
        data={[
          { label: 'Banana', value: 0 },
          { label: 'Apple', value: 1 },
        ]}
        placeholder="Selecciona una fruta"
        onItemSelected={mockFn}
      />
    );
  });

  it('should render picker button correctly', () => {
    const tree = screen.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render modal correctly', () => {
    const picker = screen.getByText(/selecciona/i);
    fireEvent.press(picker, eventData);

    const tree = screen.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display picker button', () => {
    expect(screen.getByText(/selecciona/i)).toBeDefined();
  });

  it('should display items after picker press', () => {
    const picker = screen.getByText(/selecciona/i);
    fireEvent.press(picker, eventData);
    expect(screen.getByText(/banana/i)).toBeDefined();
  });

  it('should call function on item selected', () => {
    const picker = screen.getByText(/selecciona/i);
    fireEvent.press(picker, eventData);
    const item = screen.getByText(/banana/i);
    fireEvent.press(item, eventData);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
