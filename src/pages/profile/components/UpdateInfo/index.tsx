import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import ArrowRight from "../../../../assets/arrow-right-white.png";
import { styles } from "./styles";

type UpdateInfoProps = {
  title: string;
  onButtonPressed: () => void;
};

export function UpdateInfo({ title, onButtonPressed }: UpdateInfoProps) {
  return (
    <TouchableOpacity
      hitSlop={{ left: 10, bottom: 10, right: 10, top: 10 }}
      style={styles.containerView}
      onPress={onButtonPressed}
    >
      <Text style={styles.titleText}>{title}</Text>
      <Image source={ArrowRight} style={styles.arrowImage} />
    </TouchableOpacity>
  );
}
