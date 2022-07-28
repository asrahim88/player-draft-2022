import React from 'react';
import Modal from '../Modal/Modal';
import './AllPlayers.css'

const AllPlayers = (props) => {
    const { name, image, role, salary
    } = props.player;
    console.log(props.player)
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
                                Bangladeshi
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='modalContainer'>
                <button className='soldBtn'>Unsold</button>
                <Modal />
            </div>
        </div>
    );
};

export default AllPlayers;