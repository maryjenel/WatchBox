import {ViewStyle} from 'react-native';
import {spacing} from './spacing';

export const FLEX_JCC: ViewStyle = {
  justifyContent: 'center',
};

export const FLEX_FILL: ViewStyle = {
  flex: 1,
};
export const FLEX_ROW: ViewStyle = {
  flexDirection: 'row',
};
export const ALIGN_ITEMS_CENTER: ViewStyle = {
  alignItems: 'center',
};

/**
 * container
 */
export const CONTAINER: ViewStyle = {
  ...FLEX_JCC,
  ...FLEX_FILL,
};

/**
 * title
 */

export const TITLE: ViewStyle = {
  marginBottom: spacing[3],
};
