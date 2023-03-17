import React from 'react';
import { View } from 'react-native';
import FirstStep from './components/FirstStep';
import SliderNavigator from './routes/slider.routes';

import { ButtonSwipe, Container, NavigatorContent, SetpsContainer, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <NavigatorContent>
        <SliderNavigator />
      </NavigatorContent>
    </Container>
  );
}

export default Home;