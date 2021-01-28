import React from 'react';
import classes from './LinearCard.module.css';
import image from '../../../../Images/unnamed.png';

function LinearCard(props) {
    return (
        <div className={classes.LinearCard}>
            <img src={image} alt='product'
            className={classes.Image}/>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </div>
    )   
}

export default LinearCard;