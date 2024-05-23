import "./Library.css";
import "../cardLIst/cardlist.css";
import { useState, useRef, useEffect } from "react";
import CardList from "../cardLIst/cardList.js";
import axios from "axios";
import NavBar from '../NavBar/NavBar.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Library() {
    const [playLists, setPlayLists] = useState({});

    const handleDeleteData=(id)=>{
        const Liked =playLists.Liked.filter(item => item.id !== id);
    const Playlist = playLists.Playlist.filter(item => item.id !== id);
    setPlayLists({Liked ,Playlist})
    }

    function getLiked() {
        const getUrl = `${process.env.REACT_APP_URL}/favorite`;
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
            <ToastContainer />
            <CardList data={playLists} location="library" handleDelete={handleDeleteData}/>
        </>
    );
}

export default Library;
