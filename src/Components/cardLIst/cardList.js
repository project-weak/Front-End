import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./cardlist.css";
import Cards from '../Card/Card';

function CardList(props) {
    const { data, location } = props;
    const [activeSlide, setActiveSlide] = useState({});
    const keys = Object.keys(data);

    const commonSettings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false // إخفاء النقاط في الشاشات الصغيرة
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false // إخفاء النقاط في الشاشات الصغيرة
                }
            }
        ]
    };

    const sections = location === "home" ? [
        { title: keys[0], songs: data?.popular?.slice(0) || [], sliderSettings: commonSettings },
        { title: keys[1], songs: data?.top?.slice(0) || [], sliderSettings: commonSettings },
    ] : [
        { title: keys[0], songs: data?.Liked?.slice(0) || [], sliderSettings: commonSettings },
        { title: keys[1], songs: data?.Playlist?.slice(0) || [], sliderSettings: commonSettings },
    ];

    const handleAfterChange = (sectionIndex, current) => {
        setActiveSlide(prevState => ({ ...prevState, [sectionIndex]: current }));
    };

    return (
        <div className='cardlist-container'>
            {sections.map((section, sectionIndex) => (
                <div key={section.title} className='section'>
                    <h2 className='section-title'>{section.title} Songs</h2>
                    <div className="slider-container">
                        <Slider className="slider-class" {...section.sliderSettings} afterChange={(current) => handleAfterChange(sectionIndex, current)}>
                            {section.songs.map((song, index) => (
                                <div key={index}>
                                    <Cards id={String(song.id)} data={song} location={location} filteredMusic={props.filteredMusic} handleDelete={props.handleDelete} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="slide-number">
                        {activeSlide[sectionIndex] + 1 || 1} - {Math.ceil(section.songs.length / 4)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardList;
