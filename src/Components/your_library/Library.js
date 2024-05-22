import "./Library.css";
import "../cardLIst/cardlist.css";
import { useState, useRef, useEffect } from "react";
import CardList from "../cardLIst/cardList.js";
import axios from "axios";
import NavBar from '../NavBar/NavBar.js';

function Library() {

    const [playLists, setPlayLists] = useState({});
    const handleDeleteData=(id)=>{
        const Liked =playLists.Liked.filter(item => item.id !== id);
    const Playlist = playLists.Playlist.filter(item => item.id !== id);
    setPlayLists({Liked ,Playlist})
    }

    function getLiked() {
        const getUrl = `https://back-end-10.onrender.com/favorite`;
        axios.get(getUrl)
            .then((response) => {
                const data = response.data;
                setPlayLists(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getLiked();
    }, []);

    return (
        <>
            <NavBar />
            <CardList data={playLists} location="library" />
        </>
    );
}

export default Library;
