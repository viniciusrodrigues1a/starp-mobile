import React from "react";
import { View } from "react-native";

import { HeaderWithSaveButton } from "../../components/headerWithSaveButton";
import { Input } from "../../components/input";

import { styles } from "./styles";

import Lock from "../../assets/lock.png";

export function EditPassword() {
  return (
    <View style={styles.containerView}>
      <HeaderWithSaveButton onSavePressed={() => {}} />

      <View style={styles.inputsWrapperView}>
        <Input
          imageSource={Lock}
          label="Senha atual"
          placeholder="Insira sua senha atual"
        />

        <View style={styles.inputDividerView} />

        <Input
          imageSource={Lock}
          label="Confirmar senha"
          placeholder="Confirme sua senha"
        />
      </View>
    </View>
  );
}
