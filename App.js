import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/StackNavigator";

import DrawerNavigator from './src/DrawerNavigator'

export default App = () => {
  return(
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

