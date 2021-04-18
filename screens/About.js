import React, {useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
} from 'react-native';
import {COLORS, images, SIZES, FONTS, icons} from '../constants';
import {Screen, Logo, PrimaryButton, TechCart} from '../Styles/Screen';

const AboutImgData = [
  {
    id: '1',
    Img: images.about_1,
  },
  {
    id: '2',
    Img: images.about_2,
  },
  {id: '3', Img: images.about_3},
  {
    id: '4',
    Img: images.about_4,
  },
];

const About = ({navigation}) => {
  const scrollX = new Animated.Value(0);

  const renderItem = ({item}) => (
    <View
      style={{
        flex: 1,
        height: 250,
      }}>
      <Image
        source={item.Img}
        style={{
          height: 250,
          width: SIZES.width,
          borderRadius: 10,
        }}
        resizeMode={'cover'}
      />
    </View>
  );
  const renderFlatlist = () => {
    const [active, setActive] = useState(0);

    const change = ({nativeEvent}) => {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== active) {
        setActive(slide);
      }
    };
    return (
      <>
        <View>
          <FlatList
            data={AboutImgData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled={true}
            automaticallyAdjustContentInsets={true}
            // bounces={true}
            focusable={true}
            onScroll={change}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            centerContent={true}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            bottom: -8,
            alignSelf: 'center',
          }}>
          {AboutImgData.map((i, k) => (
            <Text
              key={k}
              style={{
                color: k == active ? COLORS.primary : '#C4D6FB',
                marginRight: 8,
              }}>
              ⬤
            </Text>
          ))}
        </View>
      </>
    );
  };
  const renderBody = ({navigation}) => {
    return (
      <View style={{marginTop: 24}}>
        <View style={{marginRight: 22, marginLeft: 22, marginBottom: 50}}>
          <View style={{marginBottom: 12}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'DMSans-Regular',
                fontWeight: 'bold',
              }}>
              About us
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.secondary,
                lineHeight: 24,
              }}>
              Zakir Soft is a Software company and Software Development Training
              Institute. We develop Softwares for your business and we also
              provide quality software training in Adabor Since 2020. We have
              passionate teams like Full Stack Laravel Developer, Android
              Developer, UI/UX Designer. We have management system softwares for
              the local market.
            </Text>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.secondary,
                lineHeight: 24,
                paddingTop: 15,
              }}>
              we also have eCommerce systems for your online business.
            </Text>
          </View>

          <PrimaryButton
            style={{marginTop: 20}}
            // onPress={() => navigation.navigate('Contact')}
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
        </View>
      </View>
    );
  };
  const renderTestimonial = () => {
    const TestimonialData = [
      {
        id: 1,
        text:
          '"Zakir Soft has been the best web development company I have worked with. They have met or exceeded my expectations on every project… They have allowed me to bring all of my projects together under one roof and begin to develop an integrated product and code base that can be leveraged across all of my existing and forthcoming services."',
        name: 'Caroline Aumeran',
        position: 'Head of Product Development',
        image: images.Google,
      },
      {
        id: 2,
        text:
          '"Zakir Soft has been the best web development company I have worked with. They have met or exceeded my expectations on every project… They have allowed me to bring all of my projects together under one roof and begin to develop an integrated product and code base that can be leveraged across all of my existing and forthcoming services."',
        name: 'Zakir Hossen',
        position: 'CEO & Founder',
        image: images.logo,
      },
    ];
    const renderItem = ({item}) => {
      return (
        <View>
          <TechCart
            style={{
              height: 310,
              width: 350,
              marginBottom: 50,
              marginLeft: 22,
              marginRight: 22,
            }}>
            <View style={{marginTop: 16, marginLeft: 16, marginRight: 16}}>
              <Text
                style={{
                  fontSize: SIZES.body3,
                  color: COLORS.secondary,
                  lineHeight: 24,
                }}>
                {item.text}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'DMSans-Regular',
                  fontWeight: 'bold',
                  marginTop: 16,
                }}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.secondary,
                    lineHeight: 24,
                  }}>
                  {item.position}
                </Text>
                <Image
                  source={item.image}
                  resizeMode={'contain'}
                  style={{height: 20, width: 64}}
                />
              </View>
            </View>
          </TechCart>
        </View>
      );
    };

    return (
      <View style={{backgroundColor: '#E7EBEF'}}>
        <View style={{}}>
          <View
            style={{
              marginTop: 24,
              flexDirection: 'row',
              position: 'relative',
              marginRight: 22,
              marginLeft: 22,
            }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'DMSans-Regular',
                fontWeight: 'bold',
              }}>
              Clients Testimonial
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                marginLeft: 24,
              }}>
              <TouchableOpacity>
                <View
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    backgroundColor: COLORS.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icons.GoBack}
                    style={{tintColor: COLORS.white, height: 16, width: 16}}
                    resizeMode={'contain'}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    backgroundColor: COLORS.white,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icons.GoForward}
                    style={{tintColor: COLORS.black, height: 16, width: 16}}
                    resizeMode={'contain'}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <FlatList
              data={TestimonialData}
              renderItem={renderItem}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            />
          </View>
        </View>
      </View>
    );
  };
  const renderNews = () => {
    const NewsData = [
      {
        id: 1,
        image: images.News_1,
        title: 'We Just Redesign Our Website',
        description:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi.',
        link: 'https://zakirsoft.com/',
      },
      {
        id: 2,
        image: images.News_2,
        title: 'We Just Redesign Our Website',
        description:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi.',
        link: 'https://zakirsoft.com/',
      },
      {
        id: 3,
        image: images.News_3,
        title: 'We Just Redesign Our Website',
        description:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi.',
        link: 'https://zakirsoft.com/',
      },
    ];
    return (
      <View style={{marginRight: 22, marginLeft: 22}}>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            position: 'relative',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'DMSans-Regular',
              fontWeight: 'bold',
            }}>
            Our Latest News
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              marginLeft: 56,
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: 18,
                  backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={icons.GoBack}
                  style={{tintColor: COLORS.white, height: 16, width: 16}}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: 18,
                  backgroundColor: COLORS.white,
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={icons.GoForward}
                  style={{tintColor: COLORS.black, height: 16, width: 16}}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TechCart style={{height: 450, width: '100%', marginBottom: 80}}>
          {/* <View style={{justifyContent: 'center'}}> */}
          <Image
            source={images.News_1}
            resizeMode={'cover'}
            style={{
              height: 260,
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          {/* </View> */}
          <View style={{marginTop: 24, marginLeft: 16}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'DMSans-Regular',
                fontWeight: 'bold',
              }}>
              We Just Redesign Our Website
            </Text>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.secondary,
                lineHeight: 24,
                paddingTop: 8,
              }}>
              Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus
              egestas libero, nec porttitor augue leo sed mi.
            </Text>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => {
                Linking.openURL('https://zakirsoft.com/');
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'DMSans-Regular',
                    fontWeight: 'bold',
                    color: COLORS.primary,
                  }}>
                  Read More
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    // alignItems: 'center',
                    top: 1,
                    marginLeft: 8,
                  }}>
                  <Image
                    source={icons.RightArrow}
                    resizeMode={'contain'}
                    style={{
                      width: 20,
                      height: 11,
                      tintColor: COLORS.primary,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </TechCart>
      </View>
    );
  };

  const renderBottom = () => {
    return (
      <View
        style={{
          height: 300,
          width: '100%',
          backgroundColor: '#130732',
          marginTop: 40,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'DMSans-Regular',
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            Join Our Team
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 300,
            }}>
            <Text
              style={{
                fontSize: SIZES.body3,
                color: COLORS.secondary,
                lineHeight: 24,
                paddingTop: 4,
                textAlign: 'center',
              }}>
              We are open to hire skilled professionals send your CV to us and
              get hried.
            </Text>
          </View>
          <PrimaryButton
            style={{marginTop: 16}}
            onPress={() => navigation.navigate('Career')}>
            <Text
              style={{
                fontSize: SIZES.body3,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Join Now
            </Text>
          </PrimaryButton>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{backgroundColor: COLORS.ScreenColor}}>
      {renderFlatlist()}
      {/* {renderDots()} */}
      {renderBody({navigation})}
      {renderTestimonial()}
      {renderNews()}
      {renderBottom()}
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({});
