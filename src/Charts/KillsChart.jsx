import React from 'react'
import {Bar} from 'react-chartjs-2';




export const KillsChart = ({playerKills})=>{

    const totalKills = playerKills.map(death=>death.x)
    const totalWinsKills = playerKills.map(wins=>wins.win)
    const totalGamesKills = playerKills.map(game=>game.games)
    
    const data = {
        labels: totalKills.slice(0,20),
        datasets: [
          {
            label: 'Total games ended with selected Kills',
            backgroundColor: 'rgba(42, 169, 219,0.3)',
            borderColor: 'rgba(119, 249, 253, 0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(10, 118, 151, 0.8)',
            hoverBorderColor: 'rgba(119, 249, 253, 0.8)',
            pointHitRadius:100,
            data: totalGamesKills
            
          }
        ]
      };

    return (
        <>
        <div className='barChar'>
            <Bar
          data={data}
          width={400}
          height={380}
          options={{
            maintainAspectRatio: false,
            tooltips: {
              custom: function(tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
              },
              callbacks: {
            
                  afterLabel: function (tooltipItem,chart){
                    let wins = tooltipItem.value
                    
                    return `Win rate: ${Math.round((totalWinsKills[tooltipItem.index]/wins)*100)} %`
                  },
                  title: function(tooltipItem,chart){
                    let kills = tooltipItem[0].label;
                    
                    return `Kills:  ${kills}`
                  }
              }
          }
          }}
        />
        </div>
        </>
    )
}