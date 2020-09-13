import React from 'react';
import './services.css';
import { Card, Button, CardContent, CardActionArea } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import image1 from '../../assets/service-images/4.svg';
import image2 from '../../assets/service-images/2.svg';
import image3 from '../../assets/service-images/nodejs.png';
import image4 from '../../assets/service-images/mongoDB.png';
import image5 from '../../assets/service-images/ionic 4.png';
import image6 from '../../assets/service-images/firebase.jpg';


const dummayArray = [
    {
        icon: image1,
        name: 'HTML,CSS & JAVASCRIPT',
        despcription: [
            {
                item: 'HTML is the standard markup language for Web pages.'
            },
            {
                item: 'With HTML you can create your own Website.'
            },
            {
                item: 'CSS is the language we use to style an HTML document.'
            },
            {
                item: 'CSS describes how HTML elements should be displayed.'
            },
            {
                item: "JavaScript is the world's most popular programming language."
            },
            {
                item: "JavaScript is the programming language of the Web."
            }

        ]
    },
    {
        icon: image2,
        name: 'Reactjsx',
       despcription: [
            {
                item: 'HTML is the standard markup language for Web pages.'
            },
            {
                item: 'With HTML you can create your own Website.'
            },
            {
                item: 'CSS is the language we use to style an HTML document.'
            },
            {
                item: 'CSS describes how HTML elements should be displayed.'
            },
            {
                item: "JavaScript is the world's most popular programming language."
            },
            {
                item: "JavaScript is the programming language of the Web."
            }

        ]
    },
    {
        icon: image5,
        name: 'Ionic 4',
       despcription: [
            {
                item: 'HTML is the standard markup language for Web pages.'
            },
            {
                item: 'With HTML you can create your own Website.'
            },
            {
                item: 'CSS is the language we use to style an HTML document.'
            },
            {
                item: 'CSS describes how HTML elements should be displayed.'
            },
            {
                item: "JavaScript is the world's most popular programming language."
            },
            {
                item: "JavaScript is the programming language of the Web."
            }

        ]
    },
    {
        icon: image3,
        name: 'Nodejs & Expressjs ( Back-End )',
       despcription: [
            {
                item: 'HTML is the standard markup language for Web pages.'
            },
            {
                item: 'With HTML you can create your own Website.'
            },
            {
                item: 'CSS is the language we use to style an HTML document.'
            },
            {
                item: 'CSS describes how HTML elements should be displayed.'
            },
            {
                item: "JavaScript is the world's most popular programming language."
            },
            {
                item: "JavaScript is the programming language of the Web."
            }

        ]
    },
    {
        icon: image4,
        name: 'MongoDB',
       despcription: [
            {
                item: 'HTML is the standard markup language for Web pages.'
            },
            {
                item: 'With HTML you can create your own Website.'
            },
            {
                item: 'CSS is the language we use to style an HTML document.'
            },
            {
                item: 'CSS describes how HTML elements should be displayed.'
            },
            {
                item: "JavaScript is the world's most popular programming language."
            },
            {
                item: "JavaScript is the programming language of the Web."
            }

        ]
    },

    {
        icon: image6,
        name: 'FirebaseDB',
       despcription: [
            {
                item: 'HTML is the standard markup language for Web pages.'
            },
            {
                item: 'With HTML you can create your own Website.'
            },
            {
                item: 'CSS is the language we use to style an HTML document.'
            },
            {
                item: 'CSS describes how HTML elements should be displayed.'
            },
            {
                item: "JavaScript is the world's most popular programming language."
            },
            {
                item: "JavaScript is the programming language of the Web."
            }

        ]
    }
]

const ServicesPage = () => {
    return (
        <div id="services" className="main-service-container" >
            <h1>Services</h1>
            <div className="clue-container">
                <small className="add-info">Please Click the Button for Add Services</small>
                <Button className="add-service-btn">
                    <Add />
                </Button>
            </div>
            <div className="card-container">
                {dummayArray.map((detail, index) => {
                    return <Card key={index} className="service-card" variant="outlined">
                        <div className="image-container">
                            <img className="card-header-image" src={detail.icon} />
                        </div>
                        <h5>{detail.name}</h5>
                        <CardContent>
                            <ul>
                                {detail.despcription.map((items, index) => {
                                    console.log('sub array', items.item);
                                    return <li className="service-list" key={index}>{items.item}</li>
                                })}

                            </ul>
                        </CardContent>
                            <Button className="reg-btn" variant="outlined" >Registration</Button>
                    </Card>
                })}
            </div>
        </div>
    )
}

export default ServicesPage;