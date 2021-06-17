import React from 'react';
import {FlatList, Image, Linking, StyleSheet, Text, View} from 'react-native';
import {COLORS, icons, images, SIZES} from '../constants';
import {PrimaryButton} from '../Styles/Screen';

const LiveProjects = () => {
  const ProjectsData = [
    {
      id: 1,
      project_SS: images.EchoTemplate_SS,
      project_Logo: images.EchoTemplate_Logo,
      name: 'Echotemplate',
      firstNumber: '15+',
      firstNumberTitle: 'Product Download',
      secondNumber: '372+',
      secondNumberTitle: 'Product View',
      description:
        'Echotemplate provides mobile-friendly HTML templates and UI/UX templates. You can find free templates that are thoroughly reviewed and tested. Echotemplate has the biggest collections of trendiest ready-to-use templates.',
      link: 'https://echotemplate.com/',
    },
    {
      id: 2,
      project_SS: images.codeSikhi_SS,
      project_Logo: images.codeSikhi_Logo,
      name: 'Codeshiki',
      firstNumber: '3+',
      firstNumberTitle: 'Online Course',
      secondNumber: '1000+',
      secondNumberTitle: 'Students',
      description:
        'Codeshikhi is an online learning platform with professional and experienced mentors. If you want to build your career in Web Development, Codeshikhi is the perfect choice for you. Codeshikhi offers the best courses on web design and development. Also, Codeshikhi.io offers freelancer seminar, freelancing training, and Internship facilities ',
      link: 'https://codeshikhi.io/',
    },
  ];

  return (
    <>
      <View
        style={{
          // marginTop: 24,
          // marginBottom: 24,
          flexDirection: 'row',
          position: 'relative',
          marginRight: '5%',
          marginLeft: '5%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: SIZES.nTitle * 1.2,
            fontFamily: 'DMSans-Regular',
            fontWeight: 'bold',
          }}>
          Our Sub Brands
        </Text>
      </View>
      {ProjectsData.map((item, k) => {
        //used map method insted of flatlist to ignore virtualized error
        return (
          <View key={k} style={{backgroundColor: COLORS.ScreenColor}}>
            <View
              style={{
                marginTop: SIZES.height / 9.5,
                backgroundColor: COLORS.white,
                // height: (SIZES.height * 4) / 5.5,
                width: '90%',
                // justifyContent: 'center',
                marginRight: '5%',
                marginLeft: '5%',
                borderRadius: 10,
                marginBottom: 30,
                top: 25,
              }}>
              <View style={{marginTop: '45%', marginLeft: 20, marginRight: 20}}>
                <Image
                  source={item.project_Logo}
                  resizeMode={'contain'}
                  style={{
                    height: 16,
                    width: '40%',
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nTitle,
                    fontWeight: 'bold',
                    marginTop: '5%',
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: '5%',
                  }}>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontFamily: 'DMSans-Regular',
                        fontSize: SIZES.nBodyText2,
                        fontWeight: 'bold',
                      }}>
                      {item.firstNumber}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'DMSans-Regular',
                        fontSize: SIZES.nBodyText2,
                        fontWeight: 'bold',
                        color: COLORS.secondary,
                        marginTop: '2%',
                      }}>
                      {item.firstNumberTitle}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      // marginLeft: SIZES.width / 6,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'DMSans-Regular',
                        fontSize: SIZES.nBodyText2,
                        fontWeight: 'bold',
                      }}>
                      {item.secondNumber}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'DMSans-Regular',
                        fontSize: SIZES.nBodyText2,
                        fontWeight: 'bold',
                        color: COLORS.secondary,
                        marginTop: '2%',
                      }}>
                      {item.secondNumberTitle}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    lineHeight: 21,
                    color: COLORS.secondary,
                    marginTop: '5%',
                  }}>
                  {item.description}
                </Text>
                <PrimaryButton
                  style={{
                    height: SIZES.height / 15,
                    width: SIZES.width / 2,
                    marginBottom: '8%',
                    marginTop: '5%',
                  }}
                  activeOpacity={0.8}
                  // style={{marginTop: 24, width: 219, }}
                  onPress={() => Linking.openURL(item.link)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: SIZES.nBodyText,
                          fontFamily: 'DMSans-Regular',
                          fontWeight: 'bold',
                          color: COLORS.white,
                        }}>
                        Launch {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '2%',
                      }}>
                      <Image
                        source={icons.RightArrow}
                        resizeMode={'contain'}
                        style={{
                          width: SIZES.nBodyText,
                          height: SIZES.nBodyText,
                          top: 1,
                          tintColor: COLORS.white,
                        }}
                      />
                    </View>
                  </View>
                </PrimaryButton>
              </View>
            </View>
            <View style={{bottom: '98%'}}>
              <Image
                source={item.project_SS}
                resizeMode={'contain'}
                style={{
                  height: SIZES.height / 3,
                  width: '98%',
                  marginLeft: 4,
                  position: 'absolute',
                }}
              />
            </View>
          </View>
        );
      })}
    </>
  );
};

export default LiveProjects;

const styles = StyleSheet.create({});
