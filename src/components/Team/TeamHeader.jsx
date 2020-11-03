import React from 'react'
import { Container, Col, Row,Image} from "react-bootstrap";
import './teamHeader.css'
import ErrorImage from "./ErrorImage/ErrorImage.jpg";

export const TeamHeader = ({teamInfo})=>{
    
    const teamRating =teamInfo.rating ? Math.floor((teamInfo.rating)):0
    return (
        <Container>
            
        <Row className='teamHeader'>
            <Col md={2} xs={12} className='colImage'>
                <Image src={teamInfo.logo_url ? teamInfo.logo_url : ErrorImage } alt='Team Logo' className='teamLogo'></Image>
            </Col>
            <Col md={10} xs={12} className='colStats'>
                <Row className='teamStats'><h3 style={{fontWeight:'600'}}>{teamInfo.name}</h3></Row>
                <Row className='teamStats'>
                    <div >WINS</div>
                    <div >LOSES</div>
                    <div >RATING</div>  
                </Row>
                <Row className='teamStats'>
                    <div className='teamWins'>{teamInfo.wins}</div>
                    <div className='teamLosses'>{teamInfo.losses}</div>
                    <div className='teamRating'>{teamRating}</div> 
                </Row>
            </Col>
        </Row>
        <hr/>
        </Container>
    )
}