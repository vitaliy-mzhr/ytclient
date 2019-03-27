import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import videosReducer from './videos/index';
import favoriteVideosReducer from './favoriteVideos/index';

const rootReducer = (history) => combineReducers({
  videosState: videosReducer,
  favoriteVideosState: favoriteVideosReducer,
  router: connectRouter(history),
});

export default rootReducer;
