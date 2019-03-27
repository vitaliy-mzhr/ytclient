import React from 'react';
import { connect } from "react-redux";

import { removeLikeFavoriteVideo } from '../../actions/favoriteVideos';
import { getFavoritesRequest, turnFavoriteRequest } from '../../api_client/favoriteVideos';
import VideosPage from '../../components/VideosPage';

class FavoriteVideos extends React.Component {
  state = { activeListStyle: "first" };

  componentDidMount() {
    this.props.getFavoritesRequest();
  }

  render() {
    const {
      favoriteVideos,
      isLoading,
      toggleLikeVideo,
      turnFavoriteRequest,
      removeLikeFavoriteVideo
    } = this.props;

    return (
      <>
        <VideosPage
          isLoading={isLoading}
          videos={favoriteVideos}
          toggleLikeVideo={toggleLikeVideo}
          turnFavoriteRequest={turnFavoriteRequest}
          removeLikeFavoriteVideo={removeLikeFavoriteVideo}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoading, favoriteVideos, errors } = state.favoriteVideosState;
  return {
    isLoading,
    favoriteVideos,
    errors
  }
};

export default connect(mapStateToProps, { getFavoritesRequest, turnFavoriteRequest, removeLikeFavoriteVideo })(FavoriteVideos);
