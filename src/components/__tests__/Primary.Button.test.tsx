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
  let component: any = null;

  beforeEach(() => {
    component = render(
      <PrimaryButton text="Press me" loading={false} onPress={mockFn} />
    );
  });

  it('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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
  let component: any = null;

  beforeEach(() => {
    component = render(
      <PrimaryButton
        text="Press me"
        loading={true}
        onPress={mockFn}
        accessibilityHint="button"
      />
    );
  });

  it('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
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

describe('<PrimaryButton custom style />', () => {
  let component: any = null;

  beforeEach(() => {
    component = render(
      <PrimaryButton
        style={{ marginTop: 10 }}
        text="Press me"
        loading={false}
        onPress={() => {}}
      />
    );
  });

  it('Should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
