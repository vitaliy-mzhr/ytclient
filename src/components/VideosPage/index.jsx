import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';

import SearchField from '../../components/SearchField';
import VideoGroupCard from '../../components/VideoGroupCard';
import Preloader from '../../components/Preloader';
import DisplayListIcons from '../../components/DisplayListIcons';
import EmptyVideoGroup from '../EmptyVideoGroup';

class VideosPage extends React.Component {
  state = { activeListStyle: "first" };

  addToFavorite = (id, isFavourite) => () => {
    const {
      mainPage,
      turnFavoriteRequest,
      toggleLikeVideo,
      removeLikeFavoriteVideo
    } = this.props;

    turnFavoriteRequest(id, !isFavourite, () => {
      mainPage ?
        toggleLikeVideo(id) :
        removeLikeFavoriteVideo(id);
    });
  }

  changeListStyle = (name) => {
    this.setState({ activeListStyle: name })
  }

  render() {
    const {
      videos,
      isLoading,
      handleKeyPress,
      mainPage
    } = this.props;
    const { activeListStyle } = this.state;

    return (
      <>
        <Grid>
          {mainPage && <Grid.Column floated='left' width={8}>
            <SearchField handleKeyPress={handleKeyPress} />
          </Grid.Column>}

          {videos && <Grid.Column floated='right' width={2}>
            <DisplayListIcons changeListStyle={this.changeListStyle} />
          </Grid.Column>}
        </Grid>

        {videos && <Divider />}

        {isLoading && <Preloader />}

        {!isLoading && videos && <VideoGroupCard
          videos={videos}
          addToFavorite={this.addToFavorite}
          activeListStyle={activeListStyle}
        />}

        {!videos && !mainPage && <EmptyVideoGroup />}
      </>
    )
  }
}

export default VideosPage;