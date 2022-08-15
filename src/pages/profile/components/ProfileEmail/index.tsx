import React from "react";
import { Text } from "react-native";

import { styles } from "./styles";

export function ProfileEmail() {
  return (
    <>
      <Text style={styles.labelText}>Email</Text>
      <Text style={styles.emailText}>leostar13@gmail.com</Text>
    </>
  );
}
