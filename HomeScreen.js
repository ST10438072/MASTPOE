import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView,} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  const [chefDishes, setChefDishes] = useState([
    {
      id: 1,
      name: "Chef's Special Pizza",
      description: "A delightful Pizza with fresh ingredients and house-made toppings.",
      weeklySpecials: {
        Monday: "Margherita Madness",
        Tuesday: "Tandoori Treat",
        Wednesday: "Wild Mushroom Feast",
        Thursday: "Truffle Bliss",
        Friday: "Four Cheese Friday",
        Saturday: "Sizzling Supreme",
        Sunday: "Sunday Special Surprise",
      },
    },
    {
      id: 2,
      name: "Combo Deals",
      description: "Grilled Tomahawk, Ribs, Lamb Chomps and Sides of choice.",
      weeklySpecials: {
        Monday: "Meat Lover's Monday",
        Tuesday: "Tuesday Trio",
        Wednesday: "Wacky Wings Wednesday",
        Thursday: "Thick-Cut Thursday",
        Friday: "Fried Feast Friday",
        Saturday: "Steakhouse Saturday",
        Sunday: "Slow-Roast Sunday",
      },
    },
  ]);

  const [newDish, setNewDish] = useState({ name: '', description: '', weeklySpecials: {} });
  const [selectedDishId, setSelectedDishId] = useState(chefDishes[0]?.id || null);

  const getCurrentDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  const addDish = () => {
    if (newDish.name && newDish.description) {
      const updatedDishes = [...chefDishes, { id: chefDishes.length + 1, ...newDish }];
      setChefDishes(updatedDishes);
      setNewDish({ name: '', description: '', weeklySpecials: {} });
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

          <Text style={styles.subtitle}>Today's Special</Text>
          <Text style={styles.specialText}>
            {selectedDish.weeklySpecials[currentDay] || "No special available for today."}
          </Text>

          <Text style={styles.subtitle}>All Specials</Text>
          <ScrollView style={styles.specialsList}>
            {Object.entries(selectedDish.weeklySpecials).map(([day, special]) => (
              <Text key={day} style={styles.daySpecial}>
                <Text style={styles.day}>{day}:</Text> {special}
              </Text>
            ))}
          </ScrollView>

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
    backgroundColor: '#ADD8E6',
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
    fontSize: 16,
    color: '#800080',
    textAlign: 'center',
  },
  specialText: {
    fontSize: 18,
    color: '#FF4500',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  specialsList: {
    maxHeight: 120,
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  daySpecial: {
    fontSize: 16,
    marginVertical: 4,
  },
  day: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
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
    backgroundColor: '#000080',
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
