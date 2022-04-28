import React from "react";
import UsersList from "../UsersList";

const AllSuggestionContainer = (props) => {
  // Todo
  const users = [];

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
