export const Dimensions = {
  height: window.innerHeight,
  width: window.innerWidth,
  widthPercentage: (percentage) => window.innerWidth * (percentage / 100),
  heightPercentage: (percentage) => window.innerHeight * (percentage / 100)
};
