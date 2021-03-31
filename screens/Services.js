import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo} from '../Styles/Screen';

const Services = () => {
  return (
    <Screen>
      <Logo>
        <Image source={images.logo} style={{height: 24, width: 120}} />
      </Logo>
    </Screen>
  );
};

export default Services;

const styles = StyleSheet.create({});
