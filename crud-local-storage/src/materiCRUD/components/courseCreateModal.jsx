import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseCreateModal = ({ show, handleClose, handleSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitData = () => {
        const thisId = new Date().valueOf();
        const submitPayload = {
            id: thisId,
            title,
            description
        }
        console.log('submit', submitPayload);
        handleSubmit(submitPayload);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="title"
                            placeholder="Course Title"
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitData}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CourseCreateModal;