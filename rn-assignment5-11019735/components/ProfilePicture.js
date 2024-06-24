import { Image, View, StyleSheet } from "react-native";

export default function ProfilePicture() {
  return (
    <View style={styles.wrapper}>
      <Image source={require("./../assets/profile.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 25,
  },
});
