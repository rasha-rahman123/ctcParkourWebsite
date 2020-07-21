import React, { Component } from 'react';
import logo from '../CTC.png';
import '../App.css';
import { render } from '@testing-library/react';
import {Image, Form, InputGroup, Row, Container, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
class Scoreboard extends Component{
  constructor(){
      super();
      this.state = {
        search: '',
          users: [],
          url: 'https://www.mc-heads.net/avatar/'

      }
  }


  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,16)});
  }

  componentDidMount() {
    this.getUsers();


  }

  getUsers = _ => {
    fetch('/stats')
    .then(response => response.json())
    .then(({data}) => {
      var temp = data;

      this.setState({users: temp});

      console.log(this.state.users);
    })

    .catch(err => console.error(err))
  }


renderUser = ({UUID, NAME, TOPSCORE,RED, LIME, BLUE, BLACK, WHITE, GLASS, YELLOW, PINK, PURPLE, ORANGE}) =><div style={{marginTop: 3 + 'vw'}}><Container><Row><Col><div className="player" key={UUID}><h3 style={{color: '#62a1ff'}}><span style={{fontSize: 0.8 + 'em', opacity: 0.8, justifyContent: 'center', color: 'yellow'}}>@ </span>{NAME}</h3><img src={this.state.url + NAME}/> <Row>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{RED}s</Tooltip>}><div class="box red"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{LIME}s</Tooltip>}><div class="box green"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{BLUE}s</Tooltip>}><div class="box blue"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{BLACK}s</Tooltip>}><div class="box black"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{WHITE}s</Tooltip>}><div class="box white"></div></OverlayTrigger></Col>
 </Row>
<Row>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{GLASS}s</Tooltip>}><div class="box glass"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{YELLOW}s</Tooltip>}><div class="box yellow"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{PINK}s</Tooltip>}><div class="box pink"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{PURPLE}s</Tooltip>}><div class="box purple"></div></OverlayTrigger></Col>
<Col sm={2}><OverlayTrigger  placement='bottom' overlay={<Tooltip id="tooltip-disabled">{ORANGE}s</Tooltip>}><div class="box orange"></div></OverlayTrigger></Col></Row></div>

</Col><Col><Row><div  className="player" key={UUID}> <div className="score"><p style={{fontSize: 1 + 'em',marginTop: 1 + 'em',textAlign: "right", color: 'pearl'}}><h2 style={{marginBottom: -1.5 + 'vw',
                                                      marginTop: 1.7 + 'vw'}}>

                                                        {TOPSCORE + " PTS"}

                                                        </h2> <br /> <span style={{opacity: 0.5, fontWeight: 200}}>

                                                          {"HIGH SCORE"}

                                                          </span></p></div>
                                                      <br /> <div className="time"> <p style={{fontSize: 1 + 'em',marginTop: 1 + 'em',textAlign: "right", color: '#ffb957'}}>
                                                      <h2 style={{marginBottom: -1.4 + 'vw', marginTop: -2.3 + 'vw'}}>

                                                        {Math.round((1 / (TOPSCORE / 10000)) * 100) / 100 + "s"}

                                                        </h2>
                                                       <br /><span style={{opacity: 0.8,fontWeight: 200}}>

                                                         {"AVERAGE TIME PER LEVEL"}

                                                         </span></p></div>
                  </div>
 </Row></Col></Row>
 </Container> </div>
  render() {

    let filteredContacts = this.state.users.filter(
        ({UUID, NAME, TOPSCORE,RED, LIME, BLUE, BLACK, WHITE, GLASS, YELLOW, PINK, PURPLE, ORANGE}) => {
            return NAME.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }

    );

    const { users} = this.state;
  return (
    <Container>
    <div className="App">
          

      <Row><h1>LEADERBOARDS</h1></Row>
      <Container><Row><div className="Notice" style={{marginTop:  + 'vw'}}>"PARKOUR STUDY" <br /><span style={{fontSize:0.7 + 'em', marginTop: -0.5 + 'vw', color: '#ffb957'}}> ENDS 08/21</span></div></Row>
      <Row> <div className="Notice" style={{marginTop:-0.8 + 'vw'}}>FIND PLAYER<Form.Group>
      <Form.Control size="md" type="text" placeholder="" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
</Form.Group></div>
      </Row></Container>

      <div className="list">


        <h6> {filteredContacts.slice(0,3).map(this.renderUser)}</h6></div>


      </div>
      </Container>
  );
  }
}

export default Scoreboard;
