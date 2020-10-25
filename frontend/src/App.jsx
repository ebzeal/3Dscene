import React from 'react';
import Login from './Components/Containers/Login/Login';

import './App.scss';

const App = () => {
  return (
    <div data-test="appComponent">
      {/* <Routes /> */}
      <Login />
    </div>
  );
};

export default App;
