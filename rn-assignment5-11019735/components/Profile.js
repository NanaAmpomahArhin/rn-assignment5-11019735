import { View, StyleSheet, Text } from "react-native";
import ProfilePicture from "./ProfilePicture";

export default function Profile({ isEnabled }) {
  return (
    <View style={styles.wrapper}>
      <ProfilePicture />
      <View style={styles.welcomeNoteWrapper}>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text
          style={[
            styles.userNameContainer,
            { color: isEnabled ? "white" : "black" },
          ]}
        >
          Eric Atsu
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    top: 50,
    left: 18,
    flexDirection: "row",
    width: "300",
    height: "300",
  },
  welcomeNoteWrapper: {
    flexDirection: "column",
  },
  welcome: {
    color: "grey",
    marginBottom: 2,
  },
  userNameContainer: {
    fontFamily: "sans-serif",
    fontSize: 24,
    fonntWeight: "bold",
  },
});
