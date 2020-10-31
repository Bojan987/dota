import React from 'react'
import {Bar} from 'react-chartjs-2';




export const DeathsChart = ({playerDeaths})=>{

    const totalDeaths = playerDeaths.map(death=>death.x)
    const totalWinsDeath = playerDeaths.map(wins=>wins.win)
    const totalGamesDeath = playerDeaths.map(game=>game.games)
    
    const data = {
        labels: totalDeaths.slice(0,20),
        datasets: [
          {
            label: 'Total number of games, ended with selected number of deaths',
            backgroundColor: 'rgba(42, 169, 219,0.3)',
            borderColor: 'rgba(119, 249, 253, 0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(10, 118, 151, 0.8)',
            hoverBorderColor: 'rgba(119, 249, 253, 0.8)',
            pointHitRadius:100,
            data: totalGamesDeath
            
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
                    
                    return `Win rate: ${Math.round((totalWinsDeath[tooltipItem.index]/wins)*100)} %`
                  },
                  title: function(tooltipItem,chart){
                    let deaths = tooltipItem[0].label;
                    
                    return `Deaths:  ${deaths}`
                  }
              }
          }
          }}
        />
        </div>

        </>
    )
}