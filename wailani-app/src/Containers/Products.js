import React from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import LinearCard from '../Components/Layout/Cards/LinearCard/LinearCard';
import classes from './Products.module.css';
import {useHistory} from 'react-router-dom';

function Products() {
    const history = useHistory();
    const productRedirect = () => {
        history.push('/products/:id')
    }
    return (
        <div className={classes.Products}>
            <Toolbar/>
            <LinearCard title={'Title'} clicked={productRedirect}>Nulla sunt laboris laboris consectetur. </LinearCard>
        </div>
    )
};

export default Products;