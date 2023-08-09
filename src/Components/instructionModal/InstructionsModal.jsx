import React, { useState } from 'react';
import Modal from 'react-modal';
import './InstructionsModal.css'; // You can style your modal using CSS

function InstructionsModal({ isOpen, closeModal }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Instructions Modal"
            className="modal"
            overlayClassName="overlay"
        >
            <h2>Instructions</h2>
            <p>
                Welcome to our website! Here are some steps to help you get started:
            </p>
            <ol>
                <li>Explore our various sections and features.</li>
                <li>Customize your profile settings.</li>
                <li>Connect with other users and share your experiences.</li>
                <li>Feel free to contact our support team if you need assistance.</li>
            </ol>
            <button onClick={closeModal}>Got It</button>
        </Modal>
    );
}

export default InstructionsModal;
