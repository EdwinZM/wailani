import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = () => {
    
    return (
        <div className={classes.Toolbar}>
            {/* change the logo div to an image later */}
            <div className={classes.Logo}>Logo</div>
            <DrawerToggle/>
            {/* create sideDrawer */}
            <NavigationItems />
        </div>
    );
}

export default Toolbar;