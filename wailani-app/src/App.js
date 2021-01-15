import React, {Fragment} from 'react';
import Home from './Containers/Home';
import Products from './Containers/Products';
import About from './Containers/About';
import {Route, Switch, Redirect} from 'react-router';
import './App.css';

function App() {
  return (
    <Fragment>
    <Switch>
     <Route path='/products' component={Products}/>
    {/* The products component will have a cards component made of cards with the 
    products */}
      <Route path='/about' component={About}/>
    {/* About is a component with the description of Wailani */}
     <Route path='/' exact component={Home}/>
     <Redirect to='/'/>
    </Switch>

    </Fragment>
  );

};

export default App;
