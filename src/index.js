import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Cycle } from "./components/cycle"

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Cycle />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

