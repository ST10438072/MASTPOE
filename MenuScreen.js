import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Sample data for cuisines and their menu items with added descriptions
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
    { id: '1', name: 'Chicken Salad', description: 'Fresh salad with grilled chicken slices', price: 50 },
    { id: '2', name: 'Crab Legs with Cheese', description: 'Grilled crab legs topped with melted cheese', price: 150 },
    { id: '3', name: 'Fried Tofu', description: 'Crispy tofu served with a savory dipping sauce', price: 70 },
    { id: '4', name: 'Samosas', description: 'Spicy stuffed pastries, perfect for a starter', price: 50 },
    { id: '5', name: 'Salad with Olives', description: 'Fresh greens with olives and a light dressing', price: 80 },
  ],
  mainCourse: [
    { id: '6', name: 'Burger', description: 'Juicy beef burger with house special sauce', price: 70 },
    { id: '7', name: 'Dagwood', description: 'Layered sandwich with meats, cheese, and veggies', price: 90 },
    { id: '8', name: 'Pizza', description: 'Classic pizza with mozzarella and basil', price: 100 },
    { id: '9', name: 'Steak', description: 'Tender grilled steak with garlic butter', price: 400 },
    { id: '10', name: 'Ribeye', description: 'Ribeye steak cooked to perfection', price: 200 },
    { id: '11', name: 'Wings', description: 'Spicy and crispy chicken wings', price: 150 },
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
    { id: '13', name: 'Ice Cream', description: 'Rich and creamy vanilla ice cream', price: 40 },
    { id: '14', name: 'Cake', description: 'Moist chocolate cake with layers of frosting', price: 95 },
    { id: '15', name: 'Cookies', description: 'Homemade cookies with chocolate chips', price: 30 },
    { id: '16', name: 'Sweets with Caramel', description: 'Assorted sweets drizzled with caramel', price: 100 },
  ],
};

const MenuScreen = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('Dessert'); // Default cuisine
  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); // New state for total price

  // Function to handle adding item to the order
  const handleAddToOrder = (price) => {
    setOrderCount(orderCount + 1);
    setTotalPrice(totalPrice + price); // Update total price when item is added
  };

  // Function to handle confirming the order
  const handleConfirmOrder = () => {
    alert(`Order confirmed! Total items: ${orderCount}, Total price: R${totalPrice.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Cuisine Buttons */}
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

      {/* Display Food Items based on selected cuisine */}
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

      {/* Order Count and Total Price Display */}
      <Text style={styles.orderSummary}>Items in Order: {orderCount}</Text>
      <Text style={styles.orderSummary}>Total Price: R{totalPrice.toFixed(2)}</Text>

      {/* Confirm Order Button */}
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
    backgroundColor: '#FF69B4',
    backgroundColor: '#F5F5DC',
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
    backgroundColor: '#ADD8E6',
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