import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { PrimaryButton } from '../Primary.Button';
const eventData = {
  nativeEvent: {
    pageX: 20,
    pageY: 30,
  },
};

describe('<PrimaryButton loading={false} />', () => {
  const mockFn = jest.fn();

  beforeEach(() => {
    render(<PrimaryButton text="Press me" loading={false} onPress={mockFn} />);
  });

  it('should display text label', () => {
    expect(screen.getByText(/press me/i)).toBeDefined();
  });

  it('should call function on press', () => {
    const button = screen.getByText(/press me/i);
    fireEvent.press(button, eventData);
    expect(mockFn).toHaveBeenCalled();
  });
});

describe('<PrimaryButton loading={true} />', () => {
  const mockFn = jest.fn();

  beforeEach(() => {
    render(
      <PrimaryButton
        text="Press me"
        loading={true}
        onPress={mockFn}
        accessibilityHint="button"
      />
    );
  });

  it("shouldn't display text label", () => {
    expect(screen.queryByText(/press me/i)).toBeNull();
  });

  it("shouldn't call function on press", () => {
    const button = screen.getByAccessibilityHint('button');
    fireEvent.press(button, eventData);
    expect(mockFn).not.toHaveBeenCalled();
  });
});
