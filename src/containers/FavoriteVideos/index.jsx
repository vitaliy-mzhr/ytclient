import React from 'react';
import { connect } from "react-redux";

import { getFavoritesRequest } from '../../api_client/favoriteVideos';
import VideosPage from '../../components/VideosPage';

class FavoriteVideos extends React.Component {
  state = { activeListStyle: "first" };

  componentDidMount() {
    this.props.getFavoritesRequest();
  }
  changeListStyle = (name) => {
    this.setState({ activeListStyle: name })
  }
  render() {
    const { favoriteVideos, isLoading } = this.props;
    const { activeListStyle } = this.state;
    return (
      <>
        {/* <Grid>
          {favoriteVideos && <Grid.Column floated='right' width={2}>
            <DisplayListIcons changeListStyle={this.changeListStyle} />
          </Grid.Column>}
        </Grid>

        {isLoading && <Preloader />}

        {!isLoading && favoriteVideos ? <VideoGroupCard
          videos={favoriteVideos}
          addToFavorite={this.addToFavorite}
        // activeListStyle={activeListStyle}
        /> : <EmptyVideoGroup />} */}


        <VideosPage
          isLoading={isLoading}
          activeListStyle={activeListStyle}
          videos={favoriteVideos}
          addToFavorite={this.addToFavorite}
          handleKeyPress={this.handleKeyPress}
          changeListStyle={this.changeListStyle}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoading, favoriteVideos, errors } = state.videosState;
  return {
    isLoading,
    favoriteVideos,
    errors
  }
};

export default connect(mapStateToProps, { getFavoritesRequest })(FavoriteVideos);
