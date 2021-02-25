import React, { Fragment } from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import Slider from '../Components/Layout/Slider/Slider';
import Cards from '../Components/Layout/Cards/Cards';
import classes from './Home.module.css';
import {useHistory} from 'react-router-dom';


function Home(props) {
    const history = useHistory();
    const productRedirect = () => {
        history.push('/products/:id')
    }
    
    return (
        <Fragment>
         <Toolbar/>
         <Slider/>
         <div className={classes.Cards}>
         <Cards clicked={productRedirect}/>
         </div>
        </Fragment>
    )
};

export default Home;