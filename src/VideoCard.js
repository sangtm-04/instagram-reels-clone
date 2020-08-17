import React, {useState, useRef} from 'react'
import './VideoCard.css'

function VideoCard() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
        else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className="videoCard">
            <video 
                ref={videoRef}
                onClick={onVideoPress}
                src="https://scontent-hkg4-1.cdninstagram.com/v/t50.2886-16/117349418_153061899737122_8078462117864311407_n.mp4?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=87DrtMuGSPQAX-4FVOa&oe=5F3CF38C&oh=52148ef80bfa70756176edb92061281f"
                alt="IG reel video"
                loop
            />
        </div>
    )
}

export default VideoCard
