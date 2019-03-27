import React from 'react';
import { Card, Image, Button, Item } from 'semantic-ui-react';
import moment from 'moment';


const VideoItem = ({ videoInfo, addToFavorite }) => {
  console.log(videoInfo)
  const { thumbs, title, publishedAt, description, isFavourite } = videoInfo;
  console.log(publishedAt, isFavourite);
  return (
    <Item>
      {thumbs ? <Image src={thumbs.medium} /> : ""}
      <Item.Content verticalAlign='middle'>
        <Item.Header>{title}</Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <div className='date' floated='right'>{moment(publishedAt).fromNow()}</div>
          {
            isFavourite === false ? <Button
              content='Add to favorites'
              icon='heart'
              labelPosition='right'
              onClick={addToFavorite}
              floated='right'
            /> :
              <Button
                content='Remove from favorites'
                icon='heart'
                labelPosition='right'
                onClick={addToFavorite}
                primary={true}
                floated='right'
              />
          }
        </Item.Extra>
      </Item.Content>
    </Item>
  )
};

export default VideoItem;