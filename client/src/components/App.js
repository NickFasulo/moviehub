import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          <MainRouter />
        </React.Suspense>
      </Router>
    </Provider>
  );
}

export default App;
