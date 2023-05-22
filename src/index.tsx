import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Добрый день!
// Хотел предупредить что в силу некоторых противоречий ТЗ
// и небольшого несоответсивия с ним jsonplaceholder некоторые фичи получились не очень чистыми по коду,
// например для того чтобы отображать пост с пользователем нужно одновременно запрашивать
// и пользователя, и сам пост, и тому подобное, поэтому прошу заранее простить :)
// Был бы рад фидбэку по данному заданию!

root.render(
  <Provider store={store}>
    <BrowserRouter basename='/test-task-mitro'>
      <App />
    </BrowserRouter>
  </Provider>
);