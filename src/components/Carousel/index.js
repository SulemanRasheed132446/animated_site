import React, { Component } from "react";
import Slider from "react-slick";
import { Slide } from '../Slide'
import { customerReviews } from '../../util/data'
import styles from './style.module.css'
import { Bounce } from 'react-reveal'

export class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Bounce bottom>
                <div className="container">
                    <div className={styles.carousel}>
                        <h2>What your customers are saying </h2>
                        <hr />
                        <Slider {...settings}>
                            {customerReviews.map((customerReview) => {
                                return (
                                    <Slide
                                        name={customerReview.name}
                                        title={customerReview.title}
                                        comment={customerReview.comment}
                                        image={customerReview.image}
                                    />
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </Bounce>
        );
    }
}
