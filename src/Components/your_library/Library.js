
import "./Library.css";
import "../cardLIst/cardlist.css";
import { useState, useRef, useEffect } from "react";
import CardList from "../cardLIst/cardList.js";

function Library() {
    const musicData = require('../Data/musicData.json');
    const likedRef = useRef(null);
    const playlistRef = useRef(null);
    const [showAllLiked, setShowAllLiked] = useState(false);
    const [showAllPlaylist, setShowAllPlaylist] = useState(false);
    const [liked, setLiked] = useState([]);
    const [playlist, setPlaylist] = useState([]);


    const toggleVisibilityLiked = () => {
        setShowAllLiked(!showAllLiked);
        if (!showAllLiked) {
            setTimeout(() => {
                likedRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    };

    const toggleVisibilityPlaylist = () => {
        setShowAllPlaylist(!showAllPlaylist);
        if (!showAllPlaylist) {
            setTimeout(() => {
                playlistRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    };

    // Get Music from Table Liked
    // function getLiked() {
    //     const getUrl = ``;
    //     axios.get(getUrl)
    //         .then((response) => {
    //             setLiked(response.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    // Get Music from Table PlayList 
    // function getPlaylist() {
    //     const getUrl = ``;
    //     axios.get(getUrl)
    //         .then((response) => {
    //             setPlaylist(response.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    // useEffect(() => {
    //     getLiked();
    //     getPlaylist();
    // })

    return (
        <>
            {/* Liked */}
            <section className='liked-playlist-section'>
                <h1>Liked</h1>
                <button onClick={toggleVisibilityLiked}>See All</button>
            </section>
            <section ref={likedRef} className="card-section-playlist">
                {musicData.slice(0, showAllLiked ? musicData.length : 5).map((musicData, index) => (
                    <CardList key={index} data={musicData} location='library' />
                ))}
            </section>

            {/* PlayList */}
            <section className='liked-playlist-section'>
                <h1>Playlist</h1>
                <button onClick={toggleVisibilityPlaylist}>See All</button>
            </section>
            <section ref={playlistRef} className="card-section-playlist">
                {musicData.slice(0, showAllPlaylist ? musicData.length : 5).map((musicData, index) => (
                    <CardList key={index} data={musicData} location='library' />
                ))}
            </section>
        </>
    );
}

export default Library;

