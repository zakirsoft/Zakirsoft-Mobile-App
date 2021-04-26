import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import LiveProjects from '../components/LiveProjects';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, PrimaryButton, SecondaryButton} from '../Styles/Screen';

const Home = ({navigation}) => {
  return (
    <>
      <Header />
      <ScrollView style={{backgroundColor: COLORS.ScreenColor}}>
        <View
          style={{
            flexDirection: 'column',
            top: -5,
            marginRight: 22,
            marginLeft: 22,
            // marginBottom: 75,
          }}>
          <View>
            <Image
              source={images.home}
              resizeMode="contain"
              style={{height: SIZES.height / 2.2, width: '100%'}}
            />
          </View>
          <View style={{flexDirection: 'column', top: -55}}>
            <Text
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: SIZES.nLargeTitle,
                lineHeight: SIZES.height / 13.5,
                // fontWeight: 'bold',
              }}>
              We are here to grow your business.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              top: -65,
              // paddingLeft: 25,
              paddingRight: 24,
            }}>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
                color: COLORS.secondary,
                lineHeight: SIZES.nMinimulLineheight,
                marginTop: SIZES.nMarginTop,
              }}>
              As a software company we develop innovatives website & software
              solutions. We are proud of what we do.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              top: -50,
            }}>
            <PrimaryButton
              activeOpacity={0.8}
              style={{
                marginRight: 8,
                height: SIZES.nPrimaryButtonHeight,
                width: SIZES.nPrimaryButtonWidth,
              }}
              onPress={() => navigation.navigate('Contact')}>
              <Text
                style={{
                  fontSize: SIZES.nBodyText,
                  fontWeight: 'bold',
                  color: COLORS.white,
                }}>
                Contact Us
              </Text>
            </PrimaryButton>
            <SecondaryButton
              activeOpacity={0.7}
              style={{
                borderColor: COLORS.lightGray,
                borderWidth: 1,
                borderRadius: 4,
                height: SIZES.nPrimaryButtonHeight,
                width: SIZES.nPrimaryButtonWidth,
              }}
              onPress={() => navigation.navigate('Projects')}>
              <Text
                style={{
                  fontSize: SIZES.nBodyText,
                  fontWeight: 'bold',
                  color: COLORS.black,
                }}>
                View Project
              </Text>
            </SecondaryButton>
          </View>
        </View>
        <LiveProjects />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
