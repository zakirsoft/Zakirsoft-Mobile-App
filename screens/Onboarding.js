import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import OnboardingScreen from 'react-native-onboarding-swiper';
import {images} from '../constants';

const Onboarding = ({navigation}) => {
  return (
    <OnboardingScreen
      onSkip={() => navigation.navigate('Home')}
      onDone={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={images.onboarding_1} />,
          title: 'We design & build website that get you real results.',
          subtitle:
            'Etiam porttitor posuere ultrices. Phasellus sodales purus vitae nisi accumsan, eu mollis lectus maximus.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={images.onboarding_2} />,
          title: 'We design & build website that get you real results.',
          subtitle:
            'Etiam porttitor posuere ultrices. Phasellus sodales purus vitae nisi accumsan, eu mollis lectus maximus.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={images.onboarding_3} />,
          title: 'We design & build website that get you real results.',
          subtitle:
            'Etiam porttitor posuere ultrices. Phasellus sodales purus vitae nisi accumsan, eu mollis lectus maximus.',
        },
      ]}
    />
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
