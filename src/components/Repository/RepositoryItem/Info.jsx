import React from "react";
import Text from "../../Text";
import { Image, StyleSheet, View } from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
  flexParent: {
    flexDirection: "row",
  },
  image: {
    width: theme.iconSize,
    height: theme.iconSize,
    marginRight: 20,
    borderRadius: 5,
    flexBasis: 50,
  },
  infoParent: {
    flex: 1,
    alignItems: "flex-start",
  },
  name: {
  },
  description: {
    marginTop: 5,
    marginBottom: 10,
  },
  languageView: {
    backgroundColor: theme.colors.primary,
    padding: 7,
    borderRadius: 7,
  },
});

const Info = ({ item }) => {
  return (
    <View style={styles.flexParent}>
      <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />

      <View style={styles.infoParent}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={styles.name}
          testID="fullName"
        >
          {item.fullName}
        </Text>

        <Text
          style={styles.description}
          testID="description"
        >
          {item.description}
        </Text>

        <View style={styles.languageView}>
          <Text
            color="white"
            testID="language"
          >
            {item.language}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Info;
