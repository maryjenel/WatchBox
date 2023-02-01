export enum SortType {
  ascending = 'ascending',
  descending = 'descending',
}

export type Price = {
  type: string;
  list: string;
  lists: string;
  sale: string;
  sales: string;
  min: string;
  call: string;
};

type Badge = {
  soon: string;
  badge: string;
  pick: string;
  top: string;
  sale: string;
};

type Sort = {
  price: string;
  ats: string;
  day: string;
  rank: string;
  month: string;
  week: string;
  place: string;
};
enum Material {
  YellowGold = 'yellow-gold',
  WhiteGold = 'white-gold',
}
enum WatchYear {
  After2010 = 'after-2010',
  Between20012010 = '2001-2010',
}

enum Gender {
  mens = 'mens',
  female = 'female',
}
enum BandColor {
  gold = 'gold',
  silver = 'silver',
}
enum Complication {
  chronograph = 'chronograph',
  tachymeter = 'tachymeter',
}
export enum Availability {
  availableNow = 'available-now',
  comingSoon = 'coming-soon',
}
export type Filter = {
  warranty: string;
  caseSize: string;
  bandMaterial: keyof typeof Material | string;
  baseRefNum: string;
  material: keyof typeof Material | string;
  dialColor: string;
  WatchYear: keyof typeof WatchYear | string;
  manufacturedIn: string;
  style: string | Array<string>;
  gender: keyof typeof Gender | string;
  hoursMarkers: string;
  bandColor: keyof typeof BandColor | string;
  buckleType: string;
  caseBack: string;
  watchShape: string;
  waterResistance: string;
  movement: string;
  complication: Array<Complication | string> | string;
  braceletLength: string;
  productBadge: string;
  brand: string;
  brandFamily: string;
  boxPapersActual: string | Array<string>;
  availability: keyof typeof Availability | string;
  badgeText: string;
};

export type Watch = {
  online: string;
  image: {
    url: string;
    alt: string;
  };
  images: Array<Array<string>>;
  sku: string;
  prodid: string;
  type: string;
  brand: string;
  family: string;
  name: string;
  ref: string;
  year: string;
  boxpaper: string;
  boxpapers: string;
  qty: string;
  price: Price;
  badge: Badge;
  sort: Sort;
  filter: Filter;
};

export type Item = {
  index: number;
  item: Watch;
};
