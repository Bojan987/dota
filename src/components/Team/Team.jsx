import React, { useEffect, useState } from "react";
import {Row,Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  getDotainfos,
  getDotaTeam,
  getPlayer,
  getTeamHeroes,
  getTeamMatches,
  getTeamPlayers,
} from "../../services";
import { mergeArrays } from "../../utilities/mergeArrays";
import "./team.scss";
import {  PlayerCard } from "./PlayerCard";
import { TeamHeader } from "./TeamHeader";

import { FavoriteHeroes } from "./FavoriteHeroes";
import { TeamMatches } from "./TeamMatches";

export const Team = () => {
  const [teamInfo, setTeamInfo] = useState([]);
  const [activePlayers, setActivePlayers] = useState([]);
  const [inactivePlayers,setInactivePlayers] = useState([])
  const [proPlayer, setProPlayer] = useState([]);
  const [proPlayerInactive, setProPlayerInactive] = useState([]);
  const [playerFullinfo, setPlayerFullInfo] = useState([]);
  const [favoriteHeroes, setFavoriteHeroes] = useState([]);
  const [allHeroes, setAllHeroes] = useState([]);
  const [matches,setMatches] = useState([])

  const teamId = Number(useParams().team);

  useEffect(() => {
    getDotaTeam(teamId).then((res) => {
      
      setTeamInfo(res.data);
    });
    getTeamPlayers(teamId).then((res) => {
    
      setActivePlayers(res.data.filter((el) => el.is_current_team_member));
      setInactivePlayers(res.data.filter((el) => !el.is_current_team_member).slice(0,5))
    });
    getTeamHeroes(teamId).then((res) => {
      const topFifteen = res.data.slice(0, 10);
     
      setFavoriteHeroes(topFifteen);
    });
    getTeamMatches(teamId).then(res=>{
      
      setMatches(res.data.slice(0,17))
    })
  }, [teamId]);


  useEffect(() => {
    getDotainfos().then((res) => {
      
      setAllHeroes(res.data);
    });
    
  }, []);

  useEffect(() => {
    favoriteHeroes.forEach((hero) => {
      allHeroes.forEach((el) => {
        if (el.hero_id === hero.hero_id) {
          hero.img = el.img;
        }
      });
    });
    

    if(inactivePlayers.length !==0 && proPlayerInactive.length !== 0){
        inactivePlayers.forEach((inactive) => {
            proPlayerInactive.forEach((el) => {
              if (el.account_id === inactive.account_id) {
                inactive.img = el.avatarfull
                ;
              }
            });
          });
    }
   
  }, [favoriteHeroes, allHeroes,inactivePlayers,proPlayerInactive]);

  useEffect(() => {
    activePlayers.forEach((element) => {
      getPlayer(element.account_id).then((res) => {
        
        setProPlayer((prev) => {
          return [...prev, res.data.profile];
        });
      });
    });

   
  }, [activePlayers]);


  useEffect(()=>{
    inactivePlayers.forEach((element) => {
        getPlayer(element.account_id).then((res) => {
          
          setProPlayerInactive((prev) => {
            return [...prev, res.data.profile];
          });
        });
      })
  },[inactivePlayers])

  useEffect(() => {
    if (proPlayer.length !== 0 && activePlayers !== 0) {
      
      setPlayerFullInfo(mergeArrays(proPlayer, activePlayers));
    }
// eslint-disable-next-line
  }, [proPlayer]);


  return (
    <>
    
     
      <TeamHeader teamInfo={teamInfo} />
      <Row>
      <Col  md={12} lg={6}>
        <TeamMatches matches={matches}/>
      </Col>
        <Col>
      <PlayerCard
        activePlayers={activePlayers}
        inactivePlayers={inactivePlayers}
        teamInfo={teamInfo}
        playerFullinfo={playerFullinfo}
      />
      {favoriteHeroes && <FavoriteHeroes favoriteHeroes={favoriteHeroes} />}
      </Col>
     
      </Row>
    </>
  );
};
