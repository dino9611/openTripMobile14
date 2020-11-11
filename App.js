import 'react-native-gesture-handler'
import React from 'react';
// 45deg, #FE6B8B 30%, #FF8E53 90%
import {NavigationContainer} from '@react-navigation/native'
import AuthStackRoot from './src/navigation/AuthStackRoot'


const App= () => {



  return (
    <NavigationContainer>
      <AuthStackRoot/>
    </NavigationContainer>
  );
};



export default App;
