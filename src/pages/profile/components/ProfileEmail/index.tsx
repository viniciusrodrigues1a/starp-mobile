import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

export function ProfileEmail({ ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.labelText}>Email</Text>
      <Text style={styles.emailText}>leostar13@gmail.com</Text>
    </TouchableOpacity>
  );
}
