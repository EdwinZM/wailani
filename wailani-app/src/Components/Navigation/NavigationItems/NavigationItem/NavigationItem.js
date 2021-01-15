import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

function NavigationItem(props) {
    return (
         
             <NavLink 
            to={props.path} 
            exact 
            className={classes.NavLink} 
            activeClassName={classes.active}>{props.children}</NavLink>
        
       
    )
    
}

export default NavigationItem;