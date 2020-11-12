import 'react-native-gesture-handler'
import React from 'react';
// 45deg, #FE6B8B 30%, #FF8E53 90%
import AppMain from './Appmain'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import Reduxthunk from 'redux-thunk'
import Reducers from './src/redux/reducers'

const App= () => {

  const store=createStore(Reducers,{},applyMiddleware(Reduxthunk))
  
  

  return (
    <Provider store={store}>
      <AppMain/>
    </Provider>
  );
};



export default App;
