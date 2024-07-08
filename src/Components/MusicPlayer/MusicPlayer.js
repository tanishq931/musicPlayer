import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import styles from './MusicPlayer.styles';
import DiskPlayer from '../DiskPlayer/DiskPlayer';
import PlayPreviousIcon from '../../../public/images/PlayPreviousIcon';
import PauseIcon from '../../../public/images/pauseIcon';
import PlayIcon from '../../../public/images/playIcon';
import PlayNextIcon from '../../../public/images/PlayNextIcon';
import {MusicContext} from '../../Context/musicContext';
import {setIsPlaying} from '../../Context/reducers';
import {useTrackPlayer} from '../../Hooks/useTrackPlayer';
import Slider from '@react-native-community/slider';
import Colors from '../../Theme/Colors';
import ButtonRow from '../ButtonRow/ButtonRow';
import HeartIcon from '../../../public/images/heartIcon';
import {navigationRef} from '../../Navigation.js/Navigation';

function Player() {
  const [musicState, musicDispatch] = useContext(MusicContext);
  const [sliderValue, setSliderValue] = useState(0);
  const {player, useProgress} = useTrackPlayer();
  const progress = useProgress();
  const handlePress = () => {
    if (musicState?.isPlaying) {
      musicDispatch(setIsPlaying(false));
    } else {
      musicDispatch(setIsPlaying(true));
    }
  };

  const seekTo = async value => {
    setSliderValue(value);
    await player.seekTo(value);
  };
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (sliderValue) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setSliderValue(0);
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sliderValue]);

  const {width} = Dimensions.get('window');

  return (
    <View style={styles.topContainer}>
      <DiskPlayer isPlaying={musicState?.isPlaying} />
      {musicState?.selectedMusic ? (
        <>
          <View style={styles.descContainer}>
            <Text style={styles.title}>{musicState?.selectedMusic?.title}</Text>
            <Text style={styles.writers}>
              {musicState?.selectedMusic?.artist}
            </Text>
          </View>
          <ButtonRow />
          <View style={styles.playPosition}>
            <Slider
              thumbTintColor={Colors.WHITE}
              value={progress?.position}
              minimumValue={0}
              maximumValue={progress.duration}
              onSlidingComplete={seekTo}
              minimumTrackTintColor={Colors.WHITE}
              maximumTrackTintColor="#C9DDFF"
            />
            {progress?.duration > 0 && sliderValue > 0 && (
              <View
                style={[
                  styles.positionLabel,
                  {
                    left: (sliderValue / progress.duration) * (width - 65),
                  },
                ]}>
                <Text style={styles.positionLabelText}>
                  {new Date(sliderValue * 1000).toISOString().substr(14, 5)}
                </Text>
              </View>
            )}

            <View style={styles.durationBar}>
              <Text style={styles.positionLabelText}>
                {new Date(progress.position * 1000).toISOString().substr(11, 8)}
              </Text>
              <Text style={styles.positionLabelText}>
                {new Date(progress.duration * 1000).toISOString().substr(11, 8)}
              </Text>
            </View>
          </View>
          <View style={styles.trackPlayer}>
            <TouchableOpacity onPress={() => {}}>
              <PlayPreviousIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
              {musicState?.isPlaying ? <PauseIcon /> : <PlayIcon />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <PlayNextIcon />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.descContainer}>
          <Text style={styles.title}>Select the song you want to play</Text>
        </View>
      )}
    </View>
  );
}

export default Player;
