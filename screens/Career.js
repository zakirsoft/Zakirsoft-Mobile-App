import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, TechCart, PrimaryButton} from '../Styles/Screen';

const Career = ({navigation}) => {
  return (
    <Screen>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: 10,
        }}>
        <View style={{marginTop: 24, marginLeft: 24, marginRight: 24}}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nTitle - 2,
              fontWeight: 'bold',
            }}>
            Senior UI/UX Designer
          </Text>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nBodyText,
              color: COLORS.secondary,
              lineHeight: SIZES.nMinimulLineheight,
              marginTop: 8,
            }}>
            We need someone who is familiar and able to create a Design System,
            UI Kit, Prototype, etc. Entrepreneur minded people are always
            welcome. Send your cv at - zakirsoft20@gmail.com
          </Text>
          <PrimaryButton
            activeOpacity={0.8}
            style={{
              marginTop: SIZES.height / 45,
              height: SIZES.nPrimaryButtonHeight,
              width: SIZES.nPrimaryButtonWidth,
              marginBottom: 20,
            }}
            onPress={() => navigation.navigate('CareerDetails')}>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Apply Now
            </Text>
          </PrimaryButton>
        </View>
      </View>

      <View
        style={{
          backgroundColor: COLORS.white,
          marginTop: SIZES.height / 20,
          borderRadius: 10,
        }}>
        <View style={{marginTop: 24, marginLeft: 24, marginRight: 24}}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nTitle - 2,
              fontWeight: 'bold',
            }}>
            Laravel Web Development
          </Text>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nBodyText,
              color: COLORS.secondary,
              lineHeight: SIZES.nMinimulLineheight,
              marginTop: 8,
            }}>
            We need someone having experience in PHP, MySQL, Laravel & Vue.js.
            Send your cv here - zakirsoft20@gmail.com
          </Text>
          <PrimaryButton
            activeOpacity={0.8}
            style={{
              marginTop: SIZES.height / 45,
              height: SIZES.nPrimaryButtonHeight,
              width: SIZES.nPrimaryButtonWidth,
              marginBottom: 20,
            }}
            onPress={() => navigation.navigate('CareerDetails')}>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Apply Now
            </Text>
          </PrimaryButton>
        </View>
      </View>
    </Screen>
  );
};

export default Career;

const styles = StyleSheet.create({});
