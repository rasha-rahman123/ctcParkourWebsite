import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Row, Col, Containeer, Container} from "react-bootstrap";
import '../App.css';
function ServerIP(props) {
  return (
    <div className="serverip" style={{position: 'static', marginTop: -1 + 'vw'}}>
        <Container fluid>
            <Row>
    <Col>
        <div style={{fontSize: 0.8 + 'em', backgroundColor: 'lightgreen', fontWeight: 800, width: 100 + "vw", opacity: 1}}>MC.CTC.NET</div>
    </Col>

            </Row>



        </Container>
    </div>
  );
}

export default withRouter(ServerIP);  