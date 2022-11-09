// Packages
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Types
import { inputsLogin } from "../../../../containers/LoginContainer";

// Store
import { AppState } from "../../../store";

export type AuthTypes = {
    error: string | unknown
    isLoading: boolean
    token: string
}

export const initialState: AuthTypes = {
    token: '',
    error: '',
    isLoading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        receiveAuth: (state, action: PayloadAction<AuthTypes>) => {
            state.isLoading = false;
            state.token = action.payload.token;
        },
        errorAuth: (state, action: PayloadAction<unknown>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestAuth: (state, action: PayloadAction<inputsLogin>) => {
            state.isLoading = true;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload,
          };
        },
      },
})

export const authToken = (state: AppState) => state.data_auth;

export const { receiveAuth, requestAuth, errorAuth } = authSlice.actions

export default authSlice.reducer
