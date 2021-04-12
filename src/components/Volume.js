import React,{useState, useEffect, useRef} from 'react'

function Volume({stateVol,handleVol}) {
    const [position, setPosition] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const rangeRef = useRef();
    const thumbRef = useRef();

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth =  thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth / 100) * stateVol*100 * -1
        const centerProgressBar = thumbWidth + rangeWidth/100 * stateVol * 100 - (thumbWidth/100 * stateVol * 100)
        setMarginLeft(centerThumb)
       setPosition(stateVol * 100)
       setProgressBarWidth(centerProgressBar)
    }, [stateVol * 100])
    
    return (
        <div className="vol-container">

            <h1 className="vol-symp-1">-</h1>

            <div className="slider-container">
            <div className="progress-bar-cover" style = {{
                width: `${progressBarWidth}px`
            }} ></div>
            
            <div className="thumb" ref={thumbRef} style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
            }}></div>

            <input type="range" value={position} ref={rangeRef} step="0.01" className="range" onChange={(e) => handleVol(e.target.value / 100)} />
            
        </div>
           
            <h1 className="vol-symp-2">+</h1>

        </div>

        
    )
}

export default Volume
