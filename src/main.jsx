import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading..</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
