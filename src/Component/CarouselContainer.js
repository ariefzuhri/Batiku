import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';


const CarouselContainer = () =>{
    return(
        <Carousel fade 
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
        <Carousel.Item interval={1000}>
          <img 
            className="d-block w-100"
            src="https://blog.jadipergi.com/wp-content/uploads/2019/07/membatik.jpg"
            alt="First slide"
            height='800px'
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="http://www.jnjbatik.com/wp-content/uploads/2016/11/apa-sih-batik-itu.jpg"
            alt="Second slide"
            height='800px'
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://imgcdn.rri.co.id/__srct/b763d32e20ec5d473fd182b5c78d0964/907210/kain_batik.jpg?v=1.0.3"
            alt="Third slide"
            height='800px'
          />
        </Carousel.Item>
      </Carousel>
    )
}

export default CarouselContainer;