import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, icons, images, SIZES} from '../constants';
import {PrimaryButton, TechCart} from '../Styles/Screen';

const NewsDetails = ({route, navigation}) => {
  const renderNews = () => {
    const NewsData = [
      {
        id: 1,
        image: images.News_1,
        title: 'We Just Redesign Our Website',
        description:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi.',
        longDescription:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi. Pellentesque sagittis,\n\n quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi',
        link: 'https://zakirsoft.com/',
      },
      {
        id: 2,
        image: images.News_2,
        title: 'Zakirsoft hired new Designer',
        description:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi.',
        longDescription:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi. Pellentesque sagittis,\n\n quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi',
        link: 'https://zakirsoft.com/',
      },
      {
        id: 3,
        image: images.News_3,
        title: 'We announced 100M invesment',
        description:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi.',
        longDescription:
          'Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi. Pellentesque sagittis,\n\n quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi Pellentesque sagittis, quam vel tincidunt ullamcorper, massa purus egestas libero, nec porttitor augue leo sed mi',
        link: 'https://zakirsoft.com/',
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
            backgroundColor: COLORS.white,
            width: SIZES.width - 40,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
          }}>
          {/* <View style={{justifyContent: 'center'}}> */}
          <Image
            source={item.image}
            resizeMode={'cover'}
            style={{
              height: SIZES.height / 3,
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          {/* </View> */}
          <View style={{marginTop: SIZES.height / 45, marginLeft: 16}}>
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
              style={{marginTop: SIZES.height / 45}}
              onPress={() => {
                navigation.navigate('NewsDetails', item);
              }}>
              <View
                style={{flexDirection: 'row', marginBottom: SIZES.height / 45}}>
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
                      height: SIZES.nBodyText,
                      width: SIZES.nBodyText,
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
            marginTop: SIZES.height / 7,
            flexDirection: 'row',
            position: 'relative',
            marginRight: 22,
            marginLeft: 22,
            marginBottom: SIZES.height / 25,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: SIZES.nTitle,
              fontFamily: 'DMSans-Regular',
              fontWeight: 'bold',
            }}>
            Related News
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              // marginLeft: 56,
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
                  fontSize: SIZES.nBodyText,
                }}>
                ???
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  };
  const {image, title, longDescription} = route.params;
  return (
    <ScrollView style={{backgroundColor: COLORS.ScreenColor}}>
      <View style={{marginLeft: 22, marginRight: 22}}>
        <Image
          source={image}
          // resizeMode={'contain'}
          style={{
            height: SIZES.height / 3,
            width: '100%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nTitle,
            fontWeight: 'bold',
            marginTop: SIZES.height / 50,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nBodyText,
            color: COLORS.secondary,
            marginTop: SIZES.height / 60,
            lineHeight: SIZES.nMinimulLineheight,
          }}>
          {longDescription}
        </Text>
        <View
          style={{
            marginTop: SIZES.height / 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <PrimaryButton
            activeOpacity={0.8}
            style={{
              height: SIZES.nPrimaryButtonHeight,
              width: SIZES.nPrimaryButtonWidth,
            }}
            onPress={() => navigation.navigate('Contact')}>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              Contact
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
                style={{
                  height: SIZES.nPrimaryButtonHeight,
                  width: 40,
                  marginLeft: SIZES.width / 100,
                }}
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
                style={{
                  height: SIZES.nPrimaryButtonHeight,
                  width: 40,
                  marginLeft: SIZES.width / 100,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => Linking.openURL('https://github.com/zakirsoft')}>
              <Image
                source={icons.github}
                resizeMode={'contain'}
                style={{
                  height: SIZES.nPrimaryButtonHeight,
                  width: 40,
                  marginLeft: SIZES.width / 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {renderNews()}
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({});
