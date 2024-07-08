export const setIsPlaying = value => ({
  type: 'SetPlaying',
  payload: value,
});
export const setSelectedMusic = value => ({
  type: 'SetMusic',
  payload: value,
});
export const setMusicList = value => ({
  type: 'SetMusicList',
  payload: value,
});
export const toggleShuffle = value => ({
  type: 'ToggleShuffle',
  payload: value,
});
export const setSelectedIndex = val => ({
  type: 'SelectedIndex',
  payload: val,
});
export const setAutoPlay = val => ({
  type: 'AutoPlay',
  payload: val,
});
export const setFavourites = val =>({
  type:'SetFavourites',
  payload:val
});
