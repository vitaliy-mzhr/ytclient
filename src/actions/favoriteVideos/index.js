import * as videosTypes from './types';

export const addFavoriteRequest = () => ({
  type: videosTypes.ADD_FAVORITE_REQUEST
});

export const addFavoriteSuccess = (params) => ({
  type: videosTypes.ADD_FAVORITE_SUCCESS,
  payload: params,
});

export const addFavoriteFailure = () => ({
  type: videosTypes.ADD_FAVORITE_FAILURE,
});

export const toggleFavoriteRequest = () => ({
  type: videosTypes.TOGGLE_FAVORITE_REQUEST
});

export const toggleFavoriteSuccess = (params) => ({
  type: videosTypes.TOGGLE_FAVORITE_SUCCESS,
  payload: params,
});

export const toggleFavoriteFailure = () => ({
  type: videosTypes.TOGGLE_FAVORITE_FAILURE,
});

export const fetchFavoritesRequest = () => ({
  type: videosTypes.FETCH_FAVORITES_REQUEST
});

export const fetchFavoritesSuccess = (params) => ({
  type: videosTypes.FETCH_FAVORITES_SUCCESS,
  payload: params,
});

export const fetchFavoritesFailure = () => ({
  type: videosTypes.FETCH_FAVORITES_FAILURE,
});