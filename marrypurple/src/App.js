import React from 'react';
import { Route } from 'react-router-dom';
import GramMainPage from './pages/GramMainPage';
import GramWritePage from './pages/GramWritePage';
import GramReadPage from './pages/GramReadPage';
import BadBoardPage from './pages/BadBoardPage';
import FaqPage from './pages/FaqPage';
import WorkPage from './pages/WorkPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MarryLoginPage from './pages/MarryLoginPage';
import RegistPage from './pages/RegistPage';
import FindPwPage from './pages/FindPwPage';
import ChangePwPage from './pages/ChangePwPage';
import MatchingPage from './pages/MatchingPage'
import BackUserPage from './pages/BackUserPage';
import ChatPage from './pages/ChatPage'
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact/>
      <Route component={LoginPage} path="/login"/>
      <Route component={MarryLoginPage} path="/marrylogin"/>
      <Route component={RegistPage} path="/regist"/>
      <Route component={FindPwPage} path="/findPw"/>
      <Route component={ChangePwPage} path="/changePw"/>
      <Route component={GramMainPage} path="/gram_main"/>
      <Route component={GramWritePage} path="/gram_write"/>
      <Route component={GramReadPage} path="/gram_post/:gram_id"/>
      <Route component={BadBoardPage} path="/board_bad"/>
      <Route component={FaqPage} path="/FAQ"/>
      <Route component={WorkPage} path="/work"/>
      <Route component={MatchingPage} path="/match"/>
      <Route component={BackUserPage} path="/back"/>
      <Route component={ChatPage} path="/chat"/>
      <Route component={PaymentPage} path="/Payment"/>
      <Route component={ProfilePage} path="/Profile"/>
    </>
  )
}

export default App;
