import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Home,
  About,
  Career,
  CareerDetails,
  Contact,
  ProjectDetails,
  Projects,
  Services,
} from './screens';
import Tabs from './navigation/Tabs';
import {COLORS, images} from './constants';
import {Logo} from './Styles/Screen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName={Home}>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerStyle: {
              // shadowColor: COLORS.white,
              elevation: 0,
              backgroundColor: COLORS.ScreenColor,
            },
            headerTitle: false,
            headerLeft: () => (
              <View style={{margin: 24}}>
                <Image source={images.logo} style={{height: 24, width: 120}} />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
