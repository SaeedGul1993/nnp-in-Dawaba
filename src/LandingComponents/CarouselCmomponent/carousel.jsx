import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core';
import './carousel.css';
import firstImage from '../../assets/carousel-images/1.jpg';
import secondImage from '../../assets/carousel-images/2.jpg';
import thirdImage from '../../assets/carousel-images/3.jpg';
import { Add } from '@material-ui/icons';


const Item = (props) => {
    return (
        <Paper className="paper-style">
            <img className="image-style" src={props.item.image} />
            <div className="add-image-container">
                <h1>{props.item.name}</h1>
                <p>{props.item.description}</p>

                <Button variant="contained" size="large" className="CheckButton">
                 Image
            </Button>
            </div>
        </Paper>
    )
}

const CarouselPage = (props) => {
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: firstImage
        },
        {
            name: "Random Name #2",
            description: "Probably the most random thing you have ever seen!",
            image: secondImage

        },
        {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!",
            image: thirdImage
        },
    ]

    return (
        <div id="home">
            <Carousel className="carousel-style" duration={3000} >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}


export default CarouselPage;