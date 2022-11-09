// Packages
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Store
import { AppState } from "../../../store";

export type UserTypes = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

type ListUsers = {
    users: UserTypes[]
    hasError: boolean
    isLoading: boolean
}

export const initialState: ListUsers = {
    users: [],
    hasError: false,
    isLoading: false
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        receiveUsers: (state, action: PayloadAction<UserTypes[]>) => {
            state.isLoading = false;
            state.users = action.payload;
        },
        errorUsers: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        requestUsers: (state) => {
            state.isLoading = true;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
          return {
            ...state,
            ...action.payload.users,
          };
        },
      },
})

export const usersList = (state: AppState) => state.data_users.users;

export const { requestUsers, receiveUsers, errorUsers } = usersSlice.actions

export default usersSlice.reducer
