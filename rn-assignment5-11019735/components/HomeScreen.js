import { View, StyleSheet } from "react-native";
import Profile from "./Profile";
import Search from "./Search";
import Card from "./Card";
import ActionIcons from "./ActionIcons";
import Transaction from "./Transaction";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <Search />
      </View>
      <Card />
      <ActionIcons />
      <Transaction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "colum",
  },
  header: {
    flexDirection: "row",
  },
});
