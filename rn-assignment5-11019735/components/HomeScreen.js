import { View, StyleSheet } from "react-native";
import Profile from "./Profile";
import Search from "./Search";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Profile />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
