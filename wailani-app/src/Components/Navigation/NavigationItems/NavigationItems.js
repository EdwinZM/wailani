import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';


function NavigationItems() {
    let items;
    if (window.location.pathname !== '/') {
         items = (
            <div>
                <NavigationItem path='/'>Home</NavigationItem>
                <NavigationItem path='/products'>Products</NavigationItem>
                <NavigationItem path='/about'>About</NavigationItem>
            </div>
        )
    } else {
        items = (
            <div>
                <NavigationItem path='/products'>Products</NavigationItem>
                <NavigationItem path='/about'>About</NavigationItem>
            </div>
        )
    }
    return (
        <div className={classes.NavigationItems}>
             {items}
        </div>
       
    )
}

export default NavigationItems;