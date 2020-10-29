import React from 'react';
import render from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';

class Slide extends React.Component {
    
     render(){
         
         return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="https://www.barcelo.com/pinandtravel/wp-content/uploads/2019/11/best-things-to-do-in-tunisia_tunis-city-tour.jpg"
                    alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="https://thumbs.dreamstime.com/b/bord-de-la-mer-et-terrasse-caf%C3%A9-en-sidi-bou-said-au-coucher-du-soleil-tunisie-afrique-nord-135414272.jpg"
                    alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="https://scontent.ftun4-1.fna.fbcdn.net/v/t31.0-8/901262_500392943353167_634440508_o.jpg?_nc_cat=103&ccb=2&_nc_sid=9267fe&_nc_ohc=TZMZLU_WV0YAX8EYxGh&_nc_ht=scontent.ftun4-1.fna&oh=302129f41b9ff601f76fa25c2d09319c&oe=5FBFD4CF"
                    alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="https://www.planetware.com/photos-large/TUN/tunisia-kairouan-skyline-of-mosques.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Slide;