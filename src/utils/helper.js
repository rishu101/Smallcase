import { Dimensions } from 'react-native';

export const widthPercentageToDP = width => {
  return (Dimensions.get("window").width * width) / 100;
};

export const heightPercentageToDP = height => {
  return (Dimensions.get("window").height * height) / 100;
};
