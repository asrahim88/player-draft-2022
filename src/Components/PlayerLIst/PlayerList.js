import React, { useEffect, useState } from 'react';
import AllPlayers from '../AllPlayers/AllPlayers';

const PlayerList = () => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        fetch("./FakeData.json")
        .then(res => res.json())
        .then(data => setPlayer(data));
    }, []);
    return (
        <div>
            {
                player.map((player) => <AllPlayers player = {player} key = {player.id}></AllPlayers>)
            }
        </div>
    );
};

export default PlayerList;