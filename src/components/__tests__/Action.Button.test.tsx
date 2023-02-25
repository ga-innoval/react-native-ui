import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { ActionButton } from '../Action.Button';
const eventData = {
  nativeEvent: {
    pageX: 20,
    pageY: 30,
  },
};

describe('<ActionButton loading={false} />', () => {
  const mockFn = jest.fn();
  let component: any = null;

  beforeEach(() => {
    component = render(
      <ActionButton
        style={{ marginTop: 10 }}
        text="Press me"
        loading={false}
        onPress={mockFn}
      />
    );
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call function on press', () => {
    const button = screen.getByText(/press me/i);
    fireEvent.press(button, eventData);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('<ActionButton loading={true} />', () => {
  const mockFn = jest.fn();
  let component: any = null;

  beforeEach(() => {
    component = render(
      <ActionButton
        style={{ marginTop: 10 }}
        text="Press me"
        loading={true}
        onPress={mockFn}
      />
    );
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shouldn't call function on press", () => {
    const button = screen.getByAccessibilityHint('button');
    fireEvent.press(button, eventData);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
