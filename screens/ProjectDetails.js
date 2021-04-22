import React from 'react';
import {View, Text, Button, Image, Linking} from 'react-native';
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

    <Screen>
      <View style={{marginBottom: 24}}>
        <Image
          source={Img}
          resizeMode={'contain'}
          style={{width: '100%', height: 270, borderRadius: 10}}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {Title}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            color: COLORS.secondary,
            marginTop: 8,
          }}>
          {Description}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            marginTop: 16,
            fontWeight: 'bold',
          }}>
          Our Role
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            color: COLORS.secondary,
            marginTop: 8,
          }}>
          {Roles}
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            marginTop: 16,
            fontWeight: 'bold',
          }}>
          Tool Used
        </Text>
        <Text
          style={{
            fontFamily: 'DMSans-Regular',
            fontSize: 16,
            color: COLORS.secondary,
            marginTop: 8,
          }}>
          {ToolUsed}
        </Text>
      </View>
      <PrimaryButton
        activeOpacity={0.8}
        style={{marginTop: 10, width: 204, marginBottom: 10}}
        onPress={() => Linking.openURL(URL)}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 16,
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
                width: 20,
                height: 10,
                top: 2,
                tintColor: COLORS.white,
              }}
            />
          </View>
        </View>
      </PrimaryButton>
    </Screen>
  );
};
export default ProjectDetails;
