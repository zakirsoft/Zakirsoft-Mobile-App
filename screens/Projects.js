import React from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, cImage} from '../Styles/Screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const All = () => {
  return (
    <Screen>
      <Text>All</Text>
    </Screen>
  );
};
const WebDesign = () => {
  return (
    <Screen>
      <Text>PWA</Text>
    </Screen>
  );
};
const WebDevelopment = () => {
  return (
    <Screen>
      <Image source={images.about_1} />
    </Screen>
  );
};
const SPA = () => {
  return (
    <Screen>
      <Text>PWA</Text>
    </Screen>
  );
};
const PWA = () => {
  return (
    <Screen>
      <Text>PWA</Text>
    </Screen>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={WebDesign}
      initialLayout={{width: SIZES.width * 2}}
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'DMSans-Regular',
          fontSize: 11,
          overflow: 'visible',
          position: 'relative',
          textTransform: 'none',
          textAlign: 'left',
          direction: 'inherit',
          flexWrap: 'wrap-reverse',
        },
        style: {
          backgroundColor: COLORS.ScreenColor,
          height: 40,
          justifyContent: 'space-between',
          alignItems: 'stretch',
          elevation: 0,
        },
      }}>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Design" component={WebDesign} />
      <Tab.Screen name="Development" component={WebDevelopment} />
      <Tab.Screen name="SPA" component={SPA} />
      <Tab.Screen name="PWA" component={PWA} />
    </Tab.Navigator>
  );
};

const Projects = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      {/* <View
        style={{
          height: 44,
          width: '90%',
        }}>
        {MyTabs()}
      </View> */}
      {MyTabs()}
      <Screen></Screen>
    </>
  );
};

export default Projects;

const styles = StyleSheet.create({});
