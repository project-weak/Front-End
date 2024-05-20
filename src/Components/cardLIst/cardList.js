import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./cardlist.css";
import Cards from '../Card/Card';

function CardList(props) {
    const { data, location } = props;
    const keys = Object.keys(data);
    console.log(data)
    const sections = [
        { title: keys[0], songs: data?.papulor?.slice(0) || [], sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
        { title: keys[1], songs: data?.top?.slice(0) || [], sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
    ];

    return (
        <div className='cardlist-container'>
            {sections.map((section) => (
                <div key={props.id} className='section'>
                    <h2 className='section-title'>{section.title}</h2>
                    <div className="slider-container">
                        <Slider {...section.sliderSettings}>

                            {section.songs.map((song, index) => (
                                <div key={index}>
                                    <Cards data={song} location={location} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardList;
