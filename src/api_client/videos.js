import * as http from './index';
import { fetchVideosRequest, fetchVideosSuccess, fetchVideosFailure } from '../actions/videos';

export const fetchVideos = (query) => {
  return http.get('videos/search', query);
};


export const getVideosRequest = (query) => {
  return (dispatch) => {
    dispatch(fetchVideosRequest());

    return fetchVideos({ query })
      .then((response) => {
        dispatch(fetchVideosSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchVideosFailure(error));
      })
  }
};