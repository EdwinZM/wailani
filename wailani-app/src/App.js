import React, {Fragment} from 'react';
import Home from './Containers/Home';
import Products from './Containers/Products';
import About from './Containers/About';
import ProductsId from './Containers/ProductId';
import {Route, Switch, Redirect} from 'react-router';
import './App.css';

function App() {
  return (
    <Fragment>
    <Switch>
     <Route exact path='/products' component={Products}/>
     <Route  path='/products/:id' component={ProductsId}/>
      <Route path='/about' component={About}/>
     <Route path='/' exact component={Home}/>
     <Redirect to='/'/>
    </Switch>

    </Fragment>
  );

};

export default App;
