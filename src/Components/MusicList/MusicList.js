import {FlatList, ScrollView} from 'react-native';
import MusicRow from '../MusicRow/MusicRow';
import {useContext, useEffect, useRef} from 'react';
import {MusicContext} from '../../Context/musicContext';
import PauseIcon from '../../../public/images/pauseIcon';
import PlayIcon from '../../../public/images/playIcon';
import styles from './MusicList.styles';
import Colors from '../../Theme/Colors';

function MusicList({musicList, onPressPlay, onPressIcon, skipIndex}) {
  const [musicState] = useContext(MusicContext);
  const renderItem = ({item, index}) => {
    // if (skipIndex >= 0 && index === skipIndex) {
    //   return;
    // }
    return (
      <MusicRow
        key={index}
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
          musicState?.selectedMusic?.title == item.title && styles.selectedMusic
        }
        onPressIcon={() => {
          onPressIcon(item, index);
        }}
      />
    );
  };
  // console.log(skipIndex);
  return (
    <>
      {/* {skipIndex >= 0 && (
        <MusicRow
          title={musicList[skipIndex]?.title}
          key={skipIndex}
          icon={
            musicState?.isPlaying ? (
              <PauseIcon color={Colors.WHITE} />
            ) : (
              <PlayIcon color={Colors.WHITE} />
            )
          }
          onPress={() => {
            onPressPlay(musicList[skipIndex], skipIndex);
          }}
          customStyle={styles.selectedMusic}
          onPressIcon={() => {
            onPressIcon(musicList[skipIndex], skipIndex);
          }}
        />
         )} */}
      <FlatList
        data={musicList}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={({item}) => item?.title}
      />
    </>
  );
}

export default MusicList;
