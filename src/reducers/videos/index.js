import * as videosTypes from '../../actions/videos/types';

const initialState = {
  isLoading: false,
  errors: null,
  videos: [],
  // videos: [
  //   {
  //     "id": "ZEq54f1q0Xs",
  //     "publishedAt": "2015-11-08T02:37:11.000Z",
  //     "title": "Salsa Dancing Miami Beach",
  //     "description": "for another fun salsa video https://www.youtube.com/watch?v=mCyqsqLlPfo check out my website www.MAORLUZ.com ...",
  //     "thumbs": {
  //       "small": "https://i.ytimg.com/vi/ZEq54f1q0Xs/default.jpg",
  //       "medium": "https://i.ytimg.com/vi/ZEq54f1q0Xs/mqdefault.jpg",
  //       "large": "https://i.ytimg.com/vi/ZEq54f1q0Xs/hqdefault.jpg"
  //     },
  //     "isFavourite": false
  //   },
  //   {
  //     "id": "72ew03ks7Ow",
  //     "publishedAt": "2012-11-20T17:48:48.000Z",
  //     "title": "Lo Mejor de La Salsa Para BAILAR",
  //     "description": "La Mejor recopilación de la salsa, En MIX para Bailar parte 1, Si les gusto denle un Like y si no También acepto criticas de los errores se aprende.. Y si les ...",
  //     "thumbs": {
  //       "small": "https://i.ytimg.com/vi/72ew03ks7Ow/default.jpg",
  //       "medium": "https://i.ytimg.com/vi/72ew03ks7Ow/mqdefault.jpg",
  //       "large": "https://i.ytimg.com/vi/72ew03ks7Ow/hqdefault.jpg"
  //     },
  //     "isFavourite": false
  //   },
  //   {
  //     "id": "Ns9YYSqLxyI",
  //     "publishedAt": "2009-10-03T04:46:22.000Z",
  //     "title": "Marc Anthony - Valio La Pena (Salsa Version)",
  //     "description": "Vídeo oficial de Marc Anthony de su tema 'Valio La Pena (Salsa Version)'. Haz clic aquí para escuchar a Marc Anthony en Spotify: http://smarturl.it/MarcASpotify ...",
  //     "thumbs": {
  //       "small": "https://i.ytimg.com/vi/Ns9YYSqLxyI/default.jpg",
  //       "medium": "https://i.ytimg.com/vi/Ns9YYSqLxyI/mqdefault.jpg",
  //       "large": "https://i.ytimg.com/vi/Ns9YYSqLxyI/hqdefault.jpg"
  //     },
  //     "isFavourite": false
  //   },
  //   {
  //     "id": "xLTRwtAqT94",
  //     "publishedAt": "2016-06-25T10:00:02.000Z",
  //     "title": "SALSA 2018 MIX ► 2H LO MEJOR SALSA MIX 2018 ► LATIN HITS 2018",
  //     "description": "SALSA 2018 MIX ▻ 2H LO MEJOR SALSA MIX 2018 ▻ LATIN HITS 2018 ▻People Dancing Salsa in the Streets DOWNLOAD▻ ...",
  //     "thumbs": {
  //       "small": "https://i.ytimg.com/vi/xLTRwtAqT94/default.jpg",
  //       "medium": "https://i.ytimg.com/vi/xLTRwtAqT94/mqdefault.jpg",
  //       "large": "https://i.ytimg.com/vi/xLTRwtAqT94/hqdefault.jpg"
  //     },
  //     "isFavourite": false
  //   },
  //   {
  //     "id": "3nd8WQy58Pw",
  //     "publishedAt": "2012-07-05T12:51:57.000Z",
  //     "title": "Sydney&#39;s Best Social Dancer 2012 | Salsa Finals",
  //     "description": "",
  //     "thumbs": {
  //       "small": "https://i.ytimg.com/vi/3nd8WQy58Pw/default.jpg",
  //       "medium": "https://i.ytimg.com/vi/3nd8WQy58Pw/mqdefault.jpg",
  //       "large": "https://i.ytimg.com/vi/3nd8WQy58Pw/hqdefault.jpg"
  //     },
  //     "isFavourite": false
  //   },
  //   {
  //     "id": "tVcE5PFXpbQ",
  //     "publishedAt": "2017-02-02T15:00:04.000Z",
  //     "title": "Shakira - Chantaje (Versión Salsa) (Video Oficial) ft. Maluma",
  //     "description": "Shakira feat. Maluma - \"Chantaje (Versión Salsa)\"[Official Music Video] \"El Dorado\" is available now! iTunes: http://smarturl.it/ElDoradoi Apple Music: ...",
  //     "thumbs": {
  //       "small": "https://i.ytimg.com/vi/tVcE5PFXpbQ/default.jpg",
  //       "medium": "https://i.ytimg.com/vi/tVcE5PFXpbQ/mqdefault.jpg",
  //       "large": "https://i.ytimg.com/vi/tVcE5PFXpbQ/hqdefault.jpg"
  //     },
  //     "isFavourite": false
  //   }
  // ],
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

    case "TOGGLE_VIDEO_FAVORITE":

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
