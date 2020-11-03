import React from "react";
import { Card,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WinLose from "../../Charts/WinLose"
import ErrorImage from "./ErrorImage/ErrorImage.jpg";

export const InactiveTeam = ({inactivePlayers,total}) => {
  return (
    <div>
           { inactivePlayers.length !==0 && inactivePlayers.map((player) => {

return (

<Card.Body key={player.account_id} className='cardBody'>
 <Row className="playerRow">
   <Col xs={6}>
     <div className="d-flex  playerWrap">
       <img src={player.img ? player.img : ErrorImage } className="playerImage" alt='Avatar' />
       <Link to={`/player/${player.account_id}`}><p className="playerName par">{`${player.name} >`}</p></Link>
     </div>
   </Col>
   <Col>
    <Row className='d-flex chartRow'>
       <div className="leftBar">
         <WinLose bgcolor={"#6a1b9a"} completed={((Number(player.games_played)/total)*100).toFixed(1)} games={player.games_played>total ? total : player.games_played}/>
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

}

    </div>
  );
}
