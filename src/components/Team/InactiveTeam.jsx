import React from "react";
import { Card,Row,Col } from "react-bootstrap";
import WinLose from "../../Charts/WinLose"
export const InactiveTeam = ({inactivePlayers,total}) => {
  return (
    <div>
           { inactivePlayers.length !==0 && inactivePlayers.map((player) => {

return (

<Card.Body key={player.account_id} className='cardBody'>
 <Row className="playerRow">
   <Col xs={6}>
     <div className="d-flex  playerWrap">
       <img src={player.img} className="playerImage" alt='Avatar' />
       <p className="playerName">{player.name}</p>
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

}

    </div>
  );
}
