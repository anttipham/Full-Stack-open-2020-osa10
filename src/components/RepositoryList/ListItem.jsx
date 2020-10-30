import React from "react";
import { Image, StyleSheet, View } from "react-native";
import theme from "../../theme";
import Statistics from "./Statistics";
import Text from "../Text";
import Container from "../Container";

const styles = StyleSheet.create({
  flexParent: {
    flexDirection: "row"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 5
  },
  name: {
    // marginTop: 15
  },
  description: {
    marginTop: 5,
    marginRight: 100,
    marginBottom: 10,
  },
  languageView: {
    backgroundColor: theme.colors.primary,
    padding: 7,
    borderRadius: 7,
    alignSelf: "flex-start",
  },
});

const ListItem = ({ item }) => {
  return (
    <Container testID="repositoryItem">
      <View style={styles.flexParent}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        <View>
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

      <Statistics item={item} />
    </Container>
  );
};

export default ListItem;
