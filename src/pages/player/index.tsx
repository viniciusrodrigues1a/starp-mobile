import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

import { styles } from "./styles";

import ArrowDown from "../../assets/arrow-down.png";
import CheckCircle from "../../assets/check-circle.png";
import PlusCircle from "../../assets/plus-circle.png";
import Star from "../../assets/star.png";
import JumpForward from "../../assets/jump-forward.png";
import JumpBackward from "../../assets/jump-backward.png";
import Play from "../../assets/play.png";
import Pause from "../../assets/pause.png";
import { usePlayer } from "../../contexts/playerContext";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";

let seekDebounce: any = null;

export function Player() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {
    play,
    pause,
    isPlaying,
    timeElapsed,
    timeElapsedInMillis,
    totalTime,
    totalTimeInMillis,
    seek,
  } = usePlayer();

  const [seekDebouncedTimes, setSeekDebouncedTimes] = useState(0);

  useEffect(() => {
    return () => {
      clearTimeout(seekDebounce);
      seekDebounce = null;
    };
  }, []);

  const goBack = () => navigation.goBack();
  const handlePlayButton = () => (isPlaying ? pause() : play());
  const handleSliderComplete = (value: number) => seek(Math.floor(value));

  const debounce = (fn: () => void) => {
    clearTimeout(seekDebounce);
    setSeekDebouncedTimes((prev) => prev + 1);
    seekDebounce = setTimeout(() => {
      fn();
      setSeekDebouncedTimes(0);
    }, 250);
  };

  const handleJumpForward = () => {
    debounce(() =>
      seek(timeElapsedInMillis + 1000 * 10 * (seekDebouncedTimes || 1))
    );
  };

  const handleJumpBackward = () => {
    debounce(() =>
      seek(timeElapsedInMillis - 1000 * 10 * (seekDebouncedTimes || 1))
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image source={ArrowDown} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.markAsListened}>
          <Text style={styles.markAsListenedText}>Marcar como ouvido</Text>

          <Image source={CheckCircle} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://i.ytimg.com/vi/kU4ZEyWVwn8/maxresdefault.jpg",
          }}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.podcastInfo}>
          <Text style={styles.podcastInfoTitle}>
            LUCAS INUTILISMO - Podpah #404
          </Text>

          <Text style={styles.podcastInfoArtist}>Podpah</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressBarLabels}>
            <Text style={styles.progressBarLabelText}>{timeElapsed}</Text>
            <Text style={styles.progressBarLabelText}>{totalTime}</Text>
          </View>
          <Slider
            value={timeElapsedInMillis}
            minimumValue={0}
            maximumValue={totalTimeInMillis}
            onSlidingComplete={(val) => handleSliderComplete(val as number)}
            minimumTrackTintColor="#FFFFFF"
            thumbTintColor="#FFFFFF"
            maximumTrackTintColor="#767676"
          />
        </View>

        <View style={styles.controlButtons}>
          <TouchableOpacity>
            <Image source={Star} style={styles.controlButtonImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleJumpBackward}>
            <Image source={JumpBackward} style={styles.controlButtonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.playButton}
            onPress={handlePlayButton}
          >
            <Image
              source={isPlaying ? Pause : Play}
              style={styles.controlButtonImage}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleJumpForward}>
            <Image source={JumpForward} style={styles.controlButtonImage} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={PlusCircle} style={styles.controlButtonImage} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
