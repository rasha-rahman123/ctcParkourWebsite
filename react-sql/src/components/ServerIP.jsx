import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Button, Modal, Container} from "react-bootstrap";
import '../App.css';

function Swag() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    {show}
  );
}
class ServerIP extends Component{
  constructor(props) {
    super(props);
    this.state = { status: "LOGIN", chat: [], nickname: "kingkb2400", comment: "" ,show: false};

  }


  render() {

    return (
    <div className="serverip" style={{position: 'static', marginTop: 0 + 'vw', width: 100 + 'vw'}}>
        <Container>
            <Row>
        
    <Col sm={6}>
        <div style={{fontSize: 0.8 + 'em', backgroundColor: 'warning', fontWeight: 800, opacity: 1}}>MC.CTC.NET</div>
    </Col>

    <Col sm={6}>   <div style={{fontSize: 0.8 + 'em', backgroundColor: 'warning', fontWeight: 800, opacity: 1}}>  <Button variant="primary" onClick={this.handle}>
        {this.state.status}
      </Button>

      <Modal show={Swag.show} onHide={Swag.handleClose}>
        <Modal.Header closeButton>
    <Modal.Title> <div style={{fontSize: 0.8 + 'em', backgroundColor: 'warning', fontWeight: 800, opacity: 1}}>{this.state.status}</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="swag" onClick={this.handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal></div></Col>
            </Row>



        </Container>
    </div>
  );
}
}

export default withRouter(ServerIP);  