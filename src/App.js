import React from 'react';
import cakeContainer from './components/cake/cakeContainer' 
import store from './components/redux/store'
import {Provider } from 'react-redux'

function App() {
  return (
    <Provider>
    <div className="App">
    <cakeContainer />
    </div>
    </Provider>
  );
}

export default App;
