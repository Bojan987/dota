import React from 'react'
import { useEffect } from 'react'
import { Card, Col, Row } from "react-bootstrap";
import WinLose from "../../Charts/WinLose";
import ErrorImage from './ErrorImage/tenor.gif'

export const FavoriteHeroes = ({favoriteHeroes})=>{
    
    
    // console.log(favoriteHeroes)
  
    return (
    <div className='cardWrap'>
        <p>Favorite Heroes</p>
        <Card className="cardbg" >
            
      <Card.Header className="CardHeader">
        <Row>
          <Col xs={6}>
            <div>Name</div>
          </Col>
          <Col>
            <Row className='d-flex chartRow'>
              <div className="leftBar">Games</div>
              <div className="rightBar">Win Rate</div>
            </Row>
          </Col>
        </Row>
      </Card.Header>
      { favoriteHeroes.length !==0 && favoriteHeroes[0].img ? favoriteHeroes.map((hero) => {

           return (
          
          <Card.Body key={hero.hero_id} className='cardBody'>
            <Row className="playerRow">
              <Col xs={6}>
                <div className="d-flex  playerWrap">
                  <img src={`https://api.opendota.com${hero.img}`} className="playerImage" alt='Hero' />
                  <p className="playerName">{hero.localized_name}</p>
                </div>
              </Col>
              <Col>
                {/* <div className="d-flex justify-content-between barDiv"> */}
                <Row className='d-flex chartRow'>
                  <div className="leftBar">
                    <WinLose bgcolor={"#6a1b9a"} completed={((Number(hero.games_played)/favoriteHeroes[0].games_played)*100).toFixed(1)} games={hero.games_played}/>
                  </div>
                  <div className="rightBar">
                    <WinLose bgcolor={"#6a1b9a"} completed={((hero.wins/hero.games_played)*100).toFixed(1)} games={((hero.wins/hero.games_played)*100).toFixed(1)}/>
                  </div>
                  </Row>
                {/* </div> */}
              </Col>
            </Row>
            
          </Card.Body>
          
        )
        
      })
      :<image src={ErrorImage}/>
    }
    </Card>
        
    </div>
    )
}