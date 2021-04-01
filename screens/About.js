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
    Img: Image.about_1,
  },
  {
    id: '2',
    Img: Image.about_2,
  },
  {id: '3', Img: Image.about_3},
  {
    id: '4',
    Img: Image.about_4,
  },
];

const About = () => {
  const RenderImageList = () => {
    // <Animated.ScrollView
    //   horizontal
    //   pagingEnabled
    //   scrollEventThrottle={16}
    //   snapToAlignment="center"
    //   showsHorizontalScrollIndicator={false}
    //   // onScroll
    // ></Animated.ScrollView>;
    // return (
    //   <View>
    //     <FlatList
    //       data={AboutImgData}
    //       keyExtractor={item => item.id}
    //       horizontal
    //       scrollEnabled
    //       snapToAlignment="center"
    //       scrollEventThrottle={16}
    //       showsHorizontalScrollIndicator={false}
    //       renderItem={({item}) => (
    //         <Image
    //           source={item.Img}
    //           style={{height: 200, width: 200}}
    //           resizeMode="contain"
    //         />
    //       )}
    //     />
    //   </View>
    // );
  };

  return <Screen>{RenderImageList()}</Screen>;
};

export default About;

const styles = StyleSheet.create({});
