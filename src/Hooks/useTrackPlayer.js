import TrackPlayer, {
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

export function useTrackPlayer() {
  async function addSong(val) {
    let queue = await TrackPlayer.getQueue();
    if (queue.length > 0) {
      await TrackPlayer.remove(0);
    }
    await TrackPlayer.add({
      id: val?.title,
      url: val?.url,
      title: val?.title,
      artist: val?.artist,
      artwork: val.path,
    });
    TrackPlayer.play();
  }
  return {player: TrackPlayer, usePlaybackState, useProgress, addSong};
}
