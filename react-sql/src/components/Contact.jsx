import React, {Component} from "react";
import {Row, Container, Alert, Col, Form, TextArea, Button} from "react-bootstrap";
import io from "socket.io-client";
import '../contact.css';


const socket = io.connect("http://localhost:4000");


class Contact extends Component {
  constructor() {
    super();
    this.state = { msg: "", chat: [], nickname: "guest", comment: "" , id: "", ColorHolder : '#00BCD4'};
  }

  componentDidMount() {
    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({
 
      ColorHolder : ColorCode
     
    })
    socket.on("chat message", ({ ColorHolder, id, nickname, msg }) => {
      this.setState({
        chat: [...this.state.chat, { ColorHolder, id, nickname, msg }]
      });
    });
  }

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value.substr(0,30) });
   
  };

  onMessageSubmit = () => {
    const { ColorHolder, id, nickname, msg } = this.state;
    if(this.state.msg.length > 0 && this.state.nickname.length > 3 && !(this.state.msg.includes('fuck')) || !(this.state.msg.includes( 'FUCK' || 'fUCK' || 'shit' || 'ass' || 'nigger' || 'nigga' || 'bitch' || 'hoe' || 'slut' || 'dick' || 'vagina' || 'pussy' || 'cunt' || 'cock' ))){
    socket.emit("chat message", { ColorHolder, id, nickname, msg });

    this.setState({comment : "Message Sent"});
  } else if(this.state.nickname.length > 3 && !this.state.msg.includes('fuck' || 'FUCK' || 'fUCK' || 'shit' || 'ass' || 'nigger' || 'nigga' || 'bitch' || 'hoe' || 'slut' || 'dick' || 'vagina' || 'pussy' || 'cunt' || 'cock' )) {
    this.setState({comment : "Must Say Something To Send!"});
  } else if(this.state.nickname.length < 3 && !this.state.msg.includes('fuck' || 'FUCK' || 'fUCK' || 'shit' || 'ass' || 'nigger' || 'nigga' || 'bitch' || 'hoe' || 'slut' || 'dick' || 'vagina' || 'pussy' || 'cunt' || 'cock'  ))
  {
    this.setState({comment : "Please Login!"});
  } else if(this.state.msg.includes('fuck' || 'FUCK' || 'fUCK' || 'shit' || 'ass' || 'nigger' || 'nigga' || 'bitch' || 'hoe' || 'slut' || 'dick' || 'vagina' || 'pussy' || 'cunt' || 'cock' ))
  {
    this.setState({msg : "I like Saying Bad Words"})
    socket.emit("chat message", { ColorHolder, id, nickname, msg });

    this.setState({comment : "Message Sent"});
  }
    this.setState({ msg: "" });
  };

  renderChat() {
    const { chat } = this.state;
    return chat.map(({ ColorHolder, id, nickname, msg }, idx) => (
   
      <div key={idx}>
        <Container fluid>
        <Row>
        <span style={{ color: "white", fontWeight: 500, fontSize: 0.4 + 'em' , color: 'yellow'}}> <span style={{fontWeight: 500, fontSize: 2 + 'em' , color: ColorHolder}}>{" \["}{id.substr(0,4)}{"\]"} </span> {" \("}{nickname}{"\) "} </span>
        </Row>
        <Row>
        <span style={{marginTop: -0.9 + 'vh', fontSize: 0.8 + 'em'}}>{msg.toLowerCase()}</span>
        </Row>
        </Container>
      </div>
     
      
    ));
  }

  render() {
    
    return (
      <div>
 
        <div className="chatout"><div className="chatbox" style={{width: 60 + 'vh', height: 70 + 'vh', borderRadius: 10 + 'px'}}> <div style={{height: 50 + 'vh', marginTop: 1 + 'vw'}}>{this.renderChat()}</div><Row>
         <Col> <Form.Group>
      <Form.Control size="md" type="text" placeholder="type and chat with us" name="msg" value={this.state.msg} onChange={e => this.onTextChange(e)}/>
</Form.Group> 
{/* <input
          name="msg"
          onChange={e => this.onTextChange(e)}
          value={this.state.msg}
        /> */}
        </Col>
     
      </Row> <Row>
        <button onClick={this.onMessageSubmit}>>>></button>
        </Row></div> </div> 
       
          {/* <Col>        <span>name: </span></Col>
          <Col>   <input
          name="nickname"
          onChange={e => this.onTextChange(e)}
          value={this.state.nickname}
        /></Col> */}
      
<span style={{color: 'red', fontSize: 0.5 + 'em', textDecoration: 'italic'}}> {this.state.comment}</span>
      </div>
      
      
    );
  }
}

export default Contact;