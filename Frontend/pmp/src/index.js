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
    baseURL: "http://localhost:8080",
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  );
} 

var visitCount = localStorage.getItem("page_view");
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
export var count = visitCount;

root.render(
  <Provider store={store}>
    <App />
  </Provider>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

