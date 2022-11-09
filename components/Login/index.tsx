// Packages
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Styles Components
import {
  StyledTitleLogin,
  StyledInput,
  StyledInputSubmit,
  StyledLoginComponent,
  StyledErrorValidation,
  StyledInputContainer,
  StyledShowPassword,
  StyledHidePassword,
} from "./styledComponents";

// Types
import { AuthTypes } from "../../redux/features/auth/reducers";

type props = {
  tokenData: AuthTypes;
  onSubmit: (data: inputsLogin) => void;
};

type inputsLogin = {
  email: string;
  password: string;
};

const LoginComponent: React.FC<props> = ({ tokenData, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputsLogin>();

  const inputEmail = (
    <StyledInputContainer>
      <StyledInput
        type={"email"}
        placeholder="tunombre@ejemplo.com"
        {...register("email", { required: "El email es requerido" })}
      />
      {errors.email?.type === "required" && (
        <StyledErrorValidation role="alert">
          El email es requerido
        </StyledErrorValidation>
      )}
      {tokenData.error ? (
        <StyledErrorValidation role="alert">
          {`${tokenData.error}`}
        </StyledErrorValidation>
      ) : <></>}
    </StyledInputContainer>
  );

  const inputPassword = (
    <StyledInputContainer>
      <StyledInput
        type={`${showPassword ? "text" : "password"}`}
        placeholder="contraseña"
        {...register("password", {
          required: "La constraseña es requerida",
        })}
      />
      {!showPassword ? (
        <StyledShowPassword onClick={() => setShowPassword(!showPassword)} />
      ) : (
        <StyledHidePassword onClick={() => setShowPassword(!showPassword)} />
      )}
      {errors.password?.type === "required" && (
        <StyledErrorValidation role="alert">
          La contraseña es requerida
        </StyledErrorValidation>
      )}
    </StyledInputContainer>
  );

  return (
    <StyledLoginComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledTitleLogin>Inicia Sesión</StyledTitleLogin>
        {inputEmail}
        {inputPassword}
        <StyledInputSubmit type={"submit"} value={"Enviar"} />
      </form>
    </StyledLoginComponent>
  );
};

export default LoginComponent;
