import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './store';

import { ProductsPage } from './pages/ProductsPage';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App = (): JSX.Element => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Header />
      <ProductsPage />

      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);
