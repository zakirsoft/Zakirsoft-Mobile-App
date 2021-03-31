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
            <Image
              source={icons.Home}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                style={{
                  fontSize: 11,
                  top: -5,
                  color: focused ? COLORS.primary : COLORS.secondary,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.About}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                style={{
                  fontSize: 11,
                  top: -5,
                  color: focused ? COLORS.primary : COLORS.secondary,
                }}>
                About
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Projects}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                style={{
                  fontSize: 11,
                  top: -5,
                  color: focused ? COLORS.primary : COLORS.secondary,
                }}>
                Projects
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Services}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                style={{
                  fontSize: 11,
                  top: -5,
                  color: focused ? COLORS.primary : COLORS.secondary,
                }}>
                Services
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Contact}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                style={{
                  fontSize: 11,
                  top: -5,
                  color: focused ? COLORS.primary : COLORS.secondary,
                }}>
                Contact
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
