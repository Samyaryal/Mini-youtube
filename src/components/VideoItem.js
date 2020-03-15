import React from 'react';
import './VideoItem.css';

const VideoItem =({video, onVideoSelect }) =>{ // onVideoSelect first mah videoList mah gayera teha bata balla yeha pass hunxa.
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet.title} className ="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    );
};
export default VideoItem;