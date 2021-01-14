import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

function NavigationItems() {
    return (
        <div>
            <NavigationItem path='/products'>Products</NavigationItem>
            <NavigationItem path='/about'>About</NavigationItem>
        </div>
    )
}