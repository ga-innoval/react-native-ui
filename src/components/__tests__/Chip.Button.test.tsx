import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { ChipButton } from '../Chip.Button';

const eventData = {
  nativeEvent: {
    pageX: 20,
    pageY: 30,
  },
};

describe('<ChipButton /> no custom style', () => {
  let component: any = null;
  const mockFn = jest.fn();

  beforeEach(() => {
    component = render(
      <ChipButton text="Press me" iconName="account" onPress={mockFn} />
    );
  });

  it('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onPress function', () => {
    const button = screen.getByText(/press/i);
    fireEvent.press(button, eventData);
    expect(mockFn).toBeCalledTimes(1);
  });
});

describe('<ChipButton /> custom style', () => {
  let component: any = null;
  const mockFn = jest.fn();

  beforeEach(() => {
    component = render(
      <ChipButton
        style={{ marginTop: 10 }}
        text="Press me"
        iconName="account"
        onPress={mockFn}
      />
    );
  });

  it('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
