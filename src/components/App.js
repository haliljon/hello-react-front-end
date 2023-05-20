import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Greeting} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
