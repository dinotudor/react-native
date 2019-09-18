import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, Submit } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autocorrect={false}
          autoCapitalize="none"
          placeholder="Add user"
        />
        <Submit>
          <Icon name="add" size={20} color="#FFF" />
        </Submit>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Users',
};
