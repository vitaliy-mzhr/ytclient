import * as http from './index';
import {
  addFavoriteRequest,
  addFavoriteSuccess,
  addFavoriteFailure,
  toggleFavoriteRequest,
  toggleFavoriteSuccess,
  toggleFavoriteFailure,
  fetchFavoritesRequest,
  fetchFavoritesSuccess,
  fetchFavoritesFailure
} from '../actions/favoriteVideos';

export const addToFavorite = (id, isFavourite) => {
  const config = {
    "isFavourite": isFavourite
  }
  return http.patch(`videos/${id}`, "", config);
};

export const fetchFavorites = () => {
  return http.get('videos/favourites');
};

export const toggleFavorite = (id, isFavourite) => {
  const config = {
    "isFavourite": isFavourite
  }
  return http.patch(`videos/${id}`, "", config);
};


export const addToFavoriteRequest = (id, isFavourite, callback) => {
  return (dispatch) => {
    dispatch(addFavoriteRequest());

    return addToFavorite(id, isFavourite)
      .then((response) => {
        dispatch(addFavoriteSuccess(response));
        callback();
      })
      .catch((error) => {
        dispatch(addFavoriteFailure(error));
      })
  }
};


export const turnFavoriteRequest = (id, isFavourite, callback) => {
  return (dispatch) => {
    dispatch(toggleFavoriteRequest());

    return toggleFavorite(id, isFavourite)
      .then((response) => {
        dispatch(toggleFavoriteSuccess(response));
        callback();
      })
      .catch((error) => {
        dispatch(toggleFavoriteFailure(error));
      })
  }
};

export const getFavoritesRequest = () => {
  return (dispatch) => {
    dispatch(fetchFavoritesRequest());

    return fetchFavorites()
      .then((response) => {
        dispatch(fetchFavoritesSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchFavoritesFailure(error));
      })
  }
};