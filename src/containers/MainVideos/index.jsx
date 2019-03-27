import React from 'react';
import { connect } from "react-redux";

import { toggleLikeVideo } from '../../actions/videos';
import { getVideosRequest } from '../../api_client/videos';
import { addToFavoriteRequest, turnFavoriteRequest } from '../../api_client/favoriteVideos';
import VideosPage from '../../components/VideosPage';

class MainVideos extends React.Component {
  state = { activeListStyle: "first" };

  componentDidMount() {
    this.props.getVideosRequest();
  }

  handleKeyPress = (e) => {
    const { value } = e.target;
    if (e.key === 'Enter') {
      this.searchVideos(value)
    }
  }

  searchVideos = (value) => {
    this.props.getVideosRequest(value)
  }

  addToFavorite = (id, isFavourite) => () => {
    this.props.turnFavoriteRequest(id, !isFavourite, () => {
      this.props.toggleLikeVideo(id);
    });
    this.props.toggleLikeVideo(id);
  }

  changeListStyle = (name) => {
    this.setState({ activeListStyle: name })
  }

  render() {
    const { videos, isLoading } = this.props;
    const { activeListStyle } = this.state;
    return (
      <>
        {/* <Grid>
          <Grid.Column floated='left' width={8}>
            <SearchField handleKeyPress={this.handleKeyPress} />
          </Grid.Column>

          {videos && <Grid.Column floated='right' width={2}>
            <DisplayListIcons changeListStyle={this.changeListStyle} />
          </Grid.Column>}
        </Grid>

        <Divider />

        {isLoading && <Preloader />}

        {!isLoading && videos ? <VideoGroupCard
          videos={videos}
          addToFavorite={this.addToFavorite}
          activeListStyle={activeListStyle}
        /> : null} */}


        <VideosPage
          isLoading={isLoading}
          activeListStyle={activeListStyle}
          videos={videos}
          addToFavorite={this.addToFavorite}
          handleKeyPress={this.handleKeyPress}
          changeListStyle={this.changeListStyle}
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