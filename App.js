import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';  // Import the Sign-In screen
import HomeScreen from './HomeScreen';      // Import your main screen (or app screen)
import MenuScreen from './MenuScreen';  

const Stack = createNativeStackNavigator();

 function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Digital Menu' }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{title:'Menu'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;