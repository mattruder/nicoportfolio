import { HashLink } from 'react-router-hash-link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom"



const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });

function NavBar() {

    const [formData, updateFormData] = useState(initialFormData);

    
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sticky={
      position: 'fixed',
      top: "0",
      width: "100%",
      zIndex: "100",
      paddingBottom: "10px",
      padding: "10px",
      height: '10vh',
    }

    


    const formStyles = {
     
        
        
        
        alignItems: 'center',
        justifyContent: 'center'
    }

  
    const navigate = useNavigate()


    const sendFeedback = (serviceID, templateId, variables, publicKey) => {
        emailjs.send(
            serviceID, templateId,
            variables, publicKey
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const templateId = 'template_3irx4km';
        const serviceID = "service_bpdmgcd";
        const publicKey = "viC7jQKxx99O3NagW";
        if (formData.name && formData.mobile && formData.email && formData.query) {
            sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message: formData.query, email: formData.email }, publicKey)
            alert(`Thank you for your message. Your query has been forwarded.`);
            handleClose()
        } else {
            alert(`Please complete all fields`);
        }
        

        console.log(formData);
      };

  return (
    <div>
        
        <Navbar style={sticky} bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Kevin Ruder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Skills/Techniques</Nav.Link>
            <Nav.Link >Experience/Education</Nav.Link>
            <Nav.Link >Publications</Nav.Link>
            <Nav.Link onClick={handleShow}>Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid >
            <Row>
                <Col>
                <Form >
        <div>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control required onChange={handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control required onChange={handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control required onChange={handleChange} name="mobile" placeholder="Phone" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Information*</Form.Label>
                <Form.Control required onChange={handleChange} name="query" placeholder="Please Type Query Here" as="textarea" rows={8} />
            </Form.Group>
                </div>
        </Form >
                </Col>
            </Row>
    
        </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleSubmit} variant="outline" className="formButtonStyle" type="submit">
                Submit
                </Button>
                <Button onClick={handleClose} variant="outline" className="formButtonStyle" >
                Close
                </Button>
        </Modal.Footer>
        
      </Modal>

        


        </div>
  );
}

export default NavBar