import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import WinLose from "../../Charts/WinLose";
import "./team.scss";
import { InactiveTeam } from "./InactiveTeam";
import { Link } from "react-router-dom";
import ErrorImage from "./ErrorImage/ErrorImage.jpg";

export const PlayerCard = ({ activePlayers,teamInfo,playerFullinfo,inactivePlayers}) => {
  
  let playerActivity = ['Current players','Inactive players']
  const total = teamInfo.wins + teamInfo.losses;
  
  return (<div className='cardWrap'>
    <p className='playerList'>{activePlayers.length !==0 ? playerActivity[0] : playerActivity[1]}</p>
    <Card className="cardbg" >
      <Card.Header className="CardHeader">
        <Row>
          <Col xs={6}>
            <div className='par'>Name</div>
          </Col>
          <Col>
          <Row className='d-flex chartRow'>
              <div className="leftBar par">Games</div>
              <div className="rightBar par">Win Rate</div>
            </Row>
          </Col>
        </Row>
      </Card.Header>
      { activePlayers.length !==0 ? playerFullinfo.map((player) => {

           return (
          
          <Card.Body key={player.account_id} className='cardBody'>
            <Row className="playerRow">
              <Col xs={6}>
                <div className="d-flex  playerWrap">
                  <img src={player.avatarfull ? player.avatarfull : ErrorImage} className="playerImage" alt='Avatar' />
                  <Link to={`/player/${player.account_id}`}><p className="playerName par">{`${player.name}     >`}</p></Link>
                </div>
              </Col>
              <Col>
              <Row className='d-flex chartRow'>
                  <div className="leftBar">
                    <WinLose bgcolor={"#6a1b9a"} completed={((Number(player.games_played)/total)*100).toFixed(1)} games={player.games_played}/>
                  </div>
                  <div className="rightBar">
                    <WinLose bgcolor={"#6a1b9a"} completed={((player.wins/player.games_played)*100).toFixed(1)} games={((player.wins/player.games_played)*100).toFixed(1)}/>
                  </div>
                </Row>
              </Col>
            </Row>
            
          </Card.Body>
          
        )
        
      })
      : <InactiveTeam inactivePlayers={inactivePlayers} total={total}/>
    }
    </Card>
    </div>
  );
};
