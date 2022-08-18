import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageSourcePropType,
  TextInputProps,
} from "react-native";

import { styles } from "./styles";

type InputProps = TextInputProps & {
  imageSource: ImageSourcePropType;
  label: string;
};

export function Input({ imageSource, label, ...props }: InputProps) {
  return (
    <View style={styles.containerView}>
      <Text style={styles.labelText}>{label}</Text>

      <View style={styles.inputView}>
        <Image source={imageSource} style={styles.image} />

        <TextInput
          placeholderTextColor="#767676"
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
}
