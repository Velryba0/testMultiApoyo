// Packages
import styled from "styled-components";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

export const StyledLoginComponent = styled.div`
  width: 100%;
  height: 100%;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    label {
      color: white;
    }
    label:focus {
      color: red;
    }
  }
`;

export const StyledTitleLogin = styled.h1`
  color: white;
  margin-bottom: 50px;
`;

export const StyledPlaceholder = styled.p`
  color: white;
  overflow: visible;
`;

export const StyledErrorValidation = styled.p`
  position: absolute;
  top: 15%;
  left: 20%;
  font-size: 13px;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: 60%;
  background-color: transparent;
  border-bottom: solid 1px white;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-bottom: 50px;
  font-size: 14px;
  ::placeholder {
    color: white;
    opacity: 0.5;
    visibility: visible;
  }
`;

export const StyledShowPassword = styled(IoEyeSharp)`
  position: absolute;
  right: 21%;
`

export const StyledHidePassword = styled(IoEyeOffSharp)`
  position: absolute;
  right: 21%;
`

export const StyledInputSubmit = styled.input`
  width: 150px;
  height: 30px;
  margin-top: 33px;
  border-radius: 9px;
  background-color: #1c282a;
  border: none;
  opacity: 1;
  &:active {
    opacity: 0.6;
  }
`;
