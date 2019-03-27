import React from 'react';
import { Card, Icon, Item, Button } from 'semantic-ui-react';
import VideoCard from '../VideoCard';
import EmptyVideoGroup from '../EmptyVideoGroup';
import VideoItem from '../VideoItem';



const VideoGroupCard = ({ videos, addToFavorite, activeListStyle }) => (
  <>
    {
      activeListStyle === "first" ? <Card.Group itemsPerRow={5} doubling={true}>
        {
          videos.map((videoInfo) => (
            <VideoCard
              key={videoInfo.id}
              videoInfo={videoInfo}
              addToFavorite={addToFavorite(videoInfo.id, videoInfo.isFavourite)}
            />
          ))
        }
      </Card.Group> : <Item.Group relaxed>
          {
            videos.map((videoInfo) => (
              <VideoItem
                key={videoInfo.id}
                videoInfo={videoInfo}
                addToFavorite={addToFavorite(videoInfo.id, videoInfo.isFavourite)}
              />
            ))
          }

        </Item.Group>
    }
  </>
);

export default VideoGroupCard;
