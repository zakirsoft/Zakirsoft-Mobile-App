import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {PrimaryButton, Screen, TechCart} from '../Styles/Screen';

const CareerDetails = () => {
  return (
    <Screen>
      <View style={{backgroundColor: COLORS.white, borderRadius: 10}}>
        <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: SIZES.nNewsTitle,
                // fontWeight: 'bold',
              }}>
              Please answer these questions
            </Text>
            <TextInput
              placeholder="Full Name"
              style={{
                // height: SIZES.height / 15,
                width: '100%',
                borderColor: COLORS.secondary,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 16,
              }}
            />
            <TextInput
              placeholder="Email"
              autoCompleteType="email"
              style={{
                // height: 48,
                width: '100%',
                borderColor: COLORS.secondary,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: '5%',
              }}
            />
            <TextInput
              placeholder="Portfolio Link"
              style={{
                // height: 48,
                width: '100%',
                borderColor: COLORS.secondary,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: '5%',
              }}
            />
            <View
              style={{
                alignContent: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nBodyText * 0.8,
                  paddingTop: 4,
                  color: COLORS.secondary,
                }}>
                Dribbble, Github or any other publicly accessible link.
              </Text>
            </View>

            <TextInput
              placeholder="Tell me something about you."
              multiline={true}
              // scrollEnabled={true}
              numberOfLines={7}
              style={{
                height: 144,
                width: '100%',
                borderColor: COLORS.secondary,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: '5%',
              }}
            />
          </View>
          <View style={{marginTop: 20, flexDirection: 'row-reverse'}}>
            <PrimaryButton
              activeOpacity={0.8}
              style={{
                width: SIZES.width / 2.5,
                height: SIZES.height / 15,
                marginBottom: '7%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: SIZES.nBodyText,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  Apply Now
                </Text>
                <Image
                  source={icons.RightArrow}
                  resizeMode={'contain'}
                  style={{
                    height: SIZES.nBodyText,
                    width: SIZES.nBodyText,
                    tintColor: COLORS.white,
                    marginLeft: 12,
                  }}
                />
              </View>
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={{height: 50}}></View>
    </Screen>
  );
};

export default CareerDetails;

const styles = StyleSheet.create({});
