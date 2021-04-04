import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo} from '../Styles/Screen';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Contact = () => {
  const renderMap = () => (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}}></MapView>
    </View>
  );

  return <View style={{flex: 1}}>{renderMap()}</View>;
};

export default Contact;

const styles = StyleSheet.create({});
