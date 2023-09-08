import React from "react";
import "./video.css";

const VideoCard = (props) => {
  const {video} = props.product;
  return (
    <>
      <div className="cardContainer">
       
        <iframe
        
        src={video}
        className="video"
        title={video}
        frameBorder="0"
        allowFullScreen
      ></iframe>
        
      </div>
    </>
  );
};

export default VideoCard;
