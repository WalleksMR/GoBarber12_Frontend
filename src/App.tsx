import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />}>
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
