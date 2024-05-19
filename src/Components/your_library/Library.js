
import "./Library.css";
import "../cardLIst/cardlist.css";
import { useState, useRef, useEffect } from "react";
import CardList from "../cardLIst/cardList.js";

function Library() {
    const music = require('../Data/musicData.json');
   

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
             <CardList data={music}  location="lybrari"/>
        </>
    );
}

export default Library;

