import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, images} from '../constants';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.ScreenColor,
        height: 55,
        width: '100%',
        justifyContent: 'center',
      }}>
      <View style={{margin: 24}}>
        <Image source={images.logo} style={{height: 24, width: 120}} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
