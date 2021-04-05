import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, TechCart, PrimaryButton} from '../Styles/Screen';

const Career = () => {
  return (
    <Screen>
      <TechCart style={{height: 263}}>
        <View style={{marginTop: 24, marginLeft: 24, marginRight: 24}}>
          <Text
            style={{
              fontFamily: FONTS.H2,
              fontSize: SIZES.h2,
              fontWeight: 'bold',
            }}>
            Senior UI/UX Designer
          </Text>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: 14,
              color: COLORS.secondary,
              lineHeight: 21,
              marginTop: 8,
            }}>
            We need someone who is familiar and able to create a Design System,
            UI Kit, Prototype, etc. Entrepreneur minded people are always
            welcome. Send your cv at - zakirsoft20@gmail.com
          </Text>
          <PrimaryButton style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Apply Now
            </Text>
          </PrimaryButton>
        </View>
      </TechCart>
      <TechCart style={{height: 217}}>
        <View style={{marginTop: 24, marginLeft: 24, marginRight: 24}}>
          <Text
            style={{
              fontFamily: FONTS.H2,
              fontSize: SIZES.h2,
              fontWeight: 'bold',
            }}>
            Laravel Web Development
          </Text>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: 14,
              color: COLORS.secondary,
              lineHeight: 21,
              marginTop: 8,
            }}>
            We need someone having experience in PHP, MySQL, Laravel & Vue.js.
            Send your cv here - zakirsoft20@gmail.com
          </Text>
          <PrimaryButton style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Apply Now
            </Text>
          </PrimaryButton>
        </View>
      </TechCart>
    </Screen>
  );
};

export default Career;

const styles = StyleSheet.create({});
