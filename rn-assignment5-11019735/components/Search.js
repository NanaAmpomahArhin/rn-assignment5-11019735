import { View, Image, StyleSheet } from "react-native";

export default function Search() {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require("./../assets/search.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    top: 40,
    left: 130,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 25,
  },
});
