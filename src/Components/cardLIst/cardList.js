import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./cardlist.css";
import Cards from '../Card/Card';

function CardList(props) {
    const { data, location } = props;
    console.log(props);
    const [activeSlide, setActiveSlide] = useState({});
    const keys = Object.keys(data);

    const sections = location === "home" ? [
        { title: keys[0], songs: data?.popular?.slice(0) || [], sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
        { title: keys[1], songs: data?.top?.slice(0) || [], sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
    ] : [
        { title: keys[0], songs: data?.Liked?.slice(0) || [], sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
        { title: keys[1], songs: data?.Playlist?.slice(0) || [], sliderSettings: { dots: true, arrows: true, infinite: false, speed: 500, slidesToShow: 1, slidesToScroll: 1, rows: 1, slidesPerRow: 4 } },
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
                            {section.songs.map((song,index) => (
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
