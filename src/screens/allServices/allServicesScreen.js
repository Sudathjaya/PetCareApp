import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { black } from '../../enums/colors';

const AllServiceScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('Food'); // Default category

  // Sample product data for each category
  const allProducts = {
    Food: [
      { id: '1', name: 'Josera Mini Deluxe', weight: '900g', price: 'Rs 2900.00', img: 'https://example.com/image1.jpg' },
      { id: '2', name: 'Pedigree Chicken & Vege', weight: '3kg', price: 'Rs 5390.00', img: 'https://example.com/image2.jpg', discount: '-16%' },
      { id: '3', name: 'BlackHawk Puppy Lamb &', weight: '20kg', price: 'Rs 36500.00', img: 'https://example.com/image3.jpg' },
      { id: '4', name: 'Royal Canin Labrador P', weight: '3kg', price: 'Rs 11,450.00', img: 'https://example.com/image4.jpg' },
    ],
    'Vet Items': [
      { id: '1', name: 'Vaccine Kit', weight: '1 unit', price: 'Rs 1500.00', img: 'https://example.com/vet1.jpg' },
      { id: '2', name: 'Deworming Tablets', weight: '10 tablets', price: 'Rs 250.00', img: 'https://example.com/vet2.jpg' },
    ],
    Accessories: [
      { id: '1', name: 'Dog Collar', weight: '1 unit', price: 'Rs 800.00', img: 'https://example.com/accessory1.jpg' },
      { id: '2', name: 'Leash', weight: '1 unit', price: 'Rs 1000.00', img: 'https://example.com/accessory2.jpg' },
    ],
    Breeding: [
      { id: '1', name: 'Breeding Service', weight: '1 session', price: 'Rs 20,000.00', img: 'https://example.com/breeding1.jpg' },
    ],
  };

  // Filter products based on the selected category
  const filteredProducts = allProducts[activeCategory];

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      {item.discount && <Text style={styles.discountLabel}>{item.discount}</Text>}
      <Image source={{ uri: item.img }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productWeight}>{item.weight}</Text>
      <TouchableOpacity style={styles.cartButton}>
        <Icon name="add-shopping-cart" size={20} color="#fff" />
        <Text style={styles.cartButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
    // The product list will automatically update based on this category
  };

  const navigateTo = (route) =>{
    navigation.navigate(route)
    // NavigationScreens.FOOD_DETAILS
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={25} color="#aaa" />
        <TextInput placeholder="Search keywords.." style={styles.searchInput} />
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <TouchableOpacity
          style={[styles.categoryButton, activeCategory === 'Food' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Food')}
        >
          <Icon name="restaurant-menu" size={30} color={activeCategory === 'Food' ? '#48C774' : '#aaa'} />
          <Text style={[styles.categoryText, activeCategory === 'Food' && styles.activeCategoryText]}>Food</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, activeCategory === 'Vet Items' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Vet Items')}
        >
          <Icon name="medical-services" size={30} color={activeCategory === 'Vet Items' ? '#48C774' : '#aaa'} />
          <Text style={[styles.categoryText, activeCategory === 'Vet Items' && styles.activeCategoryText]}>Vet Items</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, activeCategory === 'Accessories' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Accessories')}
        >
          <Icon name="local-grocery-store" size={30} color={activeCategory === 'Accessories' ? '#48C774' : '#aaa'} />
          <Text style={[styles.categoryText, activeCategory === 'Accessories' && styles.activeCategoryText]}>Accessories</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, activeCategory === 'Breeding' && styles.activeCategory]}
          onPress={() => handleCategoryPress('Breeding')}
        >
          <Icon name="devices-other" size={30} color={activeCategory === 'Breeding' ? '#48C774' : '#aaa'} />
          <Text style={[styles.categoryText, activeCategory === 'Breeding' && styles.activeCategoryText]}>Breeding</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recommendedContainer}>
        <Text style={styles.recommendedTitle}>Recommended {activeCategory}</Text>
        <TouchableOpacity style={styles.checkRetailButton}>
          <Text style={styles.checkRetailButtonText}>Check Retail Stores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginTop: 60,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: black
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: 'center',
    padding: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: '#A6A6A6',
    fontFamily: 'Fredoka-Regular',
  },
  activeCategory: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  activeCategoryText: {
    color: '#48C774',
    fontFamily: 'Fredoka-Regular',
  },
  recommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recommendedTitle: {
    fontSize: 18,
    fontFamily: 'Fredoka-Bold',
    color: '#000000'
  },
  checkRetailButton: {
    backgroundColor: '#48C774',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  checkRetailButtonText: {
    fontSize: 14,
    fontFamily: 'Fredoka-Medium',
    color: '#FFF'
  },
  productGrid: {
    paddingBottom: 100,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  productPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  productWeight: {
    fontSize: 12,
    color: '#aaa',
  },
  discountLabel: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#f00',
    color: '#fff',
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#48C774',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  cartButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
});

export default AllServiceScreen;