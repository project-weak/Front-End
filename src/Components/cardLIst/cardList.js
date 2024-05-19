import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./cardlist.css";
import Cards from '../Card/Card';

function CardList(props) {
    const { data, location } = props;

    const sections = [
        { title: "Popular Songs", songs: data.slice(0, 5), sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
        { title: "Trending Songs", songs: data.slice(5, 10), sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
    ];

    return (
        <div className='cardlist-container'>
            {sections.map((section, index) => (
                <div key={index} className='section'>
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
