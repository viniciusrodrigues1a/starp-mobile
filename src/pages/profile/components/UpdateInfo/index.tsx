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
    <TouchableOpacity style={styles.containerView}>
      <Text style={styles.titleText}>{title}</Text>
      <Image source={ArrowRight} style={styles.arrowImage} />
    </TouchableOpacity>
  );
}
