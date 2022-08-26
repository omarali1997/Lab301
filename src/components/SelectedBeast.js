import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';





class UserModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >{this.props.selBeast.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card >
                            <Card.Title>{this.props.selBeast._id}</Card.Title>
                            <Card.Title>
                                {this.props.selBeast.id}
                                {this.props.selBeast.title}
                            </Card.Title>
                            <Card.Body>
                                <Card.Img variant="top" src={this.props.selBeast.image_url} alt="image" title={this.props.selBeast.title} />
                                <Card.Text>
                                    <p>keyword : {this.props.selBeast.keyword}</p>
                                    <p>horns : {this.props.selBeast.horns}</p>
                                    <p>{this.props.selBeast.description}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UserModal;

import React from 'react';
import Button from 'react-bootstrap/Button';
