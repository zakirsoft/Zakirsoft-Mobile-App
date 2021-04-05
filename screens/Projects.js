import React from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, ProjectView} from '../Styles/Screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProjectDetails} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const All = () => {
  return (
    <Screen>
      <Text></Text>
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
const WebDevelopment = ({navigation}) => {
  return (
    <>
      <View>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('ProjectDetails')}>
          <ProjectView>
            <Image source={images.loovum} style={{height: 260, width: 350}} />
            <View style={{paddingTop: 16}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 12,
                  color: COLORS.secondary,
                }}>
                Laravel Project
              </Text>
              <Text
                style={{
                  paddingTop: 2,
                  fontFamily: 'DMSans-Regular',
                  fontSize: 20,
                  color: COLORS.primary,
                }}>
                Loovum - ECommerce Project
              </Text>
            </View>
          </ProjectView>
        </TouchableNativeFeedback>
      </View>
      <ProjectView>
        <Image source={images.about_1} style={{height: 260, width: 350}} />
      </ProjectView>
      <ProjectView>
        <Image source={images.about_1} style={{height: 260, width: 350}} />
      </ProjectView>
    </>
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

const LoovumDetails = () => <Screen>me</Screen>;

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={WebDesign}
      initialLayout={{width: SIZES.width * 2}}
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'DMSans-Regular',
          fontSize: 12,
          fontWeight: 'bold',
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
      <Tab.Screen name="Develop" component={WebDevelopment} />
      <Tab.Screen name="SPA" component={SPA} />
      <Tab.Screen name="PWA" component={PWA} />
    </Tab.Navigator>
  );
};

const Projects = () => {
  LogBox.ignoreAllLogs();
  return <Screen>{MyTabs()}</Screen>;
};

export default Projects;

const styles = StyleSheet.create({});
