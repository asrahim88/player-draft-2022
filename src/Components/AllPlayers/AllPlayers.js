import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './AllPlayers.css'

const AllPlayers = (props) => {
    const { name, image, role, salary, nation, id
    } = props.player;

    const [addRemove, setAddRemove] = useState(true);

    const handleAddPlayer = () => {
        props.soldPlayer(props.player)
        setAddRemove(false);
    };
    const handleRemovePlayer = () => {
        props.deleteSoldPlayer(id);
        setAddRemove(true);
    }

    return (
        <div className='playerBox'>
            <div className="img-box">
                <img src={image} alt="" />
            </div>
            <p className='textColor'>{name}</p>
            <div className='tableBox'>
                <table>
                    <thead>
                        <tr className='tHeading'>
                            <th>Role</th>
                            <th>Base Price</th>
                            <th>Nation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tData'>
                            <td>
                                {role}
                            </td>
                            <td>
                                {salary}
                            </td>
                            <td>
                                {nation}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='modalContainer'>
                {
                    addRemove ? <button className='soldBtn' onClick={handleAddPlayer}>Unsold</button>
                    :
                    <button className='soldBtn success' onClick={handleRemovePlayer}>Sold</button>
                }
                <Modal playerInfo = {props.player}/>
            </div>
        </div>
    );
};

export default AllPlayers;