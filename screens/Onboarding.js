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
              // resizeMode={'contain'}
              style={{
                height: SIZES.height / 2,
                width: SIZES.width / 2,
                position: 'relative',
                bottom: '15%',
              }}
            />
          ),
          titleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 28,
            fontWeight: 'bold',
            position: 'relative',
            bottom: 100,
          },
          subTitleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            position: 'relative',
            bottom: 100,
          },
          title: 'We are here to grow your business',
          subtitle:
            'As a software company we develop innovatives website & software solutions. We are proud of what we do.',
        },
        {
          backgroundColor: COLORS.primary,
          image: (
            <Image
              source={images.onboarding_2}
              // resizeMode={'center'}
              style={{
                height: SIZES.height / 2,
                width: SIZES.width / 2,
                position: 'relative',
                bottom: '15%',
              }}
            />
          ),
          titleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 28,
            fontWeight: 'bold',
            position: 'relative',
            bottom: 100,
          },
          subTitleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            position: 'relative',
            bottom: 100,
          },
          title: 'We Develop Apps that get you real results.',
          subtitle:
            'Zakirsoft specialize in working directly with other organizations to create sustainable partnerships.',
        },
        {
          backgroundColor: COLORS.primary,
          image: (
            <Image
              source={images.onboarding_3}
              // resizeMode={'center'}
              style={{
                height: SIZES.height / 2,
                width: SIZES.width,
                position: 'relative',
                bottom: '15%',
              }}
            />
          ),
          titleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 28,
            fontWeight: 'bold',
            position: 'relative',
            bottom: 100,
          },
          subTitleStyles: {
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            position: 'relative',
            bottom: 100,
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
