import 'bootstrap-css-only';
import Conversor from './components/Conversor';

import Header from './components/Header';

import {Provider} from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Conversor />
      </div>
    </Provider>
  );
}

export default App;
