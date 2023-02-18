import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { AlertModal } from '../Alert.Modal';

describe('<AlertModal visible={true}/>', () => {
  let component: any = null;

  beforeEach(() => {
    component = render(
      <AlertModal title="Alerta" visible={true}>
        <Text>child component</Text>
      </AlertModal>
    );
  });
  it('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<AlertModal visible={false}/>', () => {
  it('should not render', () => {
    render(
      <AlertModal title="Titulo de alerta" visible={false}>
        <Text>Esta es una alerta que puede contener cualquier componente!</Text>
      </AlertModal>
    );
    expect(screen.queryByText(/titulo/i)).toBeNull();
  });
});
