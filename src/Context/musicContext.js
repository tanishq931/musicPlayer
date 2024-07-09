import {createContext, useEffect, useReducer} from 'react';
const initialState = {
  isPlaying: false,
  autoPlay: true,
  favouritesList: [],
  musicList: [],
  shuffle: false,
};

const reducers = (state, action) => {
  switch (action?.type) {
    case 'SetPlaying':
      return {
        ...state,
        isPlaying: action?.payload,
      };
    case 'SetMusic':
      return {
        ...state,
        selectedMusic: action?.payload,
      };
    case 'SetMusicList':
      return {
        ...state,
        musicList: action?.payload,
      };
    case 'ToggleShuffle':
      return {
        ...state,
        shuffle: action?.payload,
      };
    case 'SelectedIndex':
      return {
        ...state,
        selectedIndex: action?.payload,
      };
    case 'AutoPlay':
      return {
        ...state,
        autoPlay: action?.payload,
      };
    case 'SetFavourites':
      return {
        ...state,
        favouritesList: action?.payload,
      };
  }
};

export const MusicContext = createContext(initialState);

export const MusicProvider = ({children}) => {
  const [musicState, musicDispatch] = useReducer(reducers, initialState);
  // useEffect(() => {

  // }, []);
  return (
    <MusicContext.Provider value={[musicState, musicDispatch]}>
      {children}
    </MusicContext.Provider>
  );
};
