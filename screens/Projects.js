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
  ScrollView,
} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, ProjectView} from '../Styles/Screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProjectDetails} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Header from '../components/Header';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Projects = ({navigation}) => {
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
  const AllCategories2 = [
    {
      id: 1,
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
    {
      id: 2,
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
      id: 3,
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
  ];

  const All = () => {
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            backgroundColor: COLORS.ScreenColor,
            marginBottom: '3%',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProjectDetails', item)}
            style={{
              width: '90%',
              // height: SIZES.height / 2.5,
              marginLeft: '5%',
              marginRight: '5%',
            }}>
            <View>
              <ProjectView>
                <Image
                  source={item.Img}
                  // resizeMode={'contain'}
                  style={{
                    width: '100%',
                    height: SIZES.height / 3,
                    borderRadius: 10,
                  }}
                />

                <View style={{marginTop: '1%'}}>
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText - 2,
                      color: COLORS.secondary,
                    }}>
                    {item.Category}
                  </Text>
                  <Text
                    style={{
                      paddingTop: '1%',
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nNewsTitle,
                      color: COLORS.primary,
                    }}>
                    {item.Title}
                  </Text>
                </View>
              </ProjectView>
            </View>
          </TouchableOpacity>
        </View>
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
  const WebDesign = () => {
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            backgroundColor: COLORS.ScreenColor,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProjectDetails', item)}
            style={{marginLeft: 22, marginRight: 22}}>
            <View>
              <ProjectView>
                <Image
                  source={item.Img}
                  resizeMode={'contain'}
                  style={{height: 260, width: '100%', borderRadius: 10}}
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
        </View>
      );
    };

    return (
      <View style={{flex: 1, marginBottom: 30}}>
        <FlatList
          data={AllCategories2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  const WebDevelopment = () => {
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            backgroundColor: COLORS.ScreenColor,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProjectDetails', item)}
            style={{marginLeft: 22, marginRight: 22}}>
            <View>
              <ProjectView>
                <Image
                  source={item.Img}
                  resizeMode={'contain'}
                  style={{height: 260, width: '100%', borderRadius: 10}}
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
        </View>
      );
    };

    return (
      <View style={{flex: 1, marginBottom: 30}}>
        <FlatList
          data={AllCategories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  const SPA = () => {
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            backgroundColor: COLORS.ScreenColor,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProjectDetails', item)}
            style={{marginLeft: 22, marginRight: 22}}>
            <View>
              <ProjectView>
                <Image
                  source={item.Img}
                  resizeMode={'contain'}
                  style={{height: 260, width: '100%', borderRadius: 10}}
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
        </View>
      );
    };

    return (
      <View style={{flex: 1, marginBottom: 30}}>
        <FlatList
          data={AllCategories2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  const PWA = () => {
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            backgroundColor: COLORS.ScreenColor,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProjectDetails', item)}
            style={{marginLeft: 22, marginRight: 22}}>
            <View>
              <ProjectView>
                <Image
                  source={item.Img}
                  resizeMode={'contain'}
                  style={{height: 260, width: '100%', borderRadius: 10}}
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
        </View>
      );
    };

    return (
      <View style={{flex: 1, marginBottom: 30}}>
        <FlatList
          data={AllCategories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const TabView = () => {
    const tabNames = [
      {
        id: '1',
        TabName: 'All',
      },
      {
        id: '2',
        TabName: 'Web Design',
      },
      {id: '3', TabName: 'Web Development'},
      {
        id: '4',
        TabName: 'SPA',
      },
      {
        id: '5',
        TabName: 'PWA',
      },
      {
        id: '6',
        TabName: 'Mobile',
      },
    ];
    const [viewMode, setViewMode] = useState(1);
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            marginRight: 10,
            marginLeft: 15,
          }}>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: '100%',
                width: '110%',

                borderBottomColor: COLORS.primary,
                borderBottomWidth: viewMode == item.id ? 3 : null,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setViewMode(item.id)}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: COLORS.secondary,
                }}>
                {item.TabName}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    const ProjectView = () => {
      if (viewMode == 1) {
        return All();
      }
      if (viewMode == 2) {
        return WebDesign();
      }
      if (viewMode == 3) {
        return WebDevelopment();
      }
      if (viewMode == 4) {
        return SPA();
      }
      if (viewMode == 5) {
        return PWA();
      }
      if (viewMode == 6) {
        return PWA(); //there is no mobile view thats why its returning PWA view
      }
    };

    const flartlist = () => {
      return (
        <View>
          <FlatList
            data={tabNames}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            // pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    };

    return (
      <View style={{flex: 1, backgroundColor: COLORS.ScreenColor}}>
        <View style={{height: 44, backgroundColor: COLORS.ScreenColor}}>
          <View>{flartlist()}</View>
        </View>
        <View style={{flex: 1}}>
          <View style={{height: '100%'}}>{ProjectView()}</View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Header />
      <View style={{flex: 1}}>{TabView()}</View>
    </>
  );
};

export default Projects;
const styles = StyleSheet.create({});
