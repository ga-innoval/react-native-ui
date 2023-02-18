import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { BottomModal } from '../Bottom.Modal';

describe('<BottomModal visible={true}/>', () => {
  let component: any = null;
  const mockFn = jest.fn();

  const eventData = {
    nativeEvent: {
      pageX: 10,
      pageY: 10,
    },
  };

  beforeEach(() => {
    component = render(
      <BottomModal onDismiss={mockFn} visible={true}>
        <Text>child component</Text>
      </BottomModal>
    );
  });
  it('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onDissmiss function', () => {
    fireEvent.press(screen.getByTestId('modalPressableArea'), eventData);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('<BottomModal visible={false}/>', () => {
  it('should not render', () => {
    render(
      <BottomModal onDismiss={() => {}} visible={false}>
        <Text>Esta es una alerta que puede contener cualquier componente!</Text>
      </BottomModal>
    );
    expect(screen.queryByText(/titulo/i)).toBeNull();
  });
});
