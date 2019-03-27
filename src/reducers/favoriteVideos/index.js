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
      };

    case favoriteVideosTypes.TOGGLE_FAVORITE_SUCCESS:
      return {
        ...state,
        errors: null,
      };

    case favoriteVideosTypes.TOGGLE_FAVORITE_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };

    case favoriteVideosTypes.FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case favoriteVideosTypes.FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        favoriteVideos: action.payload,
      };

    case favoriteVideosTypes.FETCH_FAVORITES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    case favoriteVideosTypes.REMOVE_VIDEO_FAVORITE:
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter((item) => (action.payload !== item.id))
      }

    default:
      return state
  }
}
