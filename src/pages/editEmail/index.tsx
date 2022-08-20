import React from "react";
import { View } from "react-native";

import { HeaderWithSaveButton } from "../../components/headerWithSaveButton";
import { Input } from "../../components/input";

import { styles } from "./styles";

import Inbox from "../../assets/inbox.png";
import Lock from "../../assets/lock.png";

export function EditEmail() {
  return (
    <View style={styles.containerView}>
      <HeaderWithSaveButton onSavePressed={() => {}} />

      <View style={styles.inputsWrapperView}>
        <Input
          imageSource={Inbox}
          label="Novo email"
          placeholder="Insira seu novo email"
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
