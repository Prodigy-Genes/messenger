import React from 'react';
import { HomeScreen } from './Screens/HomeScreen';
import { HomeTabs } from './Navigations/HomeTabs';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';





const App = () => {
  return(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  )
}
export default App;


