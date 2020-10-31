import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Col, Row} from "react-bootstrap";
import '../Team/teamHeader.css'
export const PlayerHeader = ({playerWinRate,playerInfo})=>{
    const [playerMMR, setPlayerMMR] = useState(0)

    useEffect(()=>{
        
        let Mmr = playerInfo.mmr_estimate ? playerInfo.mmr_estimate.estimate : 0
        setPlayerMMR(Mmr)
    },[playerInfo])
   
    
    
    return (
        <Container>
            
        <Row className='teamHeader'>
            
            <Col xs={12} className='colStats'>
                <Row className='teamStats'><h3 style={{fontWeight:'600'}}>{playerInfo.profile.name}</h3></Row>
                <Row className='teamStats'>
                    <div >WINS</div>
                    <div >LOSES</div>
                    <div >MMR</div>  
                </Row>
                <Row className='teamStats'>
                    <div className='teamWins'>{playerWinRate.win}</div>
                    <div className='teamLosses'>{playerWinRate.lose}</div>
    <div className='teamRating'>{playerMMR}</div> 
                </Row>
            </Col>
        </Row>
        <hr/>
        </Container>
    )
}