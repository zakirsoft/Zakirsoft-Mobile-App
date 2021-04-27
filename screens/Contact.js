import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';
import {PrimaryButton} from '../Styles/Screen';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import call from 'react-native-phone-call';
import Header from '../components/Header';
import ContactHeader from '../components/ContactHeader';
import Clipboard from '@react-native-clipboard/clipboard';

const Contact = () => {
  // useEffect(() => {
  //   renderMap();
  // }, []);

  const renderMap = () => {
    return (
      <View style={{height: SIZES.height / 2}}>
        <MapView
          initialRegion={{
            latitude: 23.774905,
            longitude: 90.351175,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034,
          }}
          style={{flex: 1}}>
          <Marker
            coordinate={{latitude: 23.774905, longitude: 90.351175}}
            title={
              'Zakir Soft - Innovative Software & Web Development Solutions'
            }>
            <Image
              source={icons.placeholder}
              resizeMode={'contain'}
              style={{height: SIZES.height / 15, width: SIZES.width / 8}}
            />
          </Marker>
        </MapView>
      </View>
    );
  };

  const renderInfo = () => (
    <>
      <View style={{}}>
        <View
          style={{
            // width: '90%',
            // height: 240,
            borderRadius: 10,

            top: -40,
            backgroundColor: COLORS.white,
            marginLeft: '5%',
            marginRight: '5%',
            position: 'relative',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 16,
              marginTop: 16,
              marginBottom: '5%',
            }}>
            <View
              style={{
                height: SIZES.height / 16,
                width: SIZES.width / 8,
                borderRadius: 10,
                backgroundColor: COLORS.ScreenColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.Location}
                resizeMode={'contain'}
                style={{
                  height: '80%',
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <View
              style={{
                // justifyContent: 'center',
                // alignItems: 'center',
                width: '80%',
              }}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nBodyText,
                  color: COLORS.black,
                  marginLeft: 10,
                }}>
                Home# 1024/N, Road# 17/A, Adabor, Dhaka-1207
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.ScreenColor,
              // top: 80,
              height: 1,
              left: 16,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 16,
              marginTop: 16,
              marginBottom: '5%',
            }}>
            <View
              style={{
                height: SIZES.height / 16,
                width: SIZES.width / 8,
                borderRadius: 10,
                backgroundColor: COLORS.ScreenColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.Call}
                resizeMode={'contain'}
                style={{
                  height: '80%',
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nBodyText,
                  color: COLORS.black,
                  marginLeft: 10,
                }}>
                +8801625 592566
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.ScreenColor,
              // top: 80,
              height: 1,
              left: 16,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 16,
              marginTop: 16,
              marginBottom: '5%',
            }}>
            <View
              style={{
                height: SIZES.height / 16,
                width: SIZES.width / 8,
                borderRadius: 10,
                backgroundColor: COLORS.ScreenColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.Message}
                resizeMode={'contain'}
                style={{
                  height: '80%',
                  width: '40%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <TouchableWithoutFeedback
              onPress={() =>
                Alert.alert('Zakir Soft', 'Email Address Copied!', [
                  {
                    text: 'OK',
                    onPress: () => Clipboard.setString('zakirsoft20@gmail.com'),
                  },
                ])
              }>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    color: COLORS.black,
                    marginLeft: 10,
                  }}>
                  zakirsoft20@gmail.com
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            // height: 240,
            borderRadius: 10,
            top: -40,
            marginLeft: '5%',
            marginRight: '5%',
            position: 'relative',
            // marginLeft: 24,
            // position: 'relative',
            marginTop: 16,
          }}>
          <PrimaryButton
            activeOpacity={0.8}
            style={{width: '100%', height: '34%'}}
            onPress={() => {
              const args = {
                number: '01625 592566',
                prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
              };

              call(args).catch(console.error);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.Call}
                resizeMode={'contain'}
                style={{height: '100%', width: '5%', tintColor: COLORS.white}}
              />
              <Text
                style={{
                  fontSize: SIZES.nBodyText,
                  fontWeight: 'bold',
                  color: COLORS.white,
                  paddingLeft: 4,
                }}>
                Call Now
              </Text>
            </View>
          </PrimaryButton>
        </View>
      </View>
    </>
  );

  return (
    <>
      <ContactHeader />
      <ScrollView style={{backgroundColor: COLORS.ScreenColor}}>
        {renderMap()}
        {renderInfo()}
      </ScrollView>
    </>
  );
};

export default Contact;

const styles = StyleSheet.create({});
