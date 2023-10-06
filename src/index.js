import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';
// import { store } from './redux/store';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/CarRental">
    {/* <PersistGate loading={null} persistor={persistor}> */}
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
    {/* </Provider> */}
    {/* </PersistGate> */}
  </BrowserRouter>
);
