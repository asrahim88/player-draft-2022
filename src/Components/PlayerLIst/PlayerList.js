import React, { useEffect, useState } from 'react';
import AllPlayers from '../AllPlayers/AllPlayers';
import './PlayerList.css'

const PlayerList = () => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        fetch("./FakeData.json")
            .then(res => res.json())
            .then(data => setPlayer(data));
    }, []);
    return (
        <div className='playerListContainer'>
            <div className='playerList'>
                <div className='allPlayerContainer'>
                    {
                        player.map((player) => <AllPlayers player={player} key={player.id}></AllPlayers>)
                    }
                </div>
                <div>
                    <h1 style={{ color: "white" }}>Player Cart.</h1>
                </div>
            </div>
        </div>
    );
};

export default PlayerList;