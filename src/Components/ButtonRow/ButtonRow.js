import {View} from 'react-native';
import ButtonBox from '../ButtonBox/ButtonBox';
import LikeIcon from '../../../public/images/likeIcon';
import ShareIcon from '../../../public/images/SharIcon';
import ShuffleIcon from '../../../public/images/ShuffleIcon';
import styles from './ButtonRow.styles';
import {useContext, useEffect, useState} from 'react';
import {MusicContext} from '../../Context/musicContext';
import {
  setAutoPlay,
  setFavourites,
  toggleShuffle,
} from '../../Context/reducers';
import {useTrackPlayer} from '../../Hooks/useTrackPlayer';
import Share from 'react-native-share';
import AutoPlayIcon from '../../../public/images/AutoPlay';
import Colors from '../../Theme/Colors';
import HeartIcon from '../../../public/images/heartIcon';
import StorageService from '../../Service/StorageService';
import {FAVOURITES_LIST} from '../../Constants/constants';

function ButtonRow() {
  const [musicState, musicDispatch] = useContext(MusicContext);
  const [favIndex, setFavIndex] = useState(-1);
  const toggleAutoPlay = () => {
    musicDispatch(setAutoPlay(!musicState?.autoPlay));
  };

  const onShare = async () => {
    const options = {
      title: 'Share song via',
      url: `file://${musicState?.selectedMusic?.url}`,
      type: 'audio/mp3',
    };
    try {
      await Share.open(options);
    } catch (e) {}
  };

  useEffect(() => {
    let list = musicState?.favouritesList.filter((val, index) => {
      if (val.title === musicState.selectedMusic.title) {
        setFavIndex(index);
        return true;
      } else {
        return false;
      }
    });
    if (list.length === 0) setFavIndex(-1);
  }, [musicState]);

  const toggleFavourites = async () => {
    const list = musicState?.favouritesList;
    if (favIndex == -1) {
      list.push(musicState?.selectedMusic);
      setFavIndex(list.length - 1);
    } else {
      list.splice(favIndex, 1);
      setFavIndex(-1);
    }
    musicDispatch(setFavourites(list));
    await StorageService.setData(FAVOURITES_LIST, list);
  };
  const setShuffle = () => {
    musicDispatch(toggleShuffle(!musicState?.shuffle));
  };

  const buttons = [
    {
      icon: (
        <HeartIcon
          color={favIndex !== -1 ? Colors.RED : Colors.BLACK}
          fill={favIndex !== -1 ? Colors.RED : 'none'}
        />
      ),
      onPress: toggleFavourites,
    },
    {
      icon: (
        <AutoPlayIcon
          color={musicState?.autoPlay ? Colors.WHITE : Colors.BLACK}
        />
      ),
      onPress: toggleAutoPlay,
    },
    {
      icon: (
        <ShuffleIcon
          color={musicState?.shuffle ? Colors.WHITE : Colors.BLACK}
        />
      ),
      onPress: setShuffle,
    },
    {
      icon: <ShareIcon />,
      onPress: onShare,
    },
  ];

  return (
    <View style={styles.likeRow}>
      {buttons.map((item, index) => {
        return (
          <ButtonBox
            icon={item?.icon}
            onPress={item?.onPress}
            style={
              ((index === 1 && musicState?.autoPlay) ||
                (index === 2 && musicState?.shuffle)) &&
              styles.transparentBox
            }
          />
        );
      })}
    </View>
  );
}

export default ButtonRow;
