import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { actionIcons } from "../Data/ActionIconsData";

export default function ActionIcons() {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={actionIcons}
        renderItem={({ item }) => (
          <View style={styles.imageAndNameContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View>
              <Text style={styles.iconName}>{item.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    left: 0,
    top: 110,
  },
  imageAndNameContainer: {
    width: 100,
    height: 120,
    marginRight: -15,
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "#E5E5E5",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  iconName: {
    fontFamily: "sans-serif",
    fontSize: 16,
    marginTop: 5,
  },
});
