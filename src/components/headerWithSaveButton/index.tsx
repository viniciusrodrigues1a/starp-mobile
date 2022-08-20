import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import ArrowLeft from "../../assets/arrow-left.png";

type HeaderProps = {
  onSavePressed: () => void;
};

export function HeaderWithSaveButton({ onSavePressed }: HeaderProps) {
  return (
    <View style={styles.containerView}>
      <Image source={ArrowLeft} style={styles.image} />
      <TouchableOpacity onPress={onSavePressed}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
