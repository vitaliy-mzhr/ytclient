import * as favoriteVideosTypes from '../../actions/favoriteVideos/types';

const initialState = {
  favoriteVideos: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case favoriteVideosTypes.ADD_FAVORITE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case favoriteVideosTypes.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        favoriteVideos: { ...state.favoriteVideos, payload },
      };

    case favoriteVideosTypes.ADD_FAVORITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    case favoriteVideosTypes.TOGGLE_FAVORITE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case favoriteVideosTypes.TOGGLE_FAVORITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        favoriteVideos: { ...state.favoriteVideos, payload },
      };

    case favoriteVideosTypes.TOGGLE_FAVORITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return state
  }
}
