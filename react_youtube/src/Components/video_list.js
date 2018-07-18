import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.videos.map(video => <VideoListItem key={video.etag} video={video} />);

  return <ul className="list">{videoItems}</ul>;
};

export default VideoList;
