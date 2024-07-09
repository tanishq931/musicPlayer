import {FlatList} from 'react-native';
import MusicRow from '../MusicRow/MusicRow';
import {useContext, useEffect, useRef} from 'react';
import {MusicContext} from '../../Context/musicContext';
import PauseIcon from '../../../public/images/pauseIcon';
import PlayIcon from '../../../public/images/playIcon';
import styles from './MusicList.styles';
import Colors from '../../Theme/Colors';

function MusicList({musicList, onPressPlay, onPressIcon}) {
  const [musicState] = useContext(MusicContext);
  const renderItem = ({item, index}) => {
    return (
      <MusicRow
        key={item?.title}
        title={item?.title}
        icon={
          musicState?.selectedMusic?.title == item.title &&
          musicState?.isPlaying ? (
            <PauseIcon color={Colors.WHITE} />
          ) : (
            <PlayIcon color={Colors.WHITE} />
          )
        }
        onPress={() => {
          onPressPlay(item, index);
        }}
        customStyle={
          musicState?.selectedMusic?.title == item?.title &&
          styles.selectedMusic
        }
        onPressIcon={() => {
          onPressIcon(item, index);
        }}
      />
    );
  };
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && musicList.length > 0 && musicState?.selectedIndex >= 0) {
      ref.current.scrollToIndex({
        index: musicState?.selectedIndex,
        animated: true,
      });
    }
  }, [musicState?.selectedIndex]);
  const getItemLayout = (data, index) => ({
    length: 40,
    offset: 40 * index,
    index,
  });
  return (
    <>
      <FlatList
        ref={ref}
        data={musicList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item?.title}
        getItemLayout={getItemLayout}
      />
    </>
  );
}

export default MusicList;
