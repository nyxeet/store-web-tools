import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
