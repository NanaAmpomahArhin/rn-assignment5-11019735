import { View, StyleSheet, ScrollView } from "react-native";
import Profile from "./Profile";
import Search from "./Search";
import Card from "./Card";
import ActionIcons from "./ActionIcons";
import Transaction from "./Transaction";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Profile />
        <Search />
      </View>
      <Card />
      <ActionIcons />
      <Transaction />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
  },
});
