import React from "react";
import { TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import RepositoryItem from "../RepositoryItem";

const ListItem = ({ item }) => {
  const history = useHistory();

  return (
    <TouchableOpacity onPress={() => history.push(`/repositories/${item.id}`)}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
};

export default ListItem;
