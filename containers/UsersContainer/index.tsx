// Packages
import React from "react";
import { useSelector } from "react-redux";

// Components
import UsersComponent from "../../components/Users";
import { RootState } from "../../redux/store";

// Styles
import { initialState, UserTypes } from "../../redux/features/users/reducers";
import { StyledUsersContainer } from "./styledComponents";

// Selector
import { usersList } from "../../redux/features/users/reducers";

const UserContainer: React.FC = () => {
  const testState = useSelector(usersList);

  const listUsers = (
    <StyledUsersContainer>
      {testState &&
        testState.map((item: UserTypes) => (
          <UsersComponent
            key={item.id}
            id={item.id}
            email={item.email}
            first_name={item.first_name}
            last_name={item.last_name}
            avatar={item.avatar}
          />
        ))}
    </StyledUsersContainer>
  );

  return <>{listUsers}</>;
};

export default UserContainer;
