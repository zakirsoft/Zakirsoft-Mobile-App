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
import Header from '../components/Header';
import {COLORS, images, SIZES, FONTS, icons} from '../constants';
import {Screen, Logo, PrimaryButton, TechCart} from '../Styles/Screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  const renderItem = ({item}) => (
    <View
      style={{
        flex: 1,
        height: SIZES.height / 3,
      }}>
      <Image
        source={item.Img}
        style={{
          height: '100%',
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
              ???
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
                fontSize: SIZES.nNewsTitle,
                fontFamily: 'DMSans-Regular',
                fontWeight: 'bold',
              }}>
              About us
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
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
                fontSize: SIZES.nBodyText,
                color: COLORS.secondary,
                lineHeight: 24,
                paddingTop: 15,
              }}>
              we also have eCommerce systems for your online business.
            </Text>
          </View>
          <View
            style={{
              marginTop: 24,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <PrimaryButton
              activeOpacity={0.8}
              style={{}}
              // onPress={() => navigation.navigate('Contact')}
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/zakirsoft20')
                }>
                <Image
                  source={icons.facebook}
                  resizeMode={'contain'}
                  style={{height: 40, width: 40, marginLeft: 4}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  Linking.openURL('https://www.linkedin.com/company/zakirsoft')
                }>
                <Image
                  source={icons.linkdin}
                  resizeMode={'contain'}
                  style={{height: 40, width: 40, marginLeft: 4}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Linking.openURL('https://github.com/zakirsoft')}>
                <Image
                  source={icons.github}
                  resizeMode={'contain'}
                  style={{height: 40, width: 40, marginLeft: 4}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderTestimonial = () => {
    const TestimonialData = [
      {
        id: 1,
        text:
          '"Zakir Soft has been the best web development company I have worked with. They have met or exceeded my expectations on every project??? They have allowed me to bring all of my projects together under one roof and begin to develop an integrated product and code base that can be leveraged across all of my existing and forthcoming services."',
        name: 'Caroline Aumeran',
        position: 'Head of Product Development',
        image: images.Google,
      },
      {
        id: 2,
        text:
          '"Zakir Soft has been the best web development company I have worked with. They have met or exceeded my expectations on every project??? They have allowed me to bring all of my projects together under one roof and begin to develop an integrated product and code base that can be leveraged across all of my existing and forthcoming services."',
        name: 'Zakir Hossen',
        position: 'CEO & Founder',
        image: images.logo,
      },
    ];
    const renderItem = ({item}) => {
      return (
        <View>
          <View
            style={{
              // height: 310,
              width: SIZES.width - 44,
              marginBottom: 50,
              marginLeft: 22,
              marginRight: 22,
              borderRadius: 10,
              backgroundColor: COLORS.white,
            }}>
            <View style={{marginTop: 16, marginLeft: 16, marginRight: 16}}>
              <Text
                style={{
                  fontSize: SIZES.nBodyText,
                  color: COLORS.secondary,
                  lineHeight: 24,
                }}>
                {item.text}
              </Text>
              <Text
                style={{
                  fontSize: SIZES.nBodyText,
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
                  marginBottom: '5%',
                }}>
                <Text
                  style={{
                    fontSize: SIZES.nBodyText - 2,
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
          </View>
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
              marginRight: '5%',
              marginLeft: '5%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '5%',
            }}>
            <Text
              style={{
                fontSize: SIZES.nTitle,
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
              <TouchableOpacity activeOpacity={0.8}>
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
              <TouchableOpacity activeOpacity={0.8}>
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
        title: 'Zakir Soft is now working on Product Development',
        description:
          'Zakir Soft has just updated the design of their official website. Zafar Iqbal of the UI department worked on the project...',
        longDescription:
          'Zakir Soft has just updated the design of their official website. Zafar Iqbal of the UI department worked on the project and the front-end department implemented the next day.  Many new sections have been added here which you can visit now if you want from Zakir soft.com',
        link: 'https://zakirsoft.com/',
      },
      {
        id: 2,
        image: images.News_2,
        title: 'We are hiring',
        description:
          'Zakir Software has hired Python Developer and React Developer for the new project and a new senior UI / UX designer and aslo hired...',
        longDescription:
          'Zakir Software has hired Python Developer and React Developer for the new project and a new senior UI / UX designer and aslo hired a video editor for CodeSikhi plartform. there working as to give the user best performance.',
        link: 'https://zakirsoft.com/',
      },
      {
        id: 3,
        image: images.News_3,
        title: 'Templatecookie.com Lunch',
        description:
          'Templatecookie is a premium UI, HTML & Laravel Scripts Marketplace. We are working hard to make life easier with our Premium Products.',
        longDescription:
          'Since the begining we wanted to worked with digital products. During the last few months we have developed couple digital products. We are brining all the awesome products in once place and lunching our own marketplace Templatecookie.com. Let us all celebrate together and take advantage of our new marketplace. We hope we can bring awesome products to make your everyday life easier.',
        link: 'https://templatecookie.com/',
      },
    ];
    const [active, setActive] = useState(0);
    const change = ({nativeEvent}) => {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== active) {
        setActive(slide);
      }
    };
    const renderItem = ({item}) => {
      return (
        <View
          style={{
            // height: 450,
            width: SIZES.width - 44,
            marginBottom: 20,
            marginLeft: 22,
            marginRight: 22,
            backgroundColor: COLORS.white,
            borderRadius: 10,
          }}>
          {/* <View style={{justifyContent: 'center'}}> */}
          <Image
            source={item.image}
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
                fontSize: SIZES.nNewsTitle,
                fontFamily: 'DMSans-Regular',
                fontWeight: 'bold',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
                color: COLORS.secondary,
                lineHeight: 24,
                paddingTop: 8,
              }}>
              {item.description}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{marginTop: 20}}
              onPress={() => {
                navigation.navigate('NewsDetails', item);
              }}>
              <View style={{flexDirection: 'row', marginBottom: '5%'}}>
                <Text
                  style={{
                    fontSize: SIZES.nBodyText,
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
        </View>
      );
    };

    return (
      <View style={{}}>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            position: 'relative',
            marginRight: '5%',
            marginLeft: '5%',
            justifyContent: 'space-between',
            marginBottom: '5%',
          }}>
          <Text
            style={{
              fontSize: SIZES.nTitle,
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
            <TouchableOpacity activeOpacity={0.8}>
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
            <TouchableOpacity activeOpacity={0.8}>
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
            data={NewsData}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            onScroll={change}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          />
          <View
            style={{
              flexDirection: 'row',
              // position: 'relative',
              marginBottom: 50,
              alignSelf: 'center',
            }}>
            {NewsData.map((i, k) => (
              <Text
                key={k}
                style={{
                  color: k == active ? COLORS.primary : '#C4D6FB',
                  marginRight: 8,
                }}>
                ???
              </Text>
            ))}
          </View>
        </View>
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
              fontSize: SIZES.nTitle,
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
                fontSize: SIZES.nBodyText,
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
            activeOpacity={0.8}
            style={{marginTop: 16}}
            onPress={() => navigation.navigate('Career')}>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
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
    <>
      <Header />
      <ScrollView style={{backgroundColor: COLORS.ScreenColor}}>
        {renderFlatlist()}
        {/* {renderDots()} */}
        {renderBody({navigation})}
        {renderTestimonial()}
        {renderNews()}
        {renderBottom()}
      </ScrollView>
    </>
  );
};

export default About;

const styles = StyleSheet.create({});
