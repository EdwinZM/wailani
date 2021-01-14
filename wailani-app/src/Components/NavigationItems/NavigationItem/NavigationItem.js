import React from 'react';
import {Navlink} from 'react-router';
import {classes} from './NavigationItem.module.css';

function NavigationItem(props) {
    <Navlink 
    to={props.path} 
    exact className={classes.NavLink}>{props.children}</Navlink>
}

export default NavigationItem;