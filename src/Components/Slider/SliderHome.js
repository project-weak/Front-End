import './SliderHome.css';
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Search from '../Search/search';

function SilderHome() {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 5000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    return (
        <>
            <header className='home-header'>
                <div id="logo">Melody<span id="logo-s">Hub</span></div>
                <span className="home"><Link className="act" to="/about">About Us</Link></span>
                <span className="home"><Link className="act" to="/Library">Library</Link></span>
                <span className="home"><Link className="act" to="/">Home</Link></span>
                {/* <Search /> */}
            </header>
            <Slider {...settings} className="heroslider">
                <div className="slideritem slideritem-01 mt0">
                    <Container >


                        <div className="slidercontent " data-aos="fade-right">
                            <h4 className="text-light mb-3 txt"></h4>
                            <h1 className="text-light mb-4 txt"></h1>
                        </div>
                    </Container>
                </div>

                <div className="slideritem slideritem-02 mt0">
                    <Container>
                        <div className="slidercontent " data-aos="fade-right">
                            <h4 className="text-light mb-3 txt"></h4>
                            <h1 className="text-light mb-4 txt"></h1>

                        </div>
                    </Container>
                </div>

                <div className="slideritem slideritem-03 mt0">
                    <Container>
                        <div className="slidercontent " data-aos="fade-right">
                            <h4 className="text-light mb-3 txt"></h4>
                            <h1 className="text-light mb-4 txt"></h1>

                        </div>
                    </Container>

                </div>
                <div className="slideritem slideritem-04 mt0">
                    <Container>
                        <div className="slidercontent " data-aos="fade-right">
                            <h4 className="text-light mb-3 txt"></h4>
                            <h1 className="text-light mb-4 txt"></h1>

                        </div>
                    </Container>

                </div>
            </Slider>
        </>
    )
}

export default SilderHome;