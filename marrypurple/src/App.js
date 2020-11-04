import React from 'react';
import { Route } from 'react-router-dom';
import GramPage from './pages/GramPage';
import BadBoardPage from './pages/BadBoardPage';
import FaqPage from './pages/FaqPage';

const App = () => {
  return (
    <>
      <Route path="/" exact/>
      <Route component={GramPage} path="/enter_gram"/>
      <Route component={BadBoardPage} path="/notice_bad"/>
      <Route component={FaqPage} path="/notice_faq"/>
    </>
  )
}

export default App;
