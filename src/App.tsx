import { ThemeProvider } from 'styled-components';

import { ProductsPage } from './pages/ProductsPage';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Header />
    <ProductsPage />

    <GlobalStyle />
  </ThemeProvider>
);
