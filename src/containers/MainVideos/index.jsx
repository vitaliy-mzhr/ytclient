import React from 'react';
import { connect } from "react-redux";

import { toggleLikeVideo } from '../../actions/videos';
import { getVideosRequest } from '../../api_client/videos';
import { addToFavoriteRequest, turnFavoriteRequest } from '../../api_client/favoriteVideos';
import VideosPage from '../../components/VideosPage';
import { handleKeyPress } from '../../utils';

class MainVideos extends React.Component {

  componentDidMount() {
    this.props.getVideosRequest();
  }

  render() {
    const {
      videos,
      isLoading,
      turnFavoriteRequest,
      addToFavoriteRequest,
      toggleLikeVideo,
      getVideosRequest
    } = this.props;

    return (
      <>
        <VideosPage
          isLoading={isLoading}
          videos={videos}
          toggleLikeVideo={toggleLikeVideo}
          turnFavoriteRequest={turnFavoriteRequest}
          handleKeyPress={(e) => handleKeyPress(e, getVideosRequest)}
          addToFavoriteRequest={addToFavoriteRequest}
          mainPage
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoading, videos, errors } = state.videosState
  return {
    isLoading,
    videos,
    errors
  }
};

export default connect(mapStateToProps, { getVideosRequest, addToFavoriteRequest, toggleLikeVideo, turnFavoriteRequest })(MainVideos);