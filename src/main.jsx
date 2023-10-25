import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokeknowApp } from './PokeknowApp';
import {Provider} from 'react-redux';
import { store } from './store/store'
import { NextUIProvider } from '@nextui-org/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <PokeknowApp />
      </Provider>
    </NextUIProvider>
   
  </React.StrictMode>
)
