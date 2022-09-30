import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem('tokens') != null ? JSON.parse(localStorage.getItem('tokens')).jwtToken : ''
//console.log(JSON.parse(localStorage.getItem('tokens')).)
export const instance = () => {
  const token = localStorage.getItem('tokens') != null ? JSON.parse(localStorage.getItem('tokens')).jwtToken : ''
  return axios.create({
    baseURL: "http://localhost:9090",
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  );
} 
root.render(
  <Provider store={store}>
    <App />
  </Provider>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

