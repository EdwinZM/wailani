import React, {Fragment} from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import {Route} from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toolbar/>
    </div>
  );
  <Fragment>
    <Route path='/products' component={Products}/>
    {/* The products component will have a cards component made of cards with the 
    products */}
    <Route path='/about' component={About}/>
    {/* About is a component with the description of Wailani */}
  </Fragment>
  

};

export default App;
