import React from "react";
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

export function Player() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image source={ArrowDown} />

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
            <Text style={styles.progressBarLabelText}>31:23</Text>
            <Text style={styles.progressBarLabelText}>1:24:02</Text>
          </View>
          <Slider
            value={100}
            minimumValue={0}
            maximumValue={200}
            minimumTrackTintColor="#FFFFFF"
            thumbTintColor="#FFFFFF"
            maximumTrackTintColor="#767676"
          />
        </View>

        <View style={styles.controlButtons}>
          <TouchableOpacity>
            <Image source={Star} style={styles.controlButtonImage} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={JumpBackward} style={styles.controlButtonImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.playButton}>
            <Image source={Pause} style={styles.controlButtonImage} />
          </TouchableOpacity>

          <TouchableOpacity>
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
