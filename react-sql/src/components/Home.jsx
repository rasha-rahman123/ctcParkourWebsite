import React from "react";
import '../App.css';
import pk1 from '../pk1.png';
import logo from '../CTC.png';
import dude from '../scientist.png';
import {Container, Row, Col, Alert} from 'react-bootstrap';

function Home() {
  return (
    <div className="App">
           <img src={logo} alt="Logo" width="283" height="100"></img>
    <div className="Notice">"CREATED BY RASHA RAHMAN & NICK RAMIREZ"</div>
    <div className="list2"><Container>
      <Row>
        <Col><img src={dude}/></Col>
        <Col><h3>ITS STUDY TIME</h3></Col>

    </Row>
    </Container>    </div>

    <div className="desc">
      <Container>
        <Row>
          <Col><h5>this is an example of us descrining our experiemnt before it is dropped.
            I would say something here but I really do not know what to say. unless <span style={{fontStyle: "italic"}}>you know</span> something 
            that i don't. in that case, we should be switching places here. i am the information spreader with no information. its kinda, well, its
            <span style={{fontWeight: 500, color: "#C03923"}}> really odd.</span> <br /> <span style={{fontSize: 3 + 'em', textTransform: "uppercase"}}>seriously</span> <br />I have absoluely zero idea what I am saying and thats what makes
            it so beautiful. <br /><br />
            anyways heres the study:
            </h5></Col>
        </Row>
        <Row> <Alert variant="success">        <h3 style={{backgroundColor: '#00000000', color: "#0040a0"}}>Study Title</h3></Alert></Row>

        <Row> <Col><span style={{color: "#61dafb", fontSize: 0.4 + 'em'}}>Nick Ramirez (Wheaton, Neuroscience B.A.)</span></Col><Col><span style={{color: "#61dafb", fontSize: 0.4 + 'em'}}>Rasha Rahman (UCLA, Psychology B.A.)</span> </Col></Row>
        <Row>
      
        <Col><span style={{fontSize: 1.2 + 'em', lineHeight: 1,textTransform: "uppercase"}}>WHAT ARE WE TRYING TO STUDY?</span></Col>
        </Row>
       

        <Row>
       
         <Col> <Alert variant="primary"><h5>Right here I explain the gist of shit</h5></Alert></Col>
      
        </Row>
        <Row>
        <Col><span style={{fontSize: 1.2 + 'em', lineHeight: 1,textTransform: "uppercase"}}><div>HOW DID WE GET HERE?</div></span></Col>
        </Row>
        <Row>

       <Col> <Alert variant="warning"><h5>WWhy we thought of this shittt</h5></Alert></Col>
      </Row>
      <Row>
      
      <Col><span style={{fontSize: 1.2 + 'em', lineHeight: 1,textTransform: "uppercase"}}>What were our predictions?</span></Col>
      </Row>
      <Row>
       
       <Col> <Alert variant="primary"><h5>Shit, well Ill tell you how I feel about this. I think</h5></Alert></Col>
    
      </Row>
      <Row>
      <Col><span style={{fontSize: 1.2 + 'em', lineHeight: 1,textTransform: "uppercase"}}>SO HOW DO WE STUDY THIS?</span></Col>
      </Row>
      <Row>

     <Col> <Alert variant="warning"><h5>EXPLAIN our method ayy</h5></Alert></Col>
    </Row>
    <Row>
      <Col><span style={{fontSize: 1.2 + 'em', lineHeight: 1,textTransform: "uppercase"}}>SO HOW DO WE STUDY THIS?</span></Col>
      </Row>
      <Row>

     <Col> <Alert variant="warning"><h5>EXPLAIN our method ayy</h5></Alert></Col>
    </Row>

    <Row>
    <div className="caw"> 
    <span style={{marginLeft:1+'vw'}}>VISUAL DATA:</span>
      

      </div>
    </Row>

    
      </Container>
    </div>

   
    </div>
  );
}

export default Home;