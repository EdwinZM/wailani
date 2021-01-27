import React, {Fragment, useState} from 'react';
import image1 from '../../../Images/unnamed.png'
import Card from './Card/Card';
import classes from './Cards.module.css';

const Cards = () => {
    const [imageState, setImageState] = useState(image1);
    const [titleState, setTitleState] = useState('Title');
    const [textState, setTextState] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ')
    //When the products database is ready, get rid of the states and cards, make a fetch
    //request to the database, and map the results to the card component to have
    // a card for each product. Also create a stylesheet with css grids for the cards
    // create a high order component to fetch the products and import it
    //individualy to the home and the products component. In home
    //create a loop to fetch six products and put them in cards.
    //Get rid of this component since we won't use it, import the card individualy
    //to each component.
    return (
        <div className={classes.Cards}>
            <Card image={imageState} title={titleState} text={textState} />
            <Card image={imageState} title={titleState} text={textState} />
            <Card image={imageState} title={titleState} text={textState} />
            <Card image={imageState} title={titleState} text={textState} />
            <Card image={imageState} title={titleState} text={textState} />
            <Card image={imageState} title={titleState} text={textState} />
            <Card image={imageState} title={titleState} text={textState} />
            <Card image={imageState} title={titleState} text={textState} />
        </div>
    )
}

export default Cards;