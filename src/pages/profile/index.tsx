import React from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";

import { Header } from "./components/Header";
import { EditProfilePicture } from "./components/EditProfilePicture";
import { GradientView } from "./components/GradientView";
import { ProfileEmail } from "./components/ProfileEmail";
import { UpdateInfo } from "./components/UpdateInfo";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParamList } from "../../routes/profileStackNavigator";

export function Profile() {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();

  const goToEditProfileScreen = () => navigation.navigate("EditProfile");

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <GradientView>
        <Header onLogoutPressed={() => {}} />

        <EditProfilePicture onEditPressed={goToEditProfileScreen} />
      </GradientView>

      <View style={styles.paddingView}>
        <ProfileEmail />

        <UpdateInfo title="Alterar senha" onButtonPressed={() => {}} />
        <UpdateInfo
          title="Alterar gêneros favoritos"
          onButtonPressed={() => {}}
        />
      </View>
    </ScrollView>
  );
}
