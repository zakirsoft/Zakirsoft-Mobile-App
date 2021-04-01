import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo, ServicesCart} from '../Styles/Screen';

const Services = () => {
  return (
    <Screen>
      <ServicesCart>
        <View
          style={{flexDirection: 'column', paddingRight: 20, paddingLeft: 20}}>
          <View style={{paddingTop: 20}}>
            <Image source={images.s_frontend} style={{height: 90, width: 85}} />
          </View>
          <View style={{paddingTop: 16}}>
            <Text
              style={{
                fontFamily: FONTS.H2,
                fontSize: SIZES.h2,
                fontWeight: 'bold',
              }}>
              Frontend Development
            </Text>
          </View>
          <View style={{paddingTop: 8}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: 14,
                color: COLORS.secondary,
                lineHeight: 21,
              }}>
              Front-end web development is the practice of converting data to a
              graphical interface, through the use of HTML, CSS, and JavaScript,
              so that users can view and interact with that data. A front-end
              web developer is responsible for implementing visual elements that
              users see and interact with in a web application.
            </Text>
          </View>
        </View>
      </ServicesCart>
      <ServicesCart>
        <View
          style={{flexDirection: 'column', paddingRight: 20, paddingLeft: 20}}>
          <View style={{paddingTop: 20}}>
            <Image source={images.s_backend} style={{height: 90, width: 90}} />
          </View>
          <View style={{paddingTop: 16}}>
            <Text
              style={{
                fontFamily: FONTS.H2,
                fontSize: SIZES.h2,
                fontWeight: 'bold',
              }}>
              Backend Development
            </Text>
          </View>
          <View style={{paddingTop: 8}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: 14,
                color: COLORS.secondary,
                lineHeight: 21,
              }}>
              A back-end web developer is responsible for server-side web
              application logic and integration of the work front-end web
              developers do. Back-end developers usually write web services and
              APIs used by front-end developers and mobile application
              developers.
            </Text>
          </View>
        </View>
      </ServicesCart>
      <ServicesCart style={{height: 360}}>
        <View
          style={{flexDirection: 'column', paddingRight: 20, paddingLeft: 20}}>
          <View style={{paddingTop: 20}}>
            <Image source={images.s_spa} style={{height: 90, width: 135}} />
          </View>
          <View style={{paddingTop: 16}}>
            <Text
              style={{
                fontFamily: FONTS.H2,
                fontSize: SIZES.h2,
                fontWeight: 'bold',
              }}>
              SPA Development
            </Text>
          </View>
          <View style={{paddingTop: 8}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: 14,
                color: COLORS.secondary,
                lineHeight: 21,
              }}>
              A single-page application (SPA) is a web Application or website
              that interacts with the user by dynamically rewriting the current
              web page with new data from the web server, instead of the default
              method of the browser loading entire new pages. The goal is faster
              transitions that make the website feel more like a native app.
            </Text>
          </View>
        </View>
      </ServicesCart>
      <ServicesCart style={{height: 370}}>
        <View
          style={{flexDirection: 'column', paddingRight: 20, paddingLeft: 20}}>
          <View style={{paddingTop: 20}}>
            <Image source={images.s_pwa} style={{height: 90, width: 141}} />
          </View>
          <View style={{paddingTop: 16}}>
            <Text
              style={{
                fontFamily: FONTS.H2,
                fontSize: SIZES.h2,
                fontWeight: 'bold',
              }}>
              PWA Development
            </Text>
          </View>
          <View style={{paddingTop: 8}}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: 14,
                color: COLORS.secondary,
                lineHeight: 21,
              }}>
              Progressive web apps (PWA) has in combination of the best features
              of the site and mobile application built-in it. In practice, this
              means that such a site can be accessed by users as well as the
              application and the most interesting thing is an Internet
              connection is not necessary for this. The installation process can
              be done in one click directly from the browser.
            </Text>
          </View>
        </View>
      </ServicesCart>
      <View
        style={{
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 28,
            fontWeight: 'bold',
            // marginRight: 79,
            // marginLeft: 79,
          }}>
          Technology we use
        </Text>
      </View>
      <View style={{marginTop: 32, flexDirection: 'column'}}>
        <View
          style={{
            height: 142,
            width: 345,
            borderRadius: 10,
            backgroundColor: COLORS.white,
          }}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: 15,
              fontWeight: 'bold',
              paddingTop: 20,
              paddingLeft: 20,
            }}>
            UI/UX
          </Text>
          <View
            style={{
              width: 100,
              height: 2,
              marginTop: 8,
              backgroundColor: COLORS.primary,
            }}></View>
          <View
            style={{
              paddingRight: 29,
              paddingLeft: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 16,
            }}>
            {/* figma */}
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.figma}
                // style={{height: 32, width: 21.1}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 14,
                  paddingTop: 9,
                }}>
                Figma
              </Text>
            </View>
            {/* Adobe XD */}
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.xd}
                // style={{height: 32, width: 21.1}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 14,
                  paddingTop: 9,
                }}>
                Adobe XD
              </Text>
            </View>
            {/* Illustrator */}
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.ai}
                // style={{height: 32, width: 21.1}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 14,
                  paddingTop: 9,
                }}>
                Illustrator
              </Text>
            </View>
            {/* Photoshop */}
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.ps}
                // style={{height: 32, width: 21.1}}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: 14,
                  paddingTop: 9,
                }}>
                Photoshop
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Services;

const styles = StyleSheet.create({});
