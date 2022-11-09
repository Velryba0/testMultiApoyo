// Packages
import React from "react";

// Styled Component
import {
  StyledCardUser,
  StyledImageProfile,
  StyledTitleUserCard,
} from "./styledComponents";

// Types
import { UserTypes } from "../../redux/features/users/reducers";

const UsersComponent: React.FC<UserTypes> = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
}) => {
  return (
    <StyledCardUser>
      <StyledImageProfile
        src={avatar}
        alt={"image-profile"}
        width={120}
        height={120}
      />
      <StyledTitleUserCard>Nombre: {first_name}</StyledTitleUserCard>
      <StyledTitleUserCard>Apellido: {last_name}</StyledTitleUserCard>
      <StyledTitleUserCard>Email: {email}</StyledTitleUserCard>
    </StyledCardUser>
  );
};

export default UsersComponent;
