// Packages
import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";

// Actions
import { requestUsers } from "../../redux/features/users/reducers";
import { requestAuth, errorAuth } from "../../redux/features/auth/reducers";

// Components
import LoginComponent from "../../components/Login";

// Styled Components
import { StyledLoginContainer } from "./styledComponents";

// Selector
import { authToken } from "../../redux/features/auth/reducers";

export type inputsLogin = {
  email: string;
  password: string;
};

const LoginContainer: React.FC = () => {
  const tokenData = useSelector(authToken)
  const dispatch = useDispatch()
  const router = useRouter()

  const onSubmit = (data: inputsLogin) => {
    dispatch(requestAuth(data))
  };
  
  useEffect(() => {
    if (tokenData.token) {
      dispatch(requestUsers())
      router.push('/users')
    }
  }, [dispatch, router, tokenData])

  useEffect(() => {
    tokenData.error && setTimeout(() => {
      dispatch(errorAuth(''))
    }, 4000)
  }, [dispatch, tokenData])

  return (
    <StyledLoginContainer>
      <LoginComponent onSubmit={onSubmit} tokenData={tokenData} />
    </StyledLoginContainer>
  );
};

export default LoginContainer;
