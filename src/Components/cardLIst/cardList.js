import "./cardlist.css"
import React from 'react';
import Cards from '../Card/Card';


function CardList(props) {
    const data = props.data;

    return (
        <section className='cardlist'>
            {props.location === "home" ?
                data.map((song, index) => (
                    <Cards key={index} data={song} location={props.location} />
                ))
                :
                <section className='cardlist'>
                <Cards data={data} location={props.location}/>
                </section>
            }
        </section>
    );
}

export default CardList;