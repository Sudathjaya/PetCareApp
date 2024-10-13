import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const images = [
  require('../../../assets/img/vet.png'),
  require('../../../assets/img/vet.png'),
  require('../../../assets/img/vet.png')
];

const PetGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = (image) => (
    <FastImage source={image} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Bella's Gallery</Text>
      </View>

      <Carousel
        ref={carouselRef}
        width={screenWidth - 35}
        height={200}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => renderItem(item)}
        pagingEnabled={true}
      />

      <Text style={styles.caption}>{activeIndex + 1} of {images.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  titleContainer: {
    width: screenWidth - 40,
    alignSelf: 'flex-start',
    marginLeft: 20
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Fredoka-Bold',
  },
  image: {
    width: screenWidth - 40,
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 40,
  },
});

export default PetGallery;
