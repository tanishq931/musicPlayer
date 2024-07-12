import TrackPlayer, {
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

export function useTrackPlayer() {
  async function addSong(val) {
    await TrackPlayer.add({
      id: val?.title,
      url: val?.url,
      title: val?.title,
      artist: val?.artist,
      artwork: val.path,
    });
  }
  return {player: TrackPlayer, usePlaybackState, useProgress, addSong};
}
