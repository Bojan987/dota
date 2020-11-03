import React from "react";

 const WinLose = (props) => {
    const { bgcolor, completed,games } = props;
  
    const containerStyles = {
      height: 3,
      width: '90%',
      backgroundColor: "#e0e0de",
      
      
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed<=100 ? completed : 100}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      color: 'white',
        
    }
  
    return (<>
    <span className='par' style={labelStyles}>{games}</span>
      <div style={containerStyles}> 
        <div style={fillerStyles}></div>
      </div>
      </>
    );
  };
  
  export default WinLose;