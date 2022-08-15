import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type EditProfilePictureProps = {
  onEditPressed: () => void;
};

export function EditProfilePicture({ onEditPressed }: EditProfilePictureProps) {
  return (
    <>
      <View style={styles.pictureView}>
        <View style={styles.pictureImage} />
        <TouchableOpacity
          style={styles.editPictureButton}
          onPress={onEditPressed}
        >
          <Text style={styles.editPictureButtonText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.profileNameText}>Leo Star</Text>
    </>
  );
}
