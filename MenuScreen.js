import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const menuData = {
  Starter: [
    { id: '1', name: 'Ceaser Salad', price: 50 },
    { id: '2', name: 'Chicken Stripes', price: 35 },
    { id: '3', name: 'Cheesy Garlic Prawns', price: 70 },
    { id: '4', name: 'Chicken Quesadilla', price: 50 },
    { id: '5', name: 'Garden Salad', price: 80 },
  ],
  MainCourse: [
    { id: '6', name: 'Burger', price: 70 },
    { id: '7', name: 'Lambchops', price: 90 },
    { id: '8', name: 'Tamahawk', price: 100 },
    { id: '9', name: 'Pizza', price: 400 },
    { id: '10', name: 'Ribeye', price: 200 },
    { id: '11', name: 'Wings', price: 150 },
    { id: '12', name: 'Seafood', price: 400 },
  ],
  Sides: [
    {id: '13', name: 'Fries', price: 20},
    {id: '14', name: 'Pumpkin', price: 20},
    {id: '15', name: 'Spinach', price: 20},
    {id: '16', name: 'Mash', price: 20},
    {id: '17', name: 'Butternut', price: 20},
  ],
  Dessert: [
    { id: '23', name: 'Ice Cream', price: 40 },
    { id: '24', name: 'Cake', price: 95 },
    { id: '25', name: 'Cookies', price: 30 },
    { id: '26', name: 'Sweets with Caramel', price: 100 },
    { id: '27', name: 'MilkShake', price: 45 },
  ],
};

const MenuScreen = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('Dessert'); 
  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); 

  const handleAddToOrder = (price) => {
    setOrderCount(orderCount + 1);
    setTotalPrice(totalPrice + price); 
  };

  const handleConfirmOrder = () => {
    alert(`Order confirmed! Total items: ${orderCount}, Total price: R${totalPrice.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <View style={styles.cuisineContainer}>
        {Object.keys(menuData).map((cuisine) => (
          <TouchableOpacity
            key={cuisine}
            style={styles.cuisineButton}
            onPress={() => setSelectedCuisine(cuisine)}
          >
            <Text style={styles.cuisineText}>{cuisine}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>{selectedCuisine} Dishes</Text>
      <FlatList
        data={menuData[selectedCuisine]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name} - R{item.price}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
            <Button title="Add to Order" onPress={() => handleAddToOrder(item.price)} />
          </View>
        )}
      />

      <Text style={styles.orderSummary}>Items in Order: {orderCount}</Text>
      <Text style={styles.orderSummary}>Total Price: R{totalPrice.toFixed(2)}</Text>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#800080',

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cuisineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cuisineButton: {
    padding: 10,
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
  },
  cuisineText: {
    color: '#000000',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  menuItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  orderSummary: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#000080',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
//OpenAI. (2024). MenuScreen Component in React Native. Available at: GitHub Repository or Your Project (Accessed: 2 October 2024).\