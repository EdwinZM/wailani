import React, { useState } from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const Toolbar = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawerClicked = () => {
        setDrawerOpen(prevState => !prevState);
    }
    
    return (
        <header className={classes.Toolbar}>
            {/* change the logo div to an image later */}
            <div className={classes.Logo}>Logo</div>
             <DrawerToggle click={drawerClicked}/>
             <SideDrawer show={drawerOpen} closed={drawerClicked}/>
             <div className={classes.NavItems}>
             <NavigationItems/>
             </div>
        </header>
    );
}

export default Toolbar;