import React from 'react';
import './SoldPlayer.css';
import { FaBeer } from 'react-icons/fa';
import { IoCheckboxOutline } from "react-icons/io5";

const SoldPlayer = (props) => {
    const player = props.soldPlayer;
    const totalPrice = player.reduce(((total, price) => total + price.salary), 0);
    console.log(player)
    return (
        <div className='selectionBody'>
            
            <div className='selectionContainer'>
            <h2 className='selectionHeading'>🏆🏏𝓜𝕪 Ť𝐄αΜ🏏🏆</h2>
                <h3 style={{ textAlign: 'center', color: 'white' }}>Total Sold Player: {props.soldPlayer.length}</h3>
                <p style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid white', paddingBottom: '8px'}}>
                    <span style={{display: "block"}}>Name</span>
                    <span style={{display: "block"}}>Base Price</span>
                </p>
                <div className = "soldPlayerDescription">
                    <div>
                        <small>
                            {
                                player.map((name) => <p key={name.id}><IoCheckboxOutline /> { name.name} </p>)
                            }
                        </small>
                    </div>
                    <div>
                        <small>
                            {
                                player.map((salary) => <p key={salary.id}> $ {salary.salary}</p>)
                            }
                        </small>
                    </div>
                </div>
                <p><small>The Total Base Price of All Sold Player is <span>$ {totalPrice}</span> </small></p>
            </div>
        </div>
    );
};

export default SoldPlayer;