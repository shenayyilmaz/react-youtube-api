import React from "react";
import "semantic-ui-css/semantic.min.css";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const rendredList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{rendredList}</div>;
};

export default VideoList;
