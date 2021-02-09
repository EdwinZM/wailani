import React from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import LinearCard from '../Components/Layout/Cards/LinearCard/LinearCard';
import classes from './Products.module.css';

function Products() {
    return (
        <div className={classes.Products}>
            <Toolbar/>
            <LinearCard title={'Title'}>Nulla sunt laboris laboris consectetur. </LinearCard>
        </div>
    )
};

export default Products;