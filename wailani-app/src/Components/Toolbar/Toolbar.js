import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            {/* change the logo div to an image later */}
            <div className={classes.Logo}>Logo</div>
            
        </div>
    );
}

export default Toolbar;