import React from 'react';
import { Route } from 'react-router-dom';
import GramPage from './pages/GramPage';
import BadBoardPage from './pages/BadBoardPage';
import FaqPage from './pages/FaqPage';
import WorkPage from './pages/WorkPage';

const App = () => {
  return (
    <>
      <Route path="/" exact/>
      <Route component={GramPage} path="/gram_main"/>
      <Route component={BadBoardPage} path="/board_bad"/>
      <Route component={FaqPage} path="/FAQ"/>
      <Route component={WorkPage} path="/work"/>
    </>
  )
}

export default App;
