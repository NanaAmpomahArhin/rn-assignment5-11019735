import { Image, View, StyleSheet } from "react-native";

export default function Card() {
  return (
    <View style={styles.wrapper}>
      <Image source={require("./../assets/Card.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    top: 30,
    left: 12,
  },
});
