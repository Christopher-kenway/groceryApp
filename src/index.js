import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import { initialState } from './context/initialState';
import reducer from './context/reducer';
import { StateProvider } from './context/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
