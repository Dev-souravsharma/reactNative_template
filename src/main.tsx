import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button, Card, Text} from './components/reStyle';
import {useTheme} from '@shopify/restyle';
import {Theme} from './theme';

function Main(): JSX.Element {
  const theme = useTheme<Theme>();
  return (
    <SafeAreaView>
      <Card variant="elevated">
        <Text variant="header">Sourav</Text>
      </Card>
      <Button title={'Button'} marginTop={'s'} />
      <View style={{marginTop: theme.spacing.xl}}>
        <Text variant="body">Sourav</Text>
      </View>
    </SafeAreaView>
  );
}

export default Main;
