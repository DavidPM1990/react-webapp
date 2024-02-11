import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({ showModal, onClose, onDeleteConfirmation }) {
    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure? </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>If you delete this thing the enntire universe go down! </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Oh no!
                </Button>
                <Button variant="primary" onClick={onDeleteConfirmation}>
                    Yes baby!
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDelete;
