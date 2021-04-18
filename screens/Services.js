import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {
  Screen,
  Logo,
  ServicesCart,
  TechCart,
  IconViewWrapper,
  IconWrapper,
  IconText,
} from '../Styles/Screen';

const Services = () => {
  return (
    <Screen>
      <ServicesCart>
        <View
          style={{
            flexDirection: 'column',
            paddingRight: 20,
            paddingLeft: 20,
          }}>
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
      {/* Tech We use */}
      <View style={{marginTop: 32, flexDirection: 'column'}}>
        <View
          style={{
            height: 150,
            width: '100%',
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
        <TechCart>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: 15,
              fontWeight: 'bold',
              paddingTop: 20,
              paddingLeft: 20,
            }}>
            FRONT-END
          </Text>
          <View
            style={{
              width: 120,
              height: 2.1,
              marginTop: 8,
              backgroundColor: COLORS.primary,
            }}></View>
          <IconViewWrapper>
            {/* vue */}
            <IconWrapper>
              <Image
                source={images.vue}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Vue.js</IconText>
            </IconWrapper>
            {/* css */}
            <IconWrapper>
              <Image
                source={images.css}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>CSS 3</IconText>
            </IconWrapper>
            {/* html */}
            <IconWrapper>
              <Image
                source={images.html}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>HTML 5</IconText>
            </IconWrapper>
            {/* ts */}
            <IconWrapper>
              <Image
                source={images.ts}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Type Script</IconText>
            </IconWrapper>
          </IconViewWrapper>
          <IconViewWrapper>
            {/* vue */}
            <IconWrapper>
              <Image
                source={images.react}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>React</IconText>
            </IconWrapper>
            {/* css */}
            <IconWrapper>
              <Image
                source={images.css}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>CSS 3</IconText>
            </IconWrapper>
            {/* html */}
            <IconWrapper>
              <Image
                source={images.html}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>HTML 5</IconText>
            </IconWrapper>
            {/* ts */}
            <IconWrapper>
              <Image
                source={images.ts}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Type Script</IconText>
            </IconWrapper>
          </IconViewWrapper>
        </TechCart>
        <TechCart>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: 15,
              fontWeight: 'bold',
              paddingTop: 20,
              paddingLeft: 20,
            }}>
            BACK-END
          </Text>
          <View
            style={{
              width: 120,
              height: 2.1,
              marginTop: 8,
              backgroundColor: COLORS.primary,
            }}></View>
          <IconViewWrapper>
            {/* laravel */}
            <IconWrapper>
              <Image
                source={images.laravel}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Laravel</IconText>
            </IconWrapper>
            {/* php */}
            <IconWrapper>
              <Image
                source={images.php}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>PHP</IconText>
            </IconWrapper>
            {/* Algolia */}
            <IconWrapper>
              <Image
                source={images.Algolia}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Algolia</IconText>
            </IconWrapper>
            {/* MySQL */}
            <IconWrapper>
              <Image
                source={images.MySQL}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>MySQL</IconText>
            </IconWrapper>
          </IconViewWrapper>
          <IconViewWrapper style={{justifyContent: 'space-evenly'}}>
            {/* Redis */}
            <IconWrapper>
              <Image
                source={images.Redis}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Redis</IconText>
            </IconWrapper>
            {/* Elasticsearch */}
            <IconWrapper>
              <Image
                source={images.Elasticsearch}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Elasticsearch</IconText>
            </IconWrapper>
            {/* Firebase */}
            <IconWrapper>
              <Image
                source={images.firebase}
                resizeMode={'center'}
                style={{height: 40, width: 40}}
              />
              <IconText>Firebase</IconText>
            </IconWrapper>
          </IconViewWrapper>
        </TechCart>
        <View style={{height: 100}}></View>
      </View>
    </Screen>
  );
};

export default Services;

const styles = StyleSheet.create({});
