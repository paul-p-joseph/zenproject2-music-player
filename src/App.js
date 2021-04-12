import {useState, useEffect} from 'react';
import Player from './components/Player';


 function App() {
   const [currentSongIndex, setCurrentSongIndex] = useState(0);
   const [nextSongIndex, setNextSongIndex] =  useState(currentSongIndex +1);
   const [songs] = useState([
    {  
     
      title: "Vibing out",
      artist: "FKJ",
      img_src: "./images/FKJ Vibin.jfif",
      src: "https://audio.jukehost.co.uk/vImLnLKE6PlT4WDFIWuZ91ChNp6DH0Ih"

    }, 
     {  
      
      title: "Cause I'm a Man",
      artist: "Tame Impala",
      img_src: "./images/Cover2.jpg",
      src: "https://audio.jukehost.co.uk/GGNGMKCSmEqEovZRZUVtaNQK1d4LaZca"

    },
    {  
      
      title: "Feels Like We Only Go Backwards",
      artist: "Tame Impala",
      img_src: "./images/Cover1.jpg",
      src: "https://audio.jukehost.co.uk/0JI8trmudlbElgLxCwLcBYc785ZvCpXq"

    },
    {  
      
      title: "Chamber of Reflections",
      artist: "Mac DeMarco",
      img_src: "./images/chamber.jfif",
      src: "https://audio.jukehost.co.uk/B8SXKCO2FUHMh37OrVqUMYL9ux67x1fy"

    },
    {  
      
      title: "Get You",
      artist: "Daniel Caesar ft. Kali Uchis",
      img_src: "./images/getyou.jfif",
      src: "https://audio.jukehost.co.uk/xvzhUuPkxQ8NZINIPJWWUdneq2Jzsjpw"

    },
    {  
      
      title: "Tadow",
      artist: "FKJ & Masego",
      img_src: "./images/tadow.jfif",
      src: "https://audio.jukehost.co.uk/OPOkjBKLtWJ3JkNEWl7i48RaMRtStl7K"

    },
    {  
      
      title: "The Less I Know The Better",
      artist: "Tame Impala",
      img_src: "./images/tame.jfif",
      src: "https://audio.jukehost.co.uk/Jd6WI2HLAJe0w66DXkcGgcdMjGXtYrbf"

    },
    {  
      
      title: "Yes I'm Changing",
      artist: "Tame Impala",
      img_src: "./images/tameyes.jfif",
      src: "https://audio.jukehost.co.uk/GHE2eoaUB0bI00uSmtGXZMEMJvnaGS9p"

    },
    {  
      
      title: "Love Paranoia",
      artist: "Tame Impala",
      img_src: "./images/tamelove.jfif",
      src: "https://audio.jukehost.co.uk/hXGA0qUJg95rXrg03GS0BosXdaIZkR7v"

    },
    {  
      
      title: "Love Is The Message",
      artist: "Yussef Dayes X Alfa Mist",
      img_src: "./images/loveisthemessage.jfif",
      src: "https://audio.jukehost.co.uk/b1O3gRp0T9Goc37vc1vjNgYsIxWPNRiT"

    }]);

  useEffect(()=>{

    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length - 1){
         return 0;
      } else {
        return currentSongIndex + 1;
      }
    }
    )
  },[currentSongIndex]);
    
  return (
    <div className="App">
     <Player 
      currentSongIndex = {currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}
    />
    
    </div>
  );
}

export default App;

