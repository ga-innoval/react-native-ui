import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { LinkButton } from '../Link.Button';

const eventData = {
  nativeEvent: {
    pageX: 20,
    pageY: 30,
  },
};

describe('<LinkButton />', () => {
  let component: any = null;
  const mockFn = jest.fn();

  beforeEach(() => {
    component = render(<LinkButton text="Press me" onPress={mockFn} />);
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
