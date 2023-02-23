import React from 'react';
import { render } from '@testing-library/react-native';
import { IconTextInput } from '../Icon.Text.Input';

describe('<IconTextInput />', () => {
  let component: any = null;

  beforeEach(() => {
    component = render(
      <IconTextInput iconName="magnify" placeholder="Buscar ..." />
    );
  });

  it('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
