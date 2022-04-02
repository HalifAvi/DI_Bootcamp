import React from "react";
import { Carousel } from "react-bootstrap";


const BootstrapCarousel = () => {
    return (

        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height: 450}}
                        src="1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Silde #1</h3>
                        <p>Description Silde #1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height: 450}}
                        src="2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Silde #2</h3>
                        <p>Description Silde #2</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height: 450}}
                        src="3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Silde #3</h3>
                        <p>Description Silde #3</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height: 450}}
                        src="4.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Silde #4</h3>
                        <p>Description Silde #</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}


export default BootstrapCarousel

