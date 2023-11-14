import React from 'react'
import Player from './Player'
import myPlayers from './Players'

const myStyle = {
    flexWrap: "wrap"
}

const PlayerList = () => {
  return (
    <div className='d-flex' style={myStyle}>   
    {myPlayers.map((playerJSON) => {
        return (
        <>
        <Player team ={playerJSON.team} 
        name={playerJSON.name} 
        jerseyNumber={playerJSON.jerseyNumber} 
        age={playerJSON.age} ImgURL={playerJSON.ImgURL}/> 
        </>
        );
    })};   
    </div>
  )
}
export default PlayerList