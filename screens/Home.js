import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, PrimaryButton, SecondaryButton} from '../Styles/Screen';

const Home = () => {
  return (
    <Screen>
      <View style={{flexDirection: 'column'}}>
        <View>
          <Image
            source={images.home}
            resizeMode="contain"
            style={{height: 370, width: 369, top: -10}}
          />
        </View>
        <View style={{flexDirection: 'column', top: -55}}>
          <Text
            style={{
              fontSize: SIZES.largeTitle,
              fontWeight: 'bold',
            }}>
            We are here to
          </Text>
          <Text
            style={{
              fontSize: SIZES.largeTitle,
              fontWeight: 'bold',
            }}>
            grow your
          </Text>
          <Text
            style={{
              fontSize: SIZES.largeTitle,
              fontWeight: 'bold',
            }}>
            business.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            top: -55,
            // paddingLeft: 25,
            paddingRight: 24,
          }}>
          <Text style={{fontSize: SIZES.body3, color: COLORS.secondary}}>
            As a software company we develop innovatives website & software
            solutions. We are proud of what we do.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: -25,
          }}>
          <PrimaryButton style={{marginRight: 8}}>
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Contact Us
            </Text>
          </PrimaryButton>
          <SecondaryButton
            style={{
              borderColor: COLORS.lightGray,
              borderWidth: 1,
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: 'bold',
                color: COLORS.black,
              }}>
              View Project
            </Text>
          </SecondaryButton>
        </View>
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
