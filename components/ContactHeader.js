import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, icons, images} from '../constants';

const ContactHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.ScreenColor,
        height: 50,
        width: '100%',
        justifyContent: 'center',
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
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 15,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/zakirsoft20')
            }>
            <Image
              source={icons.facebook}
              resizeMode={'contain'}
              style={{height: 40, width: 40, marginLeft: 4}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/company/zakirsoft')
            }>
            <Image
              source={icons.linkdin}
              resizeMode={'contain'}
              style={{height: 40, width: 40, marginLeft: 4}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Linking.openURL('https://github.com/zakirsoft')}>
            <Image
              source={icons.github}
              resizeMode={'contain'}
              style={{height: 40, width: 40, marginLeft: 4}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({});
