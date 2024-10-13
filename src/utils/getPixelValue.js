const { PixelRatio } = require("react-native");

export const getPixelValue = (value)=>{
const ptValue = PixelRatio.roundToNearestPixel(value / PixelRatio.get());
console.log('---ptValue---', value,ptValue);
return ptValue;
}
