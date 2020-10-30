import React from "react";
import Statistics from "./Statistics";
import Container from "../Container";
import Info from "./Info";
import TextButton from "../TextButton";

const ListItem = ({ item, showGitHubLink }) => {
  return (
    <Container testID="repositoryItem">
      <Info item={item} />
      <Statistics item={item} />

      {showGitHubLink &&
        <TextButton>Show in GitHub</TextButton>
      }
    </Container>
  );
};

export default ListItem;
