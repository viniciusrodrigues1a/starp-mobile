import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

export function ProfileEmail({ ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
      {...props}
    >
      <Text style={styles.labelText}>Email</Text>
      <Text style={styles.emailText}>leostar13@gmail.com</Text>
    </TouchableOpacity>
  );
}
