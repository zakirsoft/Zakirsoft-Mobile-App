import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {PrimaryButton, Screen, TechCart} from '../Styles/Screen';

const CareerDetails = () => {
  return (
    <Screen>
      <TechCart style={{height: 516}}>
        <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'DMSans-Bold',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Please answer these questions
            </Text>
            <TextInput
              placeholder="Full Name"
              style={{
                height: 48,
                width: '100%',
                borderColor: COLORS.secondary,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 16,
              }}
            />
            <TextInput
              placeholder="Email"
              style={{
                height: 48,
                width: '100%',
                borderColor: COLORS.secondary,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 16,
              }}
            />
            <TextInput
              placeholder="Portfolio Link"
              style={{
                height: 48,
                width: '100%',
                borderColor: COLORS.secondary,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 16,
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
                  fontSize: 12,
                  paddingTop: 4,
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
                marginTop: 16,
              }}
            />
          </View>
          <View style={{marginTop: 20, flexDirection: 'row-reverse'}}>
            <PrimaryButton style={{width: 166}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: SIZES.body3,
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  Apply Now
                </Text>
                <Image
                  source={icons.RightArrow}
                  resizeMode={'contain'}
                  style={{
                    height: 10,
                    width: 24,
                    tintColor: COLORS.white,
                    marginLeft: 12,
                  }}
                />
              </View>
            </PrimaryButton>
          </View>
        </View>
      </TechCart>
    </Screen>
  );
};

export default CareerDetails;

const styles = StyleSheet.create({});
