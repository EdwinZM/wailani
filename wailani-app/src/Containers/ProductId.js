import React from 'react';
import { Fragment } from 'react';
import Toolbar from '../Components/Toolbar/Toolbar';
import Image from '../Images/unnamed.png';
import classes from './ProductId.module.css';

function ProductId(){
    return (
        //create a big card in the middle of the document with complete info of the product
        // and an image on top. Include the image, the description, an add to cart button, and
        // a buy button.
        <Fragment>
            <Toolbar/>
            <div className={classes.Body}>
                <img src={Image} alt='Product' className={classes.Image}/>
                <h3>Title</h3>
                <p>Ea ad incididunt ea commodo labore commodo proident pariatur ullamco tempor qui. Dolor adipisicing sit anim nulla consectetur pariatur exercitation velit tempor. Nulla magna deserunt labore aute commodo occaecat non incididunt et occaecat consectetur reprehenderit. Nostrud labore dolor minim occaecat anim proident qui do. Officia quis minim pariatur ipsum sit amet in est officia.</p>
            </div>
        </Fragment>
    )
}

export default ProductId;