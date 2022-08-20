import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import ArrowLeft from "../../assets/arrow-left.png";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  onSavePressed: () => void;
};

export function HeaderWithSaveButton({ onSavePressed }: HeaderProps) {
  const { goBack } = useNavigation();

  return (
    <View style={styles.containerView}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={goBack}
        hitSlop={{ left: 16, bottom: 16, right: 16, top: 16 }}
      >
        <Image source={ArrowLeft} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onSavePressed}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
