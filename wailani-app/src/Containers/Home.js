import React, { Fragment } from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import Slider from '../Components/Layout/Slider/Slider';
import Cards from '../Components/Layout/Cards/Cards';
import classes from './Home.module.css';

function Home() {
    return (
        <Fragment>
         <Toolbar/>
         <Slider/>
         <div className={classes.Cards}>
         <Cards/>
         </div>
        </Fragment>
    )
};

export default Home;