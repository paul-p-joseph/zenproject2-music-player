import React from 'react'

function PlayList({songList,selectTrack}) {


    
    
    return (
        <div className="playlist-container">

            <div className="playlist-header">
                <h1  className="pltext"> ෴ PLAY LIST</h1> 
            </div>

            <div className="song-list-container">
                <ul className="song-list" >

                   {
                      songList.map((song,i) => 
                        
                        <li className="list-item" value={i} key={i} onClick={selectTrack} >{i+1}. {song.title} - {song.artist}</li>
                        
                    
                       
                       )
                      
                      
                   }
                   
                   
                </ul>
            </div>

        </div>
    )
}

export default PlayList
