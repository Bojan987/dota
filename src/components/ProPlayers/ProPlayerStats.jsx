import React from 'react'
import { useParams } from "react-router-dom";

export const ProPlayerStats = ()=>{
   const playerId = useParams().player
   console.log(playerId)
    return (
        <div>
            player stats
        </div>
    )
}