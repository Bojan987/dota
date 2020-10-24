import React from "react";

 const WinLose = (props) => {
    const { bgcolor, completed,games } = props;
  
    const containerStyles = {
      height: 3,
      width: '90%',
      backgroundColor: "#e0e0de",
      // marginRight:'15px'
      
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      color: 'white',
      // fontWeight: 'bold',
      fontSize: '16px'
      
    }
  
    return (<>
    <span style={labelStyles}>{`${games}`}</span>
      <div style={containerStyles}> 
        <div style={fillerStyles}></div>
      </div>
      </>
    );
  };
  
  export default WinLose;