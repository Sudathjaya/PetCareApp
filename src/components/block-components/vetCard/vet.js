import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import VetCard from './vetCard';  // Your VetCard component

const { width: screenWidth } = Dimensions.get('window');

const vets = [
  {
    name: "Dr. Nambuvan",
    degree: "Bachelor of veterinary science",
    rating: 5.0,
    reviews: 100,
    distance: 2.5,
    price: 100,
    tag: "Roudy",
    image: require('../../../assets/img/vet.png'),
  },
  {
    name: "Dr. Smith",
    degree: "Master of veterinary medicine",
    rating: 4.8,
    reviews: 85,
    distance: 3.1,
    price: 90,
    tag: "Friendly",
    image: require('../../../assets/img/vet.png'),
  },
  {
    name: "Dr. Linda",
    degree: "Veterinary Surgeon",
    rating: 4.9,
    reviews: 120,
    distance: 1.9,
    price: 110,
    tag: "Experienced",
    image: require('../../../assets/img/vet.png'),
  }
];

const VetCarousel = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const renderItem = ({ item, navigation }) => {
    return <VetCard vet={item} navigation={navigation} />;
  };

  const handleTouchStart = () => {
    console.log('0000');
    setAutoPlay(false); // Stop auto-scroll
  };

  const handleTouchEnd = () => {
    setAutoPlay(true);
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={vets}
        renderItem={renderItem}
        width={screenWidth * 0.9}
        height={180}
        onSnapToItem={(index) => setCurrentIndex(index)}
        loop={true}
        autoPlay={autoPlay}
        scrollAnimationDuration={4000}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

export default VetCarousel;
