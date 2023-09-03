import {SafeAreaView} from 'react-native';
import React from 'react';
import {Button, Card, Text} from './components/reStyle';

function Main(): JSX.Element {
  return (
    <SafeAreaView>
      <Card variant="elevated">
        <Text variant="header">Sourav</Text>
      </Card>
      <Button title={'Button'} marginTop={'s'} />
    </SafeAreaView>
  );
}

export default Main;
