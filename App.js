import React, {useEffect} from 'react';
import {Image, LogBox, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
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
import {COLORS, icons, images} from './constants';
import {Logo} from './Styles/Screen';

const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // LogBox.ignoreAllLogs();
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
        <Stack.Screen
          name="ProjectDetails"
          component={ProjectDetails}
          options={{
            headerStyle: {
              // shadowColor: COLORS.white,
              elevation: 0,
              backgroundColor: COLORS.ScreenColor,
            },
            headerTitle: false,
            headerRight: () => (
              <View style={{margin: 24}}>
                <Image source={images.logo} style={{height: 24, width: 120}} />
              </View>
            ),
            headerRight: () => (
              <View style={{margin: 24}}>
                <Image source={images.logo} style={{height: 24, width: 120}} />
              </View>
            ),
            headerBackImage: () => (
              <Image
                source={icons.GoBack}
                resizeMode={'contain'}
                style={{height: 15, width: 30, tintColor: COLORS.black}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Career"
          component={Career}
          options={{
            headerStyle: {
              // shadowColor: COLORS.white,
              elevation: 0,
              backgroundColor: COLORS.ScreenColor,
            },
            headerTitle: false,
            headerRight: () => (
              <View style={{margin: 24}}>
                <Image source={images.logo} style={{height: 24, width: 120}} />
              </View>
            ),
            headerRight: () => (
              <View style={{margin: 24}}>
                <Image source={images.logo} style={{height: 24, width: 120}} />
              </View>
            ),
            headerBackImage: () => (
              <Image
                source={icons.GoBack}
                resizeMode={'contain'}
                style={{height: 15, width: 30, tintColor: COLORS.black}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CareerDetails"
          component={CareerDetails}
          options={{
            headerStyle: {
              // shadowColor: COLORS.white,
              elevation: 0,
              backgroundColor: COLORS.ScreenColor,
            },
            headerTitle: false,
            headerRight: () => (
              <View style={{margin: 24}}>
                <Image source={images.logo} style={{height: 24, width: 120}} />
              </View>
            ),
            headerRight: () => (
              <View style={{margin: 24}}>
                <Image source={images.logo} style={{height: 24, width: 120}} />
              </View>
            ),
            headerBackImage: () => (
              <Image
                source={icons.GoBack}
                resizeMode={'contain'}
                style={{height: 15, width: 30, tintColor: COLORS.black}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
