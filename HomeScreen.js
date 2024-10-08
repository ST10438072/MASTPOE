import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  const [chefDishes, setChefDishes] = useState([
    {
      id: 1,
      name: "Chef's Special Pizza",
      description: "A delightful Pizza with fresh ingredients and house-made toppings.",
    },
    {
      id: 2,
      name: "Combo Deals",
      description: "Grilled Tomahawk, Ribs, Lamb Chomps and Sides of choice.",
    },
  ]);

  const [newDish, setNewDish] = useState({ name: '', description: '' });
  const [selectedDishId, setSelectedDishId] = useState(chefDishes[0]?.id || null);

  const addDish = () => {
    if (newDish.name && newDish.description) {
      const updatedDishes = [...chefDishes, { id: chefDishes.length + 1, ...newDish }];
      setChefDishes(updatedDishes);
      setNewDish({ name: '', description: '' });
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  const removeDish = (id) => {
    const updatedDishes = chefDishes.filter((dish) => dish.id !== id);
    setChefDishes(updatedDishes);
    if (selectedDishId === id) setSelectedDishId(null);
  };

  const selectedDish = chefDishes.find(dish => dish.id === selectedDishId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Restaurant!</Text>
      <Text style={styles.subtitle}>Select a Dish</Text>

      <Picker
        selectedValue={selectedDishId}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedDishId(itemValue)}
      >
        {chefDishes.map((dish) => (
          <Picker.Item key={dish.id} label={dish.name} value={dish.id} />
        ))}
      </Picker>

      {selectedDish && (
        <View style={styles.dishContainer}>
          <Text style={styles.dishTitle}>{selectedDish.name}</Text>
          <Text style={styles.dishDescription}>{selectedDish.description}</Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => removeDish(selectedDish.id)}>
            <Text style={styles.removeButtonText}>Remove Dish</Text>
          </TouchableOpacity>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={newDish.name}
        onChangeText={(text) => setNewDish({ ...newDish, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newDish.description}
        onChangeText={(text) => setNewDish({ ...newDish, description: text })}
      />

      <TouchableOpacity style={styles.addButton} onPress={addDish}>
        <Text style={styles.addButtonText}>Add Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate('Menu', { dishes: chefDishes })}
      >
        <Text style={styles.orderButtonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:  '#FF69B4',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginBottom: 15,
    borderRadius: 5,
  },
  dishContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  dishTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dishDescription: {
    fontSize: 14,
    color: '#800080',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#ADD8E6',
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderButton: {
    marginTop: 20,
    backgroundColor: '#ADD8E6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
//OpenAI. (2024). HomeScreen Component in React Native. Available at: GitHub Repository or Your Project (Accessed: 2 October 2024).\