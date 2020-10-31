
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';



class Slide extends Component {

    
    
    
     render(){

        
         
         return(
            <Carousel >
                
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/123136888_10158906221036031_2675017835064326862_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=sueWpE_Q4I0AX-uVK9D&_nc_ht=scontent.ftun2-1.fna&oh=dec144e54e55e613e4e8b49c08ae9a0d&oe=5FC0F262"
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
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    
                    className="d-block"
                    src="https://media.timeout.com/images/105490665/630/472/image.jpg"
                    alt="Third slide"
                    />                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    
                    className="d-block"
                    src="https://www.lediplomate.tn/wp-content/uploads/2018/11/1198547_w-1000_h-625_q-60_m-crop.jpg"
                    alt="Third slide"
                    />                   
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Slide;