import React from "react";

function VideoAd() {
  return (
    <iframe
      width={"100%"}
      height={"100%"}
      src="https://www.youtube.com/embed/7ZPKhkEg4oM"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default VideoAd;
