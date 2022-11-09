// Packages
import styled from "styled-components";
import Image from "next/image";

export const StyledCardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60%;
  background-color: white;
  border-radius: 9px;
  margin: 0 12px 0 21px;
`;

export const StyledImageProfile = styled(Image)`
    border-radius: 50%;
    margin-bottom: 60px;
`

export const StyledTitleUserCard = styled.p`
    color: black;
    width: 80vw;
    text-align: center;
`