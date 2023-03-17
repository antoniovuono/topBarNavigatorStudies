import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Screen, Navigator} = createMaterialTopTabNavigator();

const components: React.FC = () => {
  return (
    <NavigationContainer>
        <Navigator>
        </Navigator>
    </NavigationContainer>
  );
}

export default components;