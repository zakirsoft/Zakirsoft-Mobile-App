import React from 'react';
import {View, Text, Button, Image, Linking, ScrollView} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';
import {PrimaryButton, Screen} from '../Styles/Screen';

const ProjectDetails = ({route}) => {
  const {Title, Img, Description, Roles, ToolUsed, URL} = route.params;

  return (
    // <View>
    //   <Text>{id}</Text>
    //   <Text>{Title}</Text>
    //   <Text>{Description}</Text>
    //   <Image source={Img} resizeMode={'cover'} />
    // </View>

    <ScrollView>
      <View style={{marginBottom: 24}}>
        <Image
          source={Img}
          resizeMode={'contain'}
          style={{width: '100%', height: SIZES.height / 3, borderRadius: 10}}
        />
      </View>
      <View style={{marginRight: '5%', marginLeft: '5%'}}>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nNewsTitle,
            fontWeight: 'bold',
          }}>
          {Title}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nBodyText,
            color: COLORS.secondary,
            marginTop: SIZES.height / 100,
            lineHeight: SIZES.nMinimulLineheight,
          }}>
          {Description}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nBodyText,
            marginTop: SIZES.height / 60,
            fontWeight: 'bold',
          }}>
          Our Role
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nBodyText,
            color: COLORS.secondary,
            lineHeight: SIZES.nMinimulLineheight,
            marginTop: SIZES.height / 100,
          }}>
          {Roles}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nBodyText,
            marginTop: SIZES.height / 60,
            fontWeight: 'bold',
          }}>
          Tool Used
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: SIZES.nBodyText,
            color: COLORS.secondary,
            lineHeight: SIZES.nMinimulLineheight,
            marginTop: SIZES.height / 100,
          }}>
          {ToolUsed}
        </Text>
      </View>
      <PrimaryButton
        activeOpacity={0.8}
        style={{
          marginLeft: '5%',
          marginTop: 10,
          width: SIZES.width / 2,
          marginBottom: 10,
        }}
        onPress={() => Linking.openURL(URL)}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: SIZES.nBodyText,
                fontFamily: 'DMSans-Regular',
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
              View Live Demo
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
    </ScrollView>
  );
};
export default ProjectDetails;
