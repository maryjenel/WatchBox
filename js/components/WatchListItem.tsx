import * as React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import {COLORS} from '../theme/colors';
import {ALIGN_ITEMS_CENTER, CONTAINER, FLEX_FILL, TITLE} from '../theme/common';
import {FontSize} from '../theme/font';
import {spacing} from '../theme/spacing';
import {screenHeight, screenWidth} from '../utils/utils';

interface Props {
  imageUrl: string;
  name: string;
  day: string;
  brand: string;
  family: string;
  watchRef: string;
  price: string;
  year: string;
  boxpaper: string;
  onPress: Function;
}

const WatchListItem = ({
  brand,
  imageUrl,
  family,
  watchRef,
  price,
  year,
  boxpaper,
  onPress,
}: Props) => {
  const markdownStyles = {
    text: styles.brand,
  };
  return (
    <TouchableOpacity style={styles.watchContainer} onPress={() => onPress()}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.brand}>{brand.toUpperCase()}</Text>
      <Text style={styles.brand}>{`${family}, ${watchRef}`}</Text>
      <View style={styles.separator} />
      <Text style={styles.brand}>${Number(price).toLocaleString('en-US')}</Text>
      <Markdown style={markdownStyles}>{boxpaper}</Markdown>
      <Text style={styles.brand}>{year}</Text>
    </TouchableOpacity>
  );
};

interface Styles {
  watchContainer: ViewStyle;
  image: ImageStyle;
  name: ViewStyle;
  brand: TextStyle;
  separator: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  image: {height: screenHeight * 0.3, width: screenWidth * 0.5},
  separator: {
    backgroundColor: COLORS.lightGray,
    width: spacing[3],
    height: 1,
    marginVertical: spacing[2],
  },
  name: {
    ...TITLE,
    fontSize: FontSize.M,
  },
  watchContainer: {
    ...ALIGN_ITEMS_CENTER,
    ...CONTAINER,
    ...FLEX_FILL,
  },
  brand: {
    fontSize: FontSize.S,
    paddingBottom: spacing[2],
  },
});

export default WatchListItem;
