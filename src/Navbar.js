import { HashLink } from 'react-router-hash-link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom"
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css'



const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });

function NavBar({scrollToExperience, scrollToEducation, scrollToPublications, scrollToSkills, scrollToTechniques}) {

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

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
      padding: "10px"
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
        
        const templateId = 'TEMPLATE_ID_HERE';
        const serviceID = "SERVICE_ID_HERE";
        const publicKey = "PUBLIC_KEY_HERE";
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
        
        <Navbar collapseOnSelect style={sticky} bg="dark" variant="dark" expand="lg">
      
        <Navbar.Brand className="kevin-button" onClick={() => window.scrollTo({top: 0})}>Kevin Ruder</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" navbarScroll>
            <Nav.Link eventKey="1"onClick={() => handleScroll(scrollToSkills.current)}to="skills">Skills</Nav.Link>
            <Nav.Link eventKey="2"onClick={() => handleScroll(scrollToTechniques.current)}to="techniques">Techniques</Nav.Link>
            <Nav.Link eventKey="3"onClick={() => handleScroll(scrollToExperience.current)} to="experience">Experience</Nav.Link>
            <Nav.Link eventKey="4"onClick={() => handleScroll(scrollToPublications.current)}to="publications">Publications</Nav.Link>
            <Nav.Link eventKey="5"onClick={() => handleScroll(scrollToEducation.current)}>Education</Nav.Link>
            <Nav.Link  eventKey="6"onClick={handleShow}>Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
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
        <Button onClick={handleClose} variant="outline" className="formButtonStyle" >
                Close
                </Button>
        <Button onClick={handleSubmit} variant="outline" className="formButtonStyle" type="submit">
                Submit
                </Button>
                
        </Modal.Footer>
        
      </Modal>

        


        </div>
  );
}

export default NavBar