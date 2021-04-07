import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, Logo} from '../Styles/Screen';

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

const About = () => {
  const renderItem = ({item}) => (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Image source={item.Img} style={{height: 250}} />
      <Text>{item.id}</Text>
    </View>
  );

  return (
    <Screen>
      <FlatList
        data={AboutImgData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
      />
    </Screen>
  );
};

export default About;

const styles = StyleSheet.create({});
