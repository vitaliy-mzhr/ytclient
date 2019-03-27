import * as videosTypes from './types';

export const fetchVideosRequest = () => ({
  type: videosTypes.FETCH_VIDEOS_REQUEST
});

export const fetchVideosSuccess = (params) => ({
  type: videosTypes.FETCH_VIDEOS_SUCCESS,
  payload: params,
});

export const fetchVideosFailure = () => ({
  type: videosTypes.FETCH_VIDEOS_FAILURE,
});

export const toggleLikeVideo = (id) => ({
  type: videosTypes.TOGGLE_VIDEO_FAVORITE,
  payload: id
});






