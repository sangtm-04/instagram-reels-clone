import React, {useState, useEffect} from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase'

function App() {
  const [reels, setReels] = useState([])

  useEffect(() => {
    // fires once when the component loads AND whenever videos change
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="app">
      <h1>Instagram reels clone</h1>
      <div className="app__top">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" 
          alt="" 
          className="app__logo"
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {reels.map(({url, likes, shares, channel, avatarSrc, song}, index) => (
          <VideoCard
            key={index} 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
