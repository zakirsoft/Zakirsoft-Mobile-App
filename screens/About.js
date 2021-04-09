import React, {useState} from 'react';
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
  const scrollX = new Animated.Value(0);

  const renderItem = ({item}) => (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <Image source={item.Img} style={{height: 250}} resizeMode={'cover'} />
      <Text>{item.id}</Text>
    </View>
  );
  const renderFlatlist = () => {
    return (
      <View>
        <FlatList
          data={AboutImgData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          onScroll={}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
        />
      </View>
    );
  };
  const renderDots = () => {
    const [active, setActive] = useState(0);

    export const change = ({nativeEvent}) => {
      const slide = Math.ceil(
        nativeEvent.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== active) {
        setActive({active: slide});
      }
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {AboutImgData.map((i, k) => (
          <Text
            key={k}
            style={{
              color: active?.id == i.id ? COLORS.primary : '#C4D6FB',
              marginRight: 8,
            }}>
            ⬤
          </Text>
        ))}
      </View>
    );
  };

  return (
    <Screen>
      {renderFlatlist()}
      {renderDots()}
    </Screen>
  );
};

export default About;

const styles = StyleSheet.create({});
