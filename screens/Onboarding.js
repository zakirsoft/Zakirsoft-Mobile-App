import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import OnboardingScreen from 'react-native-onboarding-swiper';
import {COLORS, images, SIZES} from '../constants';
import {PrimaryButton} from '../Styles/Screen';

const Onboarding = ({navigation}) => {
  return (
    <OnboardingScreen
      onSkip={() => navigation.navigate('Home')}
      onDone={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: COLORS.primary,

          image: (
            <Image
              source={images.onboarding_1}
              resizeMode={'contain'}
              style={{height: 434, width: SIZES.width}}
            />
          ),
          titleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 28,
            fontWeight: 'bold',
          },
          subTitleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
          },
          title: 'We are here to grow your business',
          subtitle:
            'As a software company we develop innovatives website & software solutions. We are proud of what we do.',
        },
        {
          backgroundColor: COLORS.black,
          image: (
            <Image
              source={images.onboarding_2}
              resizeMode={'contain'}
              style={{height: 434, width: SIZES.width}}
            />
          ),
          titleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 28,
            fontWeight: 'bold',
          },
          subTitleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
          },
          title:
            'We design and Develop web apps & Mobile Apps that get you real results.',
          subtitle:
            'Zakirsoft specialize in working directly with other organizations to create sustainable partnerships.',
        },
        {
          backgroundColor: COLORS.ScreenColor,
          image: (
            <Image
              source={images.onboarding_3}
              resizeMode={'contain'}
              style={{height: 434, width: SIZES.width}}
            />
          ),
          titleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 28,
            fontWeight: 'bold',
          },
          subTitleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
          },
          title: 'Who We are',
          subtitle:
            ' We Develop Softwares for your business and we also provide quality software training in Adabor Since 2020.',
        },
      ]}
    />
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
