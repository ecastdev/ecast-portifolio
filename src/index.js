import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { green, purple } from '@mui/material/colors';
// import App from './app2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(255, 136, 0)',
    },
    secondary: {
      main: 'rgb(255, 136, 0)',
    },
  },
});
root.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
       <App />

     </ThemeProvider>
    
    {/* below is app2 */}
    {/* <App/> */}
  </React.StrictMode>
);
reportWebVitals();
