import { View, Image, StyleSheet } from "react-native";

export default function Search({ isEnabled }) {
  return (
    <View
      style={[
        styles.wrapper,
        { backgroundColor: isEnabled ? "rgba(75, 60, 153, 0.1)" : "#E5E5E5" },
      ]}
    >
      <Image
        style={[styles.image, isEnabled && { tintColor: "#E5E5E5" }]}
        source={require("./../assets/search.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    top: 50,
    left: 135,
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
