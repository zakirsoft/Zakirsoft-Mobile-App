import React, {useState} from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, ProjectView} from '../Styles/Screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProjectDetails} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const AllCategories = [
  {
    id: 1,
    Img: images.FreelancerManagementSpa,
    Category: 'SPA',
    Title: 'Freelancer Management SPA',
    Description:
      'This is a freelancer management solution built with Laravel and Vue.js for Germany Company.',
    Roles: 'Frontend Development / Backend Development / SPA Development',
    ToolUsed:
      'HTML / CSS / JavaScript / Vue.js / SPA / PHP / MySQL / Laravel / API',
    URL: 'https://freelance.wcg.de/login',
  },
  {
    id: 2,
    Img: images.Cuckoos,
    Category: 'PWA',
    Title: 'Cuckoos - ECommerce Platform With Multi-Level Affiliate System',
    Description:
      'Cuckoos.shop is an online eCommerce platform with a multilevel Affiliate marketing feature. This is an Indian company with the target of MLM Business.',
    Roles:
      'Frontend Development / Backend Development / REST API Development / SMS API Integration',
    ToolUsed:
      'HTML / CSS / Bootstrap / JavaScript / Vue.js / Nuxt.js / PHP / Laravel / MySQL / REST API',
    URL: 'https://cuckoos.shop/',
  },
  {
    id: 3,
    Img: images.loovum,
    Category: 'Web Development',
    Title: 'Loovum - ECommerce Project',
    Description:
      'Loovum is a daily boutique deal eCommerce website. We created this site in 2019. Since then, we are working with Loovum.com. Loovum has very high security and great speed in terms of site quality. .',
    Roles:
      'Website Design / Frontend Development / Backend Development / REST API Development',
    ToolUsed:
      'HTML / CSS / Bootstrap / JavaScript / Vue.js  / Nuxt.js / Webp Image Compression / PHP / Laravel  / MySQL / REST API',
    URL: 'https://loovum.com/',
  },
];

const All = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Screen>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProjectDetails', item)}>
          <View>
            <ProjectView>
              <Image
                source={item.Img}
                resizeMode={'contain'}
                style={{height: 260, width: '100%'}}
              />

              <View style={{paddingTop: 16}}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: 12,
                    color: COLORS.secondary,
                  }}>
                  {item.Category}
                </Text>
                <Text
                  style={{
                    paddingTop: 2,
                    fontFamily: 'DMSans-Regular',
                    fontSize: 20,
                    color: COLORS.primary,
                  }}>
                  {item.Title}
                </Text>
              </View>
            </ProjectView>
          </View>
        </TouchableOpacity>
      </Screen>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={AllCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const WebDesign = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Screen>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProjectDetails', item)}>
          <View>
            <ProjectView>
              <Image
                source={item.Img}
                resizeMode={'contain'}
                style={{height: 260, width: '100%'}}
              />

              <View style={{paddingTop: 16}}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: 12,
                    color: COLORS.secondary,
                  }}>
                  {item.Category}
                </Text>
                <Text
                  style={{
                    paddingTop: 2,
                    fontFamily: 'DMSans-Regular',
                    fontSize: 20,
                    color: COLORS.primary,
                  }}>
                  {item.Title}
                </Text>
              </View>
            </ProjectView>
          </View>
        </TouchableOpacity>
      </Screen>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={AllCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const WebDevelopment = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Screen>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProjectDetails', item)}>
          <View>
            <ProjectView>
              <Image
                source={item.Img}
                resizeMode={'contain'}
                style={{height: 260, width: '100%'}}
              />

              <View style={{paddingTop: 16}}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: 12,
                    color: COLORS.secondary,
                  }}>
                  {item.Category}
                </Text>
                <Text
                  style={{
                    paddingTop: 2,
                    fontFamily: 'DMSans-Regular',
                    fontSize: 20,
                    color: COLORS.primary,
                  }}>
                  {item.Title}
                </Text>
              </View>
            </ProjectView>
          </View>
        </TouchableOpacity>
      </Screen>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={AllCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const SPA = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Screen>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProjectDetails', item)}>
          <View>
            <ProjectView>
              <Image
                source={item.Img}
                resizeMode={'contain'}
                style={{height: 260, width: '100%'}}
              />

              <View style={{paddingTop: 16}}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: 12,
                    color: COLORS.secondary,
                  }}>
                  {item.Category}
                </Text>
                <Text
                  style={{
                    paddingTop: 2,
                    fontFamily: 'DMSans-Regular',
                    fontSize: 20,
                    color: COLORS.primary,
                  }}>
                  {item.Title}
                </Text>
              </View>
            </ProjectView>
          </View>
        </TouchableOpacity>
      </Screen>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={AllCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const PWA = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Screen>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProjectDetails', item)}>
          <View>
            <ProjectView>
              <Image
                source={item.Img}
                resizeMode={'contain'}
                style={{height: 260, width: '100%'}}
              />

              <View style={{paddingTop: 16}}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: 12,
                    color: COLORS.secondary,
                  }}>
                  {item.Category}
                </Text>
                <Text
                  style={{
                    paddingTop: 2,
                    fontFamily: 'DMSans-Regular',
                    fontSize: 20,
                    color: COLORS.primary,
                  }}>
                  {item.Title}
                </Text>
              </View>
            </ProjectView>
          </View>
        </TouchableOpacity>
      </Screen>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={AllCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={WebDesign}
      swipeEnabled={true}
      // swipeVelocityImpact={2}
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
      <Tab.Screen name="ALLPWA" component={All} />
      <Tab.Screen name="PWAAll" component={PWA} />
    </Tab.Navigator>
  );
};

const Projects = () => {
  LogBox.ignoreAllLogs();
  return <View style={{flex: 1}}>{MyTabs()}</View>;
};

export default Projects;

const styles = StyleSheet.create({});
