import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn =() => {
    if (username && password){
      navigation.navigate('Home');
    }else{
      alert('Please enter both username and password.')
    }
  }
  

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/Cook.jpg')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to Christoffel</Text>

      <TextInput
        style={styles.input}
        placeholder="Username" 
        value={username} 
        onChangeText={(text) => setUsername(text)} 
        autoCapitalize="none" 
      />

      <TextInput
        style={styles.input}
        placeholder="Password" 
        value={password} 
        onChangeText={(text) => setPassword(text)} 
        secureTextEntry 
        autoCapitalize="none" 
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#800080', 
  },
  logo: {
    width: 200, 
    height: 200, 
    alignSelf: 'center',
    marginBottom: 30, 
  },
  title: {
    fontSize: 28, 
    marginBottom: 20, 
    textAlign: 'center', 
    fontWeight: 'bold', 
  },
  input: {
    height: 40, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    marginBottom: 20, 
    paddingHorizontal: 10, 
    borderRadius: 5, 
    backgroundColor: '#fff', 
  },
  button: {
    marginTop: 10, 
    backgroundColor: '#000080', 
    paddingVertical: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default SignInScreen;
//OpenAI. (2024). SignInScreen Component in React Native. Available at: GitHub Repository or Your Project (Accessed: 2 October 2024)