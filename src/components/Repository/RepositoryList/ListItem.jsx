import React from "react";
import { TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import RepositoryItem from "../RepositoryItem";

const ListItem = ({ repository }) => {
  const history = useHistory();

  return (
    <TouchableOpacity onPress={() => history.push(`/repositories/${repository.id}`)}>
      <RepositoryItem repository={repository} />
    </TouchableOpacity>
  );
};

export default ListItem;
