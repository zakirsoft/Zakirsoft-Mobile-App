import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, images, SIZES} from '../constants';
import {PrimaryButton} from '../Styles/Screen';

const NewsDetails = ({route}) => {
  const {image, title, longDescription} = route.params;
  return (
    <ScrollView style={{backgroundColor: COLORS.ScreenColor}}>
      <View style={{marginLeft: 22, marginRight: 22}}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={{height: 260, width: '100%'}}
        />
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 12,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 14,
            color: COLORS.secondary,
            marginTop: 12,
            lineHeight: 21,
          }}>
          {longDescription}
        </Text>
        <View style={{marginTop: 24}}>
          <PrimaryButton
            style={{width: 110}}
            onPress={() => navigation.navigate('Contact')}>
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Contact
            </Text>
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({});
