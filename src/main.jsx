import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokeknowApp } from './PokeknowApp';
import {Provider} from 'react-redux';
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokeknowApp />
    </Provider>
  </React.StrictMode>
)
