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