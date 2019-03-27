import * as videosTypes from '../../actions/videos/types';

const initialState = {
  isLoading: false,
  errors: null,
  videos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case videosTypes.FETCH_VIDEOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case videosTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        videos: action.payload,
      };

    case videosTypes.FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };

    case videosTypes.TOGGLE_VIDEO_FAVORITE:

      return {
        ...state,
        videos: state.videos.map((item) => (
          (action.payload === item.id) ? { ...item, isFavourite: !item.isFavourite } : item
        ))
      }

    default:
      return state
  }
};
