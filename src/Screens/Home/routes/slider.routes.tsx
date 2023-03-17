import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';


const { Navigator, Screen } = createMaterialTopTabNavigator();


const SliderNavigator: React.FC = () => {
  return (
    <Navigator initialRouteName='FirstStep' screenOptions={{
        tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold', color: 'black'},
        tabBarItemStyle: { backgroundColor: 'gray', borderRadius: 35, marginBottom: 10, marginLeft: 2},
        tabBarStyle: { backgroundColor: 'transparent'},
        tabBarIndicator: () => null,

    }}>
        <Screen name='FirstStep' component={FirstStep}/>
        <Screen name='SecondStep' component={SecondStep}/>
        <Screen name='ThirdStep' component={ThirdStep}/>
    </Navigator>
  );
}

export default SliderNavigator;