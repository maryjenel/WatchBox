import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {NavigatorParamList, Routes} from '../navigation/Routes';
import {COLORS} from '../theme/colors';
import {ALIGN_ITEMS_CENTER, FLEX_FILL} from '../theme/common';
import {spacing} from '../theme/spacing';
import {getImageUrl, screenWidth} from '../utils/utils';

const WatchDetailScreen = ({
  route,
}: StackScreenProps<NavigatorParamList, Routes.WATCH_DETAIL>) => {
  const {watch} = route.params;
  const {name} = watch;

  const [activeSlide, setActiveSlide] = React.useState(0);
  const markdownStyles = {
    text: styles.name,
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Carousel
        data={watch.images}
        renderItem={({item}: {item: Array<string>}) => {
          return (
            <Image style={styles.image} source={{uri: getImageUrl(item[0])}} />
          );
        }}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.9}
        onSnapToItem={(index: number) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={watch.images.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <Text style={styles.brand}>{watch.brand.toUpperCase()}</Text>
      <Markdown style={markdownStyles}>{name}</Markdown>
      <Text style={styles.skuRef}>SKU#{watch.sku}</Text>
      <Text style={styles.skuRef}>
        ${Number(watch.price.sale).toLocaleString('en-US')}
      </Text>
      <Text style={styles.year}>{watch.year}</Text>
    </ScrollView>
  );
};

interface Styles {
  separator: ViewStyle;
  image: ImageStyle;
  container: ViewStyle;
  brand: TextStyle;
  name: TextStyle;
  skuRef: TextStyle;
  year: TextStyle;
  dotStyle: ViewStyle;
  inactiveDotStyle: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  container: {
    ...FLEX_FILL,
    ...ALIGN_ITEMS_CENTER,
    backgroundColor: COLORS.white,
    paddingBottom: spacing[4],
  },
  inactiveDotStyle: {
    backgroundColor: COLORS.lightGray,
  },
  skuRef: {
    paddingBottom: spacing[2],
    color: COLORS.darkGray,
    fontWeight: '500',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: spacing[2],
    backgroundColor: COLORS.darkGray,
  },
  year: {
    fontWeight: '700',
  },
  brand: {fontWeight: '700'},
  name: {textAlign: 'center'},
  image: {height: '80%', width: '100%', borderRadius: 10},
  separator: {
    backgroundColor: COLORS.lightGray,
    width: screenWidth,
    height: 1,
    marginVertical: spacing[3],
  },
});

export default WatchDetailScreen;
