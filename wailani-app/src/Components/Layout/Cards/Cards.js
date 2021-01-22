import React, {Fragment, useState} from 'react';
import image1 from '../../../Images/unnamed.png'
import Card from './Card/Card';

const Cards = () => {
    const [imageState, setImageState] = useState(image1);
    const [titleState, setTitleState] = useState('Title');
    const [textState, setTextState] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ')
    //When the products database is ready, get rid of the states and cards, make a fetch
    //request to the database, and map the results to the card component to have
    // a card for each product. Also create a stylesheet with css grids for the cards

    return (
        <div>
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