import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';

import SearchField from '../../components/SearchField';
import VideoGroupCard from '../../components/VideoGroupCard';
import Preloader from '../../components/Preloader';
import DisplayListIcons from '../../components/DisplayListIcons';
import EmptyVideoGroup from '../EmptyVideoGroup';

class VideosPage extends React.Component {
  render() {
    const {
      videos,
      isLoading,
      activeListStyle,
      handleKeyPress,
      addToFavorite,
      changeListStyle,
      mainPage
    } = this.props;
    return (
      <>
        <Grid>
          {mainPage && <Grid.Column floated='left' width={8}>
            <SearchField handleKeyPress={handleKeyPress} />
          </Grid.Column>}

          {videos && <Grid.Column floated='right' width={2}>
            <DisplayListIcons changeListStyle={changeListStyle} />
          </Grid.Column>}
        </Grid>

        {videos && <Divider />}

        {isLoading && <Preloader />}

        {!isLoading && videos && <VideoGroupCard
          videos={videos}
          addToFavorite={addToFavorite}
          activeListStyle={activeListStyle}
        />}

        {!videos && !mainPage && <EmptyVideoGroup />}
      </>
    )
  }
}

export default VideosPage;