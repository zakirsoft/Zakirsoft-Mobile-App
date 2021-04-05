import React, {useEffect} from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, images, SIZES, FONTS, icons} from '../constants';
import {Screen, Logo} from '../Styles/Screen';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Contact = () => {
  useEffect(() => {}, []);
  let fromLoclatitude = 23.774905;
  let fromLoclongitude = 90.351175;

  const renderMap = () => (
    <View style={{height: 397}}>
      <MapView
        initialRegion={{
          latitude: fromLoclatitude,
          longitude: fromLoclongitude,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        }}
        style={{flex: 1}}>
        <Marker
          coordinate={{latitude: 23.774905, longitude: 90.351175}}
          title={
            'Zakir Soft - Innovative Software & Web Development Solutions'
          }>
          <Image
            source={images.logo}
            resizeMode={'contain'}
            style={{height: 20, width: 80}}
          />
        </Marker>
      </MapView>
    </View>
  );
  const renderInfo = () => (
    <View
      style={{
        width: 366,
        height: 240,
        borderRadius: 10,
        top: -30,
        backgroundColor: COLORS.white,
        marginLeft: 24,
        position: 'relative',
      }}>
      <View style={{flexDirection: 'row', marginLeft: 16, marginTop: 16}}>
        <View
          style={{
            height: 48,
            width: 48,
            borderRadius: 10,
            backgroundColor: COLORS.ScreenColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icons.Location}
            resizeMode={'contain'}
            style={{
              height: 22,
              width: 18,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            color: COLORS.black,
            marginLeft: 10,
          }}>
          Home# 1024/N, Road# 17/A, Adabor, Dhaka-1207
        </Text>
      </View>
      <View
        style={{
          width: 330,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray,
          // top: 80,
          height: 1,
          left: 10,
        }}></View>
      <View
        style={{
          width: 330,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray,
          top: 80,
          height: 1,
          left: 10,
        }}></View>
    </View>
  );

  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.ScreenColor}}>
      {renderMap()}
      {renderInfo()}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
