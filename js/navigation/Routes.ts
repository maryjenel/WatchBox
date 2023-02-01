import {Watch} from '../types/types';

export enum Routes {
  WATCH_LIST_SCREEN = 'WatchListScreen',
  WATCH_DETAIL = 'WatchDetail',
}

export type NavigatorParamList = {
  [Routes.WATCH_DETAIL]: {watch: Watch};
  [Routes.WATCH_LIST_SCREEN]: undefined;
};
