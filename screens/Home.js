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
      <ScrollView>
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
              style={{height: 365, width: '100%', top: -10}}
            />
          </View>
          <View style={{flexDirection: 'column', top: -55}}>
            <Text
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: SIZES.largeTitle,
                // fontWeight: 'bold',
              }}>
              We are here to
            </Text>
            <Text
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: SIZES.largeTitle,
                // fontWeight: 'bold',
                top: -10,
              }}>
              grow your
            </Text>
            <Text
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: SIZES.largeTitle,
                // fontWeight: 'bold',
                top: -15,
              }}>
              business.
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
                fontSize: SIZES.body3,
                color: COLORS.secondary,
                lineHeight: 24,
              }}>
              As a software company we develop innovatives website & software
              solutions. We are proud of what we do.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              top: -55,
            }}>
            <PrimaryButton
              style={{marginRight: 8}}
              onPress={() => navigation.navigate('Contact')}>
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
              }}
              onPress={() => navigation.navigate('Projects')}>
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
        <LiveProjects />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
