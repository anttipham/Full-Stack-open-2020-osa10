import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../../theme";
import Paper from "../../Paper";
import Text from "../../Text";
import { format } from "date-fns";

const styles = StyleSheet.create({
  flexParent: {
    flexDirection: "row",
  },
  flexChild: {
    flex: 1,
    alignItems: "flex-start",
  },
  rating: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: theme.iconSize / 2,
    width: theme.iconSize,
    height: theme.iconSize,
    marginRight: 20,
    flexBasis: 50,
  },
});

const Review = ({ review }) => {
  return (
    <Paper style={styles.flexParent}>
      <View style={styles.rating}>
        <Text
          fontWeight="bold"
          fontSize="heading"
          color="primary"
        >
          {review.rating}
        </Text>
      </View>

      <View style={styles.flexChild}>
        <Text fontWeight="bold" fontSize="subheading">
          {review.user.username}
        </Text>
        <Text color="textSecondary">
          {format(review.createdAt, "dd.MM.yyyy")}
        </Text>
        <Text>
          {review.text}
        </Text>
      </View>
    </Paper>
  );
};

export default Review;
