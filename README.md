# Dota 2 - teams / players / statistcs
https://dota2-teams.netlify.app/

​
### Description

 1. Home Page 
    - Pick a Dota 2 team, from selection of currently top 15 teams 
 2. Team Page 
    - Team info / last 15 matches played in Big Leagues 
    - Current players (active | inactive)  / click on player to see player stats
    - 10 favorite/most played heroes - total games played with each corresponding player ( win rate )

 3. Player Page 
    - Player info / Statistics of selected player shown in charts  
    - List of 5 players, the selected player played with the most 


### Technologies 

1. react 16.14.5

2. react-router-dom 16.14.5

4. axios 0.20.0

5. Bootstrap 4.7.0

6. font-awesome 4.7.0

7. chart.js

8. node-sass

9. Open Dota API 

​

### Folder structure :

​

1. Components

    - Team :
      1. Favorite Heroes : 10 most played heroes and their respective statistcs 
      2. Inactive Team : List of players that used to play for this team , since team is  currently not having active players
      3. Player Card : List of active players and their respective statistics 
      4. Team Header : Team name , their current Win - Lose ratio and current rating
      5. Team Matches : Teams 15 last matches played in Dota leagues (duration, result, opponent)
      

    - Pro Players
      1. Player Header : Player Name with respective statistics of that player ( win , lose , MMR)
      2. Player Teammates : Players mostly played with ( total games - win rate )
      3. Pro Player Stats : Player Statistcs shown in Charts ( Win|Lose as Radiant team , Win|Lose as Dire Team, Kills|Deaths in last 20 games) 
        - Bar Chart showing Total games ended with selected Deaths/Kills/Assists

    - Slide : Homepage single slide 
      Slider : Complete slider consisted of slides 

    - Utilities : 
     
      1. Use Tilt : Function for Slide to tilt on hover 
      2. Merge Arrays : Function for merging data collected from Dota Api for simpler manipulation

    - Services : Communication with Open Dota API
      
      


​

### Installation 

​

Firstly install  NodeJS (v12.14.0 or newer)



    1. Clone the Git Repository

    2. npm install 
    
    3. If necessary : 
        - npm install react-router-dom
        - npm install axios
        - npm install react-bootstrap bootstrap
        - npm i --save @fortawesome/fontawesome-svg-core
        - npm install --save @fortawesome/free-solid-svg-icons
        - npm install --save @fortawesome/react-fontawesome
        - npm install --save @fortawesome/free-brands-svg-icons
        - npm install --save @fortawesome/free-regular-svg-icons
        - npm install chart.js --save
        - npm install node-sass

​
`

​

### Starting the project 



    1. ```npm start```

        