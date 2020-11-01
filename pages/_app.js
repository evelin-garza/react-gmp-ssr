import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const store = configureStore();

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}
