import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Logout from "../../../../assets/log-out.png";

import { styles } from "./styles";

type HeaderProps = {
  onLogoutPressed: () => void;
};

export function Header({ onLogoutPressed }: HeaderProps) {
  return (
    <View style={styles.containerView}>
      <Text style={styles.titleText}>Perfil</Text>

      <TouchableOpacity onPress={onLogoutPressed} style={styles.logoutButton}>
        <Image source={Logout} style={styles.logoutButtonImage} />
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
