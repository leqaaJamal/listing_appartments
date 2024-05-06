import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log(navigation)
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to My App!</Text>
        <Button title="Go to All Apartments" onPress={() => {navigation.navigate('AllApartments', {
                                                                                  screen: 'AllApartments'
                                                                                })}} />
      </View>
  );
};

export default HomeScreen;