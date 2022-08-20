import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { EditProfilePicture } from "../../components/editProfilePicture";
import { Input } from "../../components/input";
import { HeaderWithSaveButton } from "../../components/headerWithSaveButton";

import { styles } from "./styles";

import User from "../../assets/user.png";

export function EditProfile() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.containerView}
    >
      <HeaderWithSaveButton onSavePressed={() => {}} />

      <View style={styles.editProfilePictureView}>
        <EditProfilePicture title="Mudar de foto" onEditPressed={() => {}} />
      </View>

      <View style={styles.inputView}>
        <Input imageSource={User} label="Nome" value="Leo Star" />
      </View>
    </ScrollView>
  );
}
