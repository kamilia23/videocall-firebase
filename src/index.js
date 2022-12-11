import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from "react-redux";
import { userReducer } from "./store/reducer";

export const store = createStore(userReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  //</React.StrictMode>,
 
);

//reportWebVitals();
