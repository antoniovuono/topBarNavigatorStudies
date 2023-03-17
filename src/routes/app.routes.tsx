import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import FirstStep from '../Screens/Home/components/FirstStep';

const { Navigator, Group, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
        <Group>
            <Screen name="Home" component={Home} />
            <Screen name="FirstStep" component={FirstStep} />
        </Group>
    </Navigator>
  );
}

export default AppRoutes;