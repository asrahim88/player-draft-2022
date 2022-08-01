import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
    const {image, name, role, match, bestRun, bestWicket,run, nation, salary
} = props.playerInfo;
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className="modal-btn-box">
                <button onClick={toggleModal} className="btn-modal">
                    Details
                </button>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div>
                            <div className="modal-body">
                                <div className="modal-img">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{name}</h3>
                                <ul className="infoList">
                                    <li><span className="listHeading">Role:</span> {role}</li>
                                    <li><span className="listHeading">T20 Match:</span> {match}</li>
                                    <li><span className="listHeading">Best Run:</span> {bestRun}</li>
                                    <li><span className="listHeading">Total Run: </span>{run}</li>
                                    <li><span className="listHeading">Best Wickets:</span> {bestWicket}</li>
                                    <li><span className="listHeading">Nation:</span> {nation}</li>
                                    <li><span className="listHeading">Base Price:</span> {salary}</li>
                                </ul>
                            </div>
                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;