import React from "react";
import { ScrollView, StatusBar, View } from "react-native";

import { styles } from "./styles";

import { Header } from "./components/Header";
import { EditProfilePicture } from "../../components/editProfilePicture";
import { GradientView } from "./components/GradientView";
import { ProfileEmail } from "./components/ProfileEmail";
import { UpdateInfo } from "./components/UpdateInfo";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParamList } from "../../routes/profileStackNavigator";
import { ProfileName } from "./components/ProfileName";

export function Profile() {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();

  const goToEditProfileScreen = () => navigation.navigate("EditProfile");
  const goToEditEmailScreen = () => navigation.navigate("EditEmail");
  const goToEditPasswordScreen = () => navigation.navigate("EditPassword");

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <GradientView>
          <Header onLogoutPressed={() => {}} />

          <View style={styles.editProfilePictureView}>
            <EditProfilePicture
              title="Editar perfil"
              onEditPressed={goToEditProfileScreen}
            />
          </View>

          <ProfileName name="Leo Star" />
        </GradientView>

        <View style={styles.paddingView}>
          <ProfileEmail onPress={goToEditEmailScreen} />

          <UpdateInfo
            title="Alterar senha"
            onButtonPressed={goToEditPasswordScreen}
          />
          <UpdateInfo
            title="Alterar gêneros favoritos"
            onButtonPressed={() => {}}
          />
        </View>
      </ScrollView>
      <StatusBar barStyle={"dark-content"} backgroundColor="#0D0D0D" />
    </>
  );
}
