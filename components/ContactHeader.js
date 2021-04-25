import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, icons, images, SIZES} from '../constants';

const ContactHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.ScreenColor,
        height: SIZES.height / 15,
        width: '100%',
        justifyContent: 'center',
        // flex: 1,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* company Logo */}
        <View style={{margin: 24}}>
          <Image source={images.logo} style={{height: 24, width: 120}} />
        </View>
        {/* social icons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: SIZES.width / 30,
            height: '100%',
            width: SIZES.width / 3,
            // flex: 1,
          }}>
          <TouchableOpacity
            style={{
              height: '40%',
              width: '33.3%',
            }}
            activeOpacity={0.8}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/zakirsoft20')
            }>
            <Image
              source={icons.facebook}
              resizeMode={'contain'}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: '40%',
              width: '33.3%',
            }}
            activeOpacity={0.8}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/company/zakirsoft')
            }>
            <Image
              source={icons.linkdin}
              resizeMode={'contain'}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: '40%',
              width: '33.3%',
            }}
            activeOpacity={0.8}
            onPress={() => Linking.openURL('https://github.com/zakirsoft')}>
            <Image
              source={icons.github}
              resizeMode={'contain'}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({});
