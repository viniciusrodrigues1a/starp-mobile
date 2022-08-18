import React from "react";
import { Text } from "react-native";

import { styles } from "./styles";

type ProfileNameProps = {
  name: string;
};

export function ProfileName({ name }: ProfileNameProps) {
  return <Text style={styles.profileNameText}>{name}</Text>;
}
