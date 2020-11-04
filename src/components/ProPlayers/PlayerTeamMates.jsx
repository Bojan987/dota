
import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import WinLose from "../../Charts/WinLose";
import "../Team/team.scss";


export const PlayerTeamMates = ({playerMates}) => {


  return (<div className='cardWrap'>
    <p className='playerList'>Players Played With</p>
    <Card className="cardbg" >
      <Card.Header className="CardHeader">
        <Row>
          <Col xs={6}>
            <div className='par'>Name</div>
          </Col>
          <Col>
          <Row className='d-flex chartRow'>
              <div className="leftBar par">Games With</div>
              <div className="rightBar par">Win Rate</div>
            </Row>
          </Col>
        </Row>
      </Card.Header>
      { playerMates.lenght !==0 && playerMates.map((player) => {

           return (
          
          <Card.Body key={player.account_id} className='cardBody'>
            <Row className="playerRow">
              <Col xs={6}>
                <div className="d-flex  playerWrap">
                  <img src={player.avatarfull} className="playerImage" alt='Avatar' />
                  <a href={player.profileurl}><p className="playerName par">{`${player.name}     >`}</p></a>
                </div>
              </Col>
              <Col>
              <Row className='d-flex chartRow'>
                  <div className="leftBar">
                    <WinLose bgcolor={"#6a1b9a"} completed={((Number(player.with_games)/playerMates[0].games)*100).toFixed(1)} games={player.with_games}/>
                  </div>
                  <div className="rightBar">
                    <WinLose bgcolor={"#6a1b9a"} completed={((player.with_win/player.with_games)*100).toFixed(1)} games={((player.with_win/player.with_games)*100).toFixed(1)}/>
                  </div>
                </Row>
              </Col>
            </Row>
            
          </Card.Body>
          
        )
        
      })
      
    }
    </Card>
    </div>
  );
};