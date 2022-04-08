import React from "react";
import { getUser } from "../../data/data";
import UsersList from "../UsersList";

const AllSuggestionContainer = (props) => {
  const users = [
    getUser("1"),
    getUser("2"),
    getUser("3"),
    getUser("4"),
    getUser("5"),
    getUser("6"),
    getUser("7"),
    getUser("8"),
    getUser("9"),
    getUser("10"),
  ];

  return (
    <div className="central-container">
      <UsersList
        users={users}
        setMainContainer={props.setMainContainer}
        setPage={props.setPage}
      />
    </div>
  );
};

export default AllSuggestionContainer;
