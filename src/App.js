import React from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import { Provider } from  'react-redux';
import store from './state_management/store';



function App() {



  return (
      <Provider store={store}>
            <div className="App">
                <MainComponent/>
            </div>
      </Provider>
  );
}

export default App;
