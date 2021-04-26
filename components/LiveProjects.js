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
      firstNumber: '100+',
      firstNumberTitle: 'Product Download',
      secondNumber: '500+',
      secondNumberTitle: 'Product View',
      description:
        'Praesent porttitor quam lacus, quis rhoncus ligula iaculis pharetra. Phasellus vitae tellus justo. Donec tellus eros, feugiat vel augue vel, vehicula luctus ex. Vestibulum semper a ante at maximus. In fringilla condimentum mauris.',
      link: 'https://echotemplate.com/',
    },
    {
      id: 2,
      project_SS: images.codeSikhi_SS,
      project_Logo: images.codeSikhi_Logo,
      name: 'Codeshiki',
      firstNumber: '5+',
      firstNumberTitle: 'Online Course',
      secondNumber: '500+',
      secondNumberTitle: 'Students',
      description:
        'আধুনিক টেকনোলজির সম্বনয়ে আমাদের কোর্সগুলো ডিজাইন করা হয়েছে । এই কোর্স গুলোর মাধ্যমে আপনি যেকোনো সফটওয়্যার ডিসাইন/ ডেভেলপ এর পাশাপাশি চাকরি বাজার এবং ফ্রিল্যান্সিং ক্যারিয়ারের বিষয়ে গাইডলাইন পাবেন।',
      link: 'https://codeshikhi.io/',
    },
  ];

  const renderItem = ({item}) => {
    // return (
    //   <View key={} style={{backgroundColor: COLORS.ScreenColor}}>
    //     <View
    //       style={{
    //         marginTop: 80,
    //         backgroundColor: COLORS.white,
    //         height: 530,
    //         marginRight: 22,
    //         marginLeft: 22,
    //         borderRadius: 10,
    //         marginBottom: 30,
    //         top: 25,
    //       }}>
    //       <View style={{marginTop: 182, marginLeft: 20, marginRight: 20}}>
    //         <Image
    //           source={item.project_Logo}
    //           resizeMode={'contain'}
    //           style={{
    //             height: 16,
    //             width: '40%',
    //           }}
    //         />
    //         <Text
    //           style={{
    //             fontFamily: 'DMSans-Regular',
    //             fontSize: 26,
    //             fontWeight: 'bold',
    //             marginTop: 8,
    //           }}>
    //           {item.name}
    //         </Text>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             // justifyContent: 'space-between',
    //             marginTop: 16,
    //           }}>
    //           <View style={{flexDirection: 'column'}}>
    //             <Text
    //               style={{
    //                 fontFamily: 'DMSans-Regular',
    //                 fontSize: 16,
    //                 fontWeight: 'bold',
    //               }}>
    //               {item.firstNumber}
    //             </Text>
    //             <Text
    //               style={{
    //                 fontFamily: 'DMSans-Regular',
    //                 fontSize: 16,
    //                 fontWeight: 'bold',
    //                 color: COLORS.secondary,
    //                 marginTop: 6,
    //               }}>
    //               {item.firstNumberTitle}
    //             </Text>
    //           </View>
    //           <View style={{flexDirection: 'column', marginLeft: 61}}>
    //             <Text
    //               style={{
    //                 fontFamily: 'DMSans-Regular',
    //                 fontSize: 16,
    //                 fontWeight: 'bold',
    //               }}>
    //               {item.secondNumber}
    //             </Text>
    //             <Text
    //               style={{
    //                 fontFamily: 'DMSans-Regular',
    //                 fontSize: 16,
    //                 fontWeight: 'bold',
    //                 color: COLORS.secondary,
    //                 marginTop: 6,
    //               }}>
    //               {item.secondNumberTitle}
    //             </Text>
    //           </View>
    //         </View>
    //         <Text
    //           style={{
    //             fontFamily: 'DMSans-Regular',
    //             fontSize: 14,
    //             lineHeight: 21,
    //             color: COLORS.secondary,
    //             marginTop: 16,
    //           }}>
    //           {item.description}
    //         </Text>
    //         <PrimaryButton
    //           activeOpacity={0.8}
    //           style={{marginTop: 24, width: 219, marginBottom: 24}}
    //           onPress={() => Linking.openURL(item.link)}>
    //           <View
    //             style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    //             <View style={{justifyContent: 'center'}}>
    //               <Text
    //                 style={{
    //                   fontSize: 16,
    //                   fontFamily: 'DMSans-Regular',
    //                   fontWeight: 'bold',
    //                   color: COLORS.white,
    //                 }}>
    //                 Launch {item.name}
    //               </Text>
    //             </View>
    //             <View
    //               style={{
    //                 justifyContent: 'center',
    //                 alignItems: 'center',
    //                 marginLeft: 5,
    //               }}>
    //               <Image
    //                 source={icons.RightArrow}
    //                 resizeMode={'contain'}
    //                 style={{
    //                   width: 20,
    //                   height: 10,
    //                   top: 2,
    //                   tintColor: COLORS.white,
    //                 }}
    //               />
    //             </View>
    //           </View>
    //         </PrimaryButton>
    //       </View>
    //     </View>
    //     <View style={{bottom: 600}}>
    //       <Image
    //         source={item.project_SS}
    //         // resizeMode={'cover'}
    //         style={{
    //           height: 220,
    //           width: '98%',
    //           marginLeft: 4,
    //           position: 'absolute',
    //         }}
    //       />
    //     </View>
    //   </View>
    // );
  };

  return (
    <>
      <View
        style={{
          // marginTop: 24,
          // marginBottom: 24,
          flexDirection: 'row',
          position: 'relative',
          marginRight: 22,
          marginLeft: 22,
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
              <View style={{marginTop: 182, marginLeft: 20, marginRight: 20}}>
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
                    marginTop: 8,
                  }}>
                  {item.name}
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
                        marginTop: 6,
                      }}>
                      {item.firstNumberTitle}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: SIZES.width / 6,
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
                        marginTop: 6,
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
                    marginTop: 16,
                  }}>
                  {item.description}
                </Text>
                <PrimaryButton
                  style={{
                    height: SIZES.height / 15,
                    width: SIZES.width / 2,
                    marginBottom: 24,
                    marginTop: 24,
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
                        marginLeft: 5,
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
            <View style={{bottom: 600}}>
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
