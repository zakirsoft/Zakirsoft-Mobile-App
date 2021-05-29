import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {
  Home,
  About,
  Career,
  CareerDetails,
  Contact,
  ProjectDetails,
  Projects,
  Services,
} from '../screens';
import {COLORS, icons, SIZES} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          //   backgroundColor: COLORS.White,
          borderTopRightRadius: SIZES.radius,
          borderTopLeftRadius: SIZES.radius,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{width: 50}}>
              <Image
                source={icons.Home}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    alignSelf: 'center',
                    // top: -5,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  Home
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{width: 50}}>
              <Image
                source={icons.About}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    alignSelf: 'center',
                    // top: -5,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  About
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{width: 50}}>
              <Image
                source={icons.Projects}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    alignSelf: 'center',
                    // top: -5,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  Projects
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{width: 50}}>
              <Image
                source={icons.Services}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    alignSelf: 'center',
                    // top: -5,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  services
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{width: 50}}>
              <Image
                source={icons.Contact}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    alignSelf: 'center',
                    // top: -5,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  Contact
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
