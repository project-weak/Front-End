import "./Library.css";
import "../cardLIst/cardlist.css";
import { useState, useRef, useEffect } from "react";
import CardList from "../cardLIst/cardList.js";
import axios from "axios";

function Library() {
    // استخدام useState بشكل صحيح
    const [playLists, setPlayLists] = useState({});

    function getLiked() {
        const getUrl = `https://back-end-10.onrender.com/favorite`;
        axios.get(getUrl)
            .then((response) => {
                const data = response.data;
                setPlayLists(data);
                console.log(playLists);
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
             <CardList data={playLists} location="library"/>
        </>
    );
}

export default Library;
