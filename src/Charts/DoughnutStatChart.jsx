import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import '../components/ProPlayers/ProPlayerStats.css'
export const DoughnutStatChart = ({data1,data2,chartText})=>{
    
    const data = {
        labels: [
            chartText.params[0],
            chartText.params[1]
            
        ],
        datasets: [{
            data: [data1, data2],
            backgroundColor: [
                'rgba(42, 169, 219,0.3)',
                'rgba(150, 18, 18,0.8)'
            
            ],
            hoverBackgroundColor: [
                'rgba(10, 118, 151, 0.8)',
                'rgba(179, 65, 65, 0.8)'
            
            ],
            borderColor: 'rgba(119, 249, 253, 0.8)'
        }]
    };

    
    return (
        <>
         <div className='d-flex doghnutChart'>
    <p className='doghnutTitle'>{chartText.title}</p>
        <Doughnut data={data} options={{
            
            rotation:  Math.PI,
            circumference:  Math.PI,
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            title: {
              display: true,
              text: `${chartText.legend} ${(data1/data2).toFixed(1)}`,
              position: 'bottom'
           }
            // cutoutPercentage: 95
        
        }}
         width={4}
        height={1}/>
      </div>
        </>
    )
}