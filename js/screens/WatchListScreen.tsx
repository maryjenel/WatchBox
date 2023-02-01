import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import watches from '../api/watches.json';
import WatchListItem from '../components/WatchListItem';
import {NavigatorParamList, Routes} from '../navigation/Routes';
import {COLORS} from '../theme/colors';
import {Availability, Item, SortType, Watch} from '../types/types';
import {
  filterAvailability,
  getImageUrl,
  screenWidth,
  sortWatches,
} from '../utils/utils';

type NavigationProp = Pick<
  NativeStackNavigationProp<NavigatorParamList, Routes.WATCH_LIST_SCREEN>,
  'navigate'
>;
const Separator = () => <View style={styles.separator} />;

const WatchListScreen = () => {
  const allProducts: Array<Watch> = Object.values(watches.allProducts);
  const filteredWatches = filterAvailability(
    allProducts,
    Availability.comingSoon,
  );
  const sortedWatches = sortWatches(SortType.ascending, filteredWatches);

  const navigation = useNavigation<NavigationProp>();

  const navigateToWatchDetail = (item: Watch) => {
    navigation.navigate(Routes.WATCH_DETAIL, {watch: item});
  };
  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatList}
        data={sortedWatches}
        ItemSeparatorComponent={Separator}
        renderItem={(watch: Item) => {
          const {item} = watch;
          const {name, sort, brand, family, ref, price, year, boxpaper} = item;
          const imageUrl = getImageUrl(item.image.url);
          return (
            <WatchListItem
              onPress={() => navigateToWatchDetail(item)}
              brand={brand}
              imageUrl={imageUrl}
              name={name}
              family={family}
              watchRef={ref}
              year={year}
              price={price.sale}
              day={sort.day}
              boxpaper={boxpaper}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

interface Styles {
  separator: ViewStyle;
  flatList: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  separator: {
    backgroundColor: COLORS.lightGray,
    width: screenWidth,
    height: 1,
    marginVertical: 10,
  },
  flatList: {backgroundColor: COLORS.white},
});

export default WatchListScreen;
