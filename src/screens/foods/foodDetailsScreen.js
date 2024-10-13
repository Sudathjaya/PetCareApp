import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FoodDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: 'https://example.com/josi-dog-master-mix.jpg' }} // Replace with the actual image URL
        style={styles.productImage}
      />

      {/* Product Info */}
      <View style={styles.productDetailsContainer}>
        <Text style={styles.productTitle}>Josi Dog Master Mix - 900g</Text>
        <Text style={styles.productBrand}>Brand: Josera</Text>
        <Text style={styles.productPrice}>Rs 1500.00</Text>

        {/* Rating and Reviews */}
        <View style={styles.ratingContainer}>
          <Icon name="star" size={18} color="#FFD700" />
          <Text style={styles.ratingText}>4.5</Text>
          <Text style={styles.reviewText}>(89 reviews)</Text>
        </View>

        {/* Product Description */}
        <Text style={styles.productDescription}>
          Brighten up your pet’s bowl with the colourful corn and beetroot kibble in JosiDog MasterMix! Crunchy and flavourful variety for adult dogs of all sizes, plus a wide range of important nutrients included. No added soya, sugar or milk products. Free from artificial colourings, flavourings and preservatives.
        </Text>

        {/* Recommended For */}
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedLabel}>Recommended For:</Text>
          <TouchableOpacity style={styles.recommendedTag}>
            <Text style={styles.recommendedTagText}>Roudy</Text>
          </TouchableOpacity>
        </View>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Icon name="remove" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Icon name="add" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton}>
          <Icon name="shopping-cart" size={20} color="#fff" />
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  productDetailsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productBrand: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#888',
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  recommendedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  recommendedLabel: {
    fontSize: 16,
    marginRight: 5,
  },
  recommendedTag: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  recommendedTagText: {
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#48C774',
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default FoodDetailsScreen;
