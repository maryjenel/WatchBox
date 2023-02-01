import {Availability, SortType, Watch} from '../types/types';
import watches from '../api/watches.json';
import {Dimensions} from 'react-native';

export const filterAvailability = (
  watchesArray: Array<Watch>,
  availability: Availability,
) => {
  const filteredWatches = watchesArray.filter(watch => {
    return watch.filter.availability !== availability;
  });
  return filteredWatches;
};

export const sortWatches = (sortType: SortType, watchesArray: Array<Watch>) => {
  if (sortType === SortType.ascending) {
    return watchesArray.sort((a, b) => {
      return Number(a.sort.day) - Number(b.sort.day);
    });
  }
  return watchesArray.sort((a, b) => {
    return Number(b.sort.day) - Number(a.sort.day);
  });
};
export const getImageUrl = (endpoint: string): string => {
  return watches.imgRoot + endpoint;
};
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
