import React from "react";
import Statistics from "./Statistics";
import Paper from "../../Paper";
import Info from "./Info";
import TextButton from "../../TextButton";
import { Linking } from "react-native";

const ListItem = ({ repository, showGitHubLink }) => {
  if (showGitHubLink && !repository.url) {
    throw new Error("YOU IDIOT, YOU FORGOT TO ADD item.url!");
  }

  return (
    <Paper testID="repositoryItem">
      <Info item={repository} />
      <Statistics item={repository} />

      {showGitHubLink &&
        <TextButton onPress={() => Linking.openURL(repository.url)}>
          Show in GitHub
        </TextButton>
      }
    </Paper>
  );
};

export default ListItem;
