import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type EditProfilePictureProps = {
  onEditPressed: () => void;
  title: string;
};

export function EditProfilePicture({
  onEditPressed,
  title,
}: EditProfilePictureProps) {
  return (
    <>
      <View style={styles.pictureView}>
        <View style={styles.pictureImage} />
        <TouchableOpacity
          style={styles.editPictureButton}
          onPress={onEditPressed}
        >
          <Text style={styles.editPictureButtonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
