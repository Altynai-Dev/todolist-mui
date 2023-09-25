import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';//самый главный менеджер складами

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);
//стор - это самое главное хранилище
//слайс-это кусочек хранилища
// configureStore - функция для создания стора