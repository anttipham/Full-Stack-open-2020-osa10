import React from "react";
import Statistics from "./Statistics";
import Paper from "../Paper";
import Info from "./Info";
import TextButton from "../TextButton";
import { Linking } from "react-native";

const ListItem = ({ item, showGitHubLink }) => {
  return (
    <Paper testID="repositoryItem">
      <Info item={item} />
      <Statistics item={item} />

      {showGitHubLink &&
        <TextButton onPress={() => Linking.openURL("https://www.youtube.com/")}>
          Show in GitHub
        </TextButton>
      }
    </Paper>
  );
};

export default ListItem;
