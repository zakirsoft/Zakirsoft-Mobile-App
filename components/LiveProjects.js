import React from 'react';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import {COLORS, icons, images} from '../constants';
import {PrimaryButton} from '../Styles/Screen';

const LiveProjects = () => {
  const ProjectsData = [
    {
      id: 1,
      project_SS: images.EchoTemplate_SS,
      project_Logo: images.EchoTemplate_Logo,
      name: 'Echotemplate',
      firstNumber: '100 +',
      firstNumberTitle: 'Product Download',
      secondNumber: '500 +',
      secondNumberTitle: 'Product View',
      description:
        'Praesent porttitor quam lacus, quis rhoncus ligula iaculis pharetra. Phasellus vitae tellus justo. Donec tellus eros, feugiat vel augue vel, vehicula luctus ex. Vestibulum semper a ante at maximus. In fringilla condimentum mauris.',
    },
    {
      id: 2,
      project_SS: images.codeSikhi_SS,
      project_Logo: images.codeSikhi_Logo,
      name: 'Codeshiki',
      firstNumber: '5 +',
      firstNumberTitle: 'Online Course',
      secondNumber: '500 +',
      secondNumberTitle: 'Students',
      description:
        'Praesent porttitor quam lacus, quis rhoncus ligula iaculis pharetra. Phasellus vitae tellus justo. Donec tellus eros, feugiat vel augue vel, vehicula luctus ex. Vestibulum semper a ante at maximus. In fringilla condimentum mauris.',
    },
  ];
  return (
    <>
      <View
        style={{
          // marginTop: 163,
          backgroundColor: COLORS.white,
          height: 530,
          marginRight: 22,
          marginLeft: 22,
          borderRadius: 10,
          // marginBottom: 100,
        }}>
        <View style={{marginTop: 182, marginLeft: 20, marginRight: 20}}>
          <Image
            source={images.codeSikhi_Logo}
            resizeMode={'contain'}
            style={{height: 16, width: 60}}
          />
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: 26,
              fontWeight: 'bold',
              marginTop: 8,
            }}>
            Codeshiki
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              marginTop: 16,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                5+
              </Text>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: COLORS.secondary,
                  marginTop: 6,
                }}>
                Online Course
              </Text>
            </View>
            <View style={{flexDirection: 'column', marginLeft: 61}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                500+
              </Text>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: COLORS.secondary,
                  marginTop: 6,
                }}>
                Students
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: 14,
              lineHeight: 21,
              color: COLORS.secondary,
              marginTop: 16,
            }}>
            Praesent porttitor quam lacus, quis rhoncus ligula iaculis pharetra.
            Phasellus vitae tellus justo. Donec tellus eros, feugiat vel augue
            vel, vehicula luctus ex. Vestibulum semper a ante at maximus. In
            fringilla condimentum mauris.
          </Text>
          <PrimaryButton
            style={{marginTop: 24, width: 219, marginBottom: 24}}
            onPress={() => Linking.openURL('www.google.com')}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'DMSans-Regular',
                    fontWeight: 'bold',
                    color: COLORS.white,
                  }}>
                  Launch Codeshiki
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <Image
                  source={icons.RightArrow}
                  resizeMode={'contain'}
                  style={{
                    width: 20,
                    height: 10,
                    top: 2,
                    tintColor: COLORS.white,
                  }}
                />
              </View>
            </View>
          </PrimaryButton>
        </View>
      </View>
      <View style={{bottom: 700, marginBottom: 142}}>
        <Image
          source={images.codeSikhi_SS}
          resizeMode={'contain'}
          style={{
            height: 406,
            width: '98%',
            marginLeft: 4,
          }}
        />
      </View>
    </>
  );
};

export default LiveProjects;

const styles = StyleSheet.create({});
