import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import Slider from './Slider';
import Volume from './Volume';
import PlayList from './PlayList';


function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration,setDuration] = useState(0);
    const [currentTime,setCurrentTime] = useState(0);
    const [stateVol, setStateVol] = useState(0.3);

    const songList = props.songs;

    const handleVol = (q) =>{
        setStateVol(q);
        audioEl.current.volume = q;
       
    }
    
  
   

    const [percentage, setPercentage] = useState(0);
    const onChange = (e) => {
        const audio = audioEl.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
       

    }


    useEffect(() => {
        audioEl.current.volume = stateVol;

        if(isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const selectTrack =  ((e)=>{
    
        props.setCurrentSongIndex(e.target.value);
        setIsPlaying(audioEl.current.play());
        
         }
    )


    const SkipSong = (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    const getCurrentDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration ) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    function secondsToHms(seconds) {
    
        if(!seconds) return '00m 00s'
    
        let duration = seconds
        let hours = duration / 3600
        duration = duration % 3600
    
        let min = parseInt(duration / 60)
        duration = duration % 60
    
        let sec = parseInt(duration)
    
        if (sec < 10) {
            sec = `0${sec}`
        }
        if (min < 10) {
            min = `0${min}`
        }
    
        if (parseInt(hours, 10) > 0) {
            return `${parseInt(hours, 10)}h ${min}m ${sec}s` 
        } else if (min == 0) {
          return `00m ${sec}s`
        } else {
            return `${min}m ${sec}s` 
        }
        
        }

    return (
        <div className="c-player">

            <div className="player-container">
            <audio src={props.songs[props.currentSongIndex].src} ref = {audioEl}

                  onLoadedData = {(e) => {
                    setDuration(e.currentTarget.duration.toFixed(2))
                }}

                   onTimeUpdate = {getCurrentDuration}

                ></audio>

            <h4>PLAYING NOW</h4>

            <PlayerDetails song={props.songs[props.currentSongIndex]} />

            <Slider onChange={onChange} percentage={percentage} />

            <div className = "timer-cover">
                <div className = "timer">{secondsToHms(currentTime)}</div>
                <div className =  "timer">{secondsToHms(duration)}</div>
            </div>

            <PlayerControls isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} SkipSong = {SkipSong} />

            <Volume stateVol = {stateVol} handleVol = {handleVol} />

            <p><strong>Next: </strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
            </div>

            <div className="play-list-t">
                <PlayList songList ={songList} selectTrack={selectTrack} />  
            </div>
            

        </div>
    )
}

export default Player
