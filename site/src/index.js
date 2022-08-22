import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faMicroscope } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image'

library.add(fab, faCheckSquare, faCoffee, faMicroscope)


function BasicExample(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Button variant="primary">{props.btnMsg}</Button>
      </Card.Body>
    </Card>
  );
  
}

function ContainerExample() {
  return (
    <Container>
      <Row className="justify-content-md-center" xs={1} md={2} lg={3}>
        <Col><BasicExample title="Hello" body="Machine Learning" btnMsg="Info" image="ml.webp"/></Col>
        <Col><BasicExample title="Hello" body="Web Development" btnMsg="Info" image="webdev.jpg"/></Col>
        <Col><BasicExample title="Hello" body="AI Research" btnMsg="Info" image="ai.jpg"/></Col>
      </Row>
      <br></br>
      <Row className="justify-content-md-center" xs={1} md={2} lg={3}>
        <Col><BasicExample title="Hello" body="Teaching" btnMsg="Info" image="teaching.jpg"/></Col>
        <Col><BasicExample title="Hello" body="Internships & Client Work" btnMsg="Info" image="work.jpg"/></Col>
        <Col><BasicExample title="Hello" body="Charity" btnMsg="Info" image="charity.jpg"/></Col>
      </Row>
    </Container>
    
  );
}




function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"> 
        <Image src="profOuterspace.png" width="50" height="50" roundedCircle/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#">Research</Nav.Link>
            <Nav.Link href="#action1">Machine Learning</Nav.Link>
            <Nav.Link href="#action2">Software</Nav.Link>
            <Nav.Link href="#">Interest</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Footer(){
  return(
    <footer class="page-footer">
      <div class="container">
          <div class="col l6 s12">
            <h5> Angelo Straight (Software Engineer)</h5>
          </div>
          <Row xs="auto">
            <Col><h3><Badge bg="light"><a href="https://www.facebook.com"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></Badge></h3></Col>
            <Col><h3><Badge bg="light"><a href="linkedin.com/in/angelo-straight"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></Badge></h3></Col>
            <Col><h3><Badge bg="light"><a href="https://github.com/AngeloStraight/"><FontAwesomeIcon icon="fa-brands fa-github" /></a></Badge></h3></Col>
          </Row>
          
        </div>
      <div class="footer-copyright grey darken-3 white-text">
        <div class="container">
        © 2021 Copyright Strafinity LLC
        </div>
      </div>
  </footer>
  
  );
}


class Main extends React.Component{
    render(){
        return (
            <div> 
            <NavScrollExample/>
            {/* <Button>Show Toast</Button>
            <Button variant="primary">Primary</Button>{' '} */}
            {/* <NameForm/> */}
            
            <ContainerExample/>
            <Footer/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);



















// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       this.setState({value: ''})
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }


//<img
  //            src="/logo.jpeg"
    //          width="30"
      //        height="30"
        //      className="d-inline-block align-top"
         //     alt="React Bootstrap logo"
           // /> 