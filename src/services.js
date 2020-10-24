import axios from "axios";

let config = {
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "5f63daa75313511c55fc97b7",
    }
  };

export const postUser = (userInfo) => {
   let data = JSON.stringify(userInfo)

  return axios.post('https://gamestorage-9cd1.restdb.io/rest/testcollection',data,config);
};






export const loginUser = ()=>{
    
    return axios.get('https://gamestorage-9cd1.restdb.io/rest/testcollection',config)
} 

export const getImages=()=>{
  return axios.get('https://gamestorage-9cd1.restdb.io/media/5f693ab3db00907500005feb',config) 
}

export const postScores = (scores) => {
  let data = JSON.stringify(scores)

 return axios.post('https://gamestorage-9cd1.restdb.io/rest/scores',data,config);
}

export const getScores = () => {
 return axios.get('https://gamestorage-9cd1.restdb.io/rest/scores',config);
}

export const postScoresHeroHunt = (scores) => {
  let data = JSON.stringify(scores)

 return axios.post('https://gamestorage-9cd1.restdb.io/rest/herohuntscore',data,config);
}

export const getScoresHeroHunt = () => {
 return axios.get('https://gamestorage-9cd1.restdb.io/rest/herohuntscore',config);
}

export const getDotaTeams = ()=>{
    return axios.get('https://api.opendota.com/api/teams')
}

export const getDotaTeam = (teamId)=>{
  return axios.get(`https://api.opendota.com/api/teams/${teamId}`)
}

export const getTeamPlayers = (teamId)=>{
  return axios.get(`https://api.opendota.com/api/teams/${teamId}/players`)
}

export const getPlayer = (playerId)=>{
  return axios.get(`https://api.opendota.com/api/players/${playerId}`)
}

export const getDotainfos = ()=>{
  return axios.get('https://api.opendota.com/api/heroStats/')
}

export const getTeamHeroes = (teamId) =>{
  return axios.get(`https://api.opendota.com/api/teams/${teamId}/heroes`)
}
export const getTeamMatches = (teamId) =>{
  return axios.get(`https://api.opendota.com/api/teams/${teamId}/matches`)
}
