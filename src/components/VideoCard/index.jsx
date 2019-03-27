import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import moment from 'moment';

import './styles.scss';

const VideoCard = ({ videoInfo, addToFavorite }) => {
  const { thumbs, title, publishedAt, description, isFavourite } = videoInfo;
  
  return (
    <Card>
      {thumbs ? <Image src={thumbs.medium} /> : ""}
      <Card.Content>
        <Card.Header>
          <div className="ytc-card_title ellipsis">
            {title || ""}
          </div>
        </Card.Header>
        <Card.Meta>
          <span className='date'>{moment(publishedAt).fromNow()}</span>
        </Card.Meta>
        <Card.Description>
          <div className="ellipsis">{description}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {
          isFavourite === false ? <Button
            content='Add to favorites'
            icon='heart'
            labelPosition='right'
            onClick={addToFavorite} /> :
            <Button
              content='Remove from favorites'
              icon='heart'
              labelPosition='right'
              onClick={addToFavorite}
              primary={true}
            />
        }
      </Card.Content>
    </Card>
  )
};

export default VideoCard;