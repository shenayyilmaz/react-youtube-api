import React from "react";

import "semantic-ui-css/semantic.min.css";

const VideoDetails = ({ video }) => {
  console.log(video);

  if (!video) return <div>Loading</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <iframe src={videoSrc} title="video player" />
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.desciption}</p>
    </div>
  );
};
export default VideoDetails;
