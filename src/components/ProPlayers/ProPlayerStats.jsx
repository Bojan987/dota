import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { DeathsChart } from '../../Charts/DeathsChart';
import { getPlayer, getPlayerDeaths, getPlayerKills,getPlayerAssists, getPlayerRecentMatches, getPlayerStats, getPlayerTeamMates} from '../../services';
import {PlayerHeader} from './PlayerHeader'
import {PlayerTeamMates} from './PlayerTeamMates'
import {Row,Col } from "react-bootstrap";
import './ProPlayerStats.css'
import { DoughnutStatChart } from '../../Charts/DoughnutStatChart';
import { AssistsChart } from '../../Charts/AssistsChart';
import { KillsChart } from '../../Charts/KillsChart';

export const ProPlayerStats = ()=>{

   const [playerDeaths,setPlayerDeaths]=useState([])
   const [playerKills,setPlayerKills]=useState([])
   const [playerAssists,setPlayerAssists] = useState([])
   const [playerWinRate,setPlayerWinRate] = useState(0)
   const [playerInfo,setPlayerInfo] = useState(undefined)
   const [playerMates, setPlayerMates] = useState(undefined)
   const [playerRecentMatches, setPlayerRecentMAtches] = useState(undefined)
   const [chartSelect,setChartSelect] = useState(undefined)
   const playerId = useParams().player


   

   useEffect(()=>{
       getPlayerDeaths(playerId).then(res=>{
           
           setPlayerDeaths(res.data)
       })
       getPlayerKills(playerId).then(res=>{
           
           setPlayerKills(res.data)
       })

       getPlayerAssists(playerId).then(res=>{
           
        setPlayerAssists(res.data)
    })

       getPlayerStats(playerId).then(res=>{
        
        setPlayerWinRate(res.data)
       })
       getPlayer(playerId).then(res=>{
           
           setPlayerInfo(res.data)
       })

       getPlayerTeamMates(playerId).then(res=>{
       
        setPlayerMates(res.data.slice(1,6))

       })

       getPlayerRecentMatches(playerId).then(res=>{

        
       
        
        let chartData = res.data.reduce((acumulator ,currentMatch)=>{

            if(currentMatch.radiant_win) {
                acumulator.radiantWins +=1
                acumulator.direLoses +=1
            }
            else {
                acumulator.radiantLoses +=1
                acumulator.direWins +=1
            }
            acumulator.kills += currentMatch.kills
            acumulator.deaths += currentMatch.deaths
            acumulator.assists += currentMatch.assists

            return acumulator
         
        },{
            radiantWins:0,
            radiantLoses:0,
            direWins:0 ,
            direLoses:0,
            kills:0,
            deaths: 0,
            assists: 0
           } )
        setPlayerRecentMAtches(chartData)
       })

   },[playerId])

   const handleClick = (e)=>{
      
    console.log(e.target.textContent)
    if(e.target.textContent === 'Deaths'){
        setChartSelect('Deaths')
    }
    if(e.target.textContent === 'Kills'){
        setChartSelect('Kills')
    }
    if(e.target.textContent === 'Assists'){
        setChartSelect('Assists')
    }

   }
    return (
        <div>
            <Row>
                { playerInfo &&
                <PlayerHeader playerWinRate={playerWinRate} playerInfo={playerInfo}/>
            }
            </Row>
            <Row className='doghnutCharts'>
                <Col md={4}>
                {playerRecentMatches && <DoughnutStatChart 
                data1={playerRecentMatches.radiantWins} 
                data2={playerRecentMatches.radiantLoses} 
                chartText={ {title:'Win/Lose as Radiant in last 20 games',params:['Wins','Lose'],legend:'W/L Ratio'}}/> }
                </Col>

                <Col md={4}>
                {playerRecentMatches && <DoughnutStatChart 
                data1={playerRecentMatches.direWins} 
                data2={playerRecentMatches.direLoses} 
                chartText={ {title:'Win/Lose as Dire in last 20 games',params:['Wins','Lose'],legend:'W/L Ratio'}}/> }
                </Col >
                <Col md={4}>{playerRecentMatches && <DoughnutStatChart 
                data1={playerRecentMatches.kills} 
                data2={playerRecentMatches.deaths} 
                chartText={ {title:'Kills/Deaths in last 20 games',params:['Kills','Deaths'],legend:'K/D Ratio'}}/> }</Col>
               
            </Row>
            <hr/>
            <Row className='Charts'>
                <Col md={6} >
                    <div className='breadcrumbWrapp' >
                        <p className='deathsChart' onClick={handleClick}>Deaths</p>
                        <p className='killsChart'onClick={handleClick}>Kills</p>
                        <p className='assistsChart'onClick={handleClick}>Assists</p>
                    </div>
                   {chartSelect === undefined && <DeathsChart playerDeaths={playerDeaths} />}
                   {chartSelect === 'Deaths' && <DeathsChart playerDeaths={playerDeaths} />}
                   {chartSelect ==='Kills' && <KillsChart playerKills={playerKills} />}
                   {chartSelect ==='Assists' && <AssistsChart playerAssists={playerAssists} />}
                    {/* <KillsChart playerKills={playerKills} /> */}
                </Col>
                <Col md={6}>
                    { playerMates &&
                    <PlayerTeamMates playerMates={playerMates}/>
                    }
                </Col>
            </Row>
            
        </div>
    )
}