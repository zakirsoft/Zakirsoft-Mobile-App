import React, {useEffect} from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, images, SIZES, FONTS, icons} from '../constants';
import {Screen, Logo, PrimaryButton} from '../Styles/Screen';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import call from 'react-native-phone-call';

const Contact = () => {
  useEffect(() => {
    renderMap();
  }, []);

  const renderMap = () => {
    LogBox.ignoreAllLogs();
    return (
      <View style={{height: 397}}>
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
              source={images.logo}
              resizeMode={'contain'}
              style={{height: 20, width: 80}}
            />
          </Marker>
        </MapView>
      </View>
    );
  };

  const renderInfo = () => (
    <>
      <View
        style={{
          width: '100%',
          height: 240,
          borderRadius: 10,
          top: -40,
          backgroundColor: COLORS.white,
          // marginLeft: 24,
          position: 'relative',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 16,
            marginTop: 16,
            marginBottom: 16,
          }}>
          <View
            style={{
              height: 48,
              width: 48,
              borderRadius: 10,
              backgroundColor: COLORS.ScreenColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.Location}
              resizeMode={'contain'}
              style={{
                height: 22,
                width: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: 16,
                color: COLORS.black,
                marginLeft: 10,
              }}>
              Home# 1024/N, Road# 17/A, Adabor, Dhaka-1207
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 330,
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
            marginBottom: 16,
          }}>
          <View
            style={{
              height: 48,
              width: 48,
              borderRadius: 10,
              backgroundColor: COLORS.ScreenColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.Call}
              resizeMode={'contain'}
              style={{
                height: 22,
                width: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: 16,
                color: COLORS.black,
                marginLeft: 10,
              }}>
              +8801625 592566
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 330,
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
            marginBottom: 16,
          }}>
          <View
            style={{
              height: 48,
              width: 48,
              borderRadius: 10,
              backgroundColor: COLORS.ScreenColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.Call}
              resizeMode={'contain'}
              style={{
                height: 22,
                width: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: 16,
                color: COLORS.black,
                marginLeft: 10,
              }}>
              zakirsoft20@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 240,
          borderRadius: 10,
          top: -40,
          // marginLeft: 24,
          position: 'relative',
          marginTop: 16,
        }}>
        <PrimaryButton
          style={{width: '100%'}}
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
              style={{height: 18, width: 18, tintColor: COLORS.white}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.white,
                paddingLeft: 4,
              }}>
              Call Now
            </Text>
          </View>
        </PrimaryButton>
      </View>
    </>
  );

  return (
    <Screen>
      {renderMap()}
      {renderInfo()}
    </Screen>
  );
};

export default Contact;

const styles = StyleSheet.create({});
