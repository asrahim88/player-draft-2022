import React, { useEffect, useState } from 'react';
import AllPlayers from '../AllPlayers/AllPlayers';
import SoldPlayer from '../SoldPlayer/SoldPlayer';
import './PlayerList.css'

const PlayerList = () => {
    const [player, setPlayer] = useState([]);
    const [soldPlayer, setSoldPlayer] = useState([]);
    
    const handleSoldPlayer = (player) => {
        const playerInfo = [...soldPlayer, player];
        setSoldPlayer(playerInfo);
    }

    const handleDeletePlayer = (playerId)=>{
       const deleteSoldPlayer = soldPlayer.filter(pd => pd.id !== playerId)
       setSoldPlayer(deleteSoldPlayer);
    }
   
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
                        player.map((player) => <AllPlayers player={player} key={player.id} soldPlayer={handleSoldPlayer} deleteSoldPlayer = {handleDeletePlayer}></AllPlayers>)
                    }
                </div>
                <div style={{ marginLeft: '10px', padding: '10px', width: '100%'}}>
                    <SoldPlayer soldPlayer={soldPlayer} key={soldPlayer.id}></SoldPlayer>
                </div>
            </div>
        </div>
    );
};

export default PlayerList;