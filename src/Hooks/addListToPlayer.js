import {useTrackPlayer} from './useTrackPlayer';

export async function addListToPlayer(musicList) {
  const {player, addSong} = useTrackPlayer();
  await player.reset();
  musicList.forEach(async element => {
    await addSong(element);
  });
}
