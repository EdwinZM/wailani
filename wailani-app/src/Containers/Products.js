import React from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import LinearCard from '../Components/Layout/Cards/LinearCard/LinearCard';
import classes from './Products.module.css';

function Products() {
    return (
        <div className={classes.Products}>
            <Toolbar/>
            <LinearCard title={'Title'}>Nulla sunt laboris laboris consectetur. Incididunt mollit enim dolor sit ad consectetur tempor consequat mollit. Nostrud anim est officia amet et aliqua veniam consequat Lorem id duis in. Lorem aliqua nisi voluptate ea nostrud. Ex commodo labore eu pariatur aliqua ipsum excepteur. Aliquip exercitation reprehenderit adipisicing velit exercitation Lorem nisi. Ex nisi exercitation culpa esse cillum non culpa dolore amet.</LinearCard>
        </div>
    )
};

export default Products;