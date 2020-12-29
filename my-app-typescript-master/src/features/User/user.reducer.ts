import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import { UserModel } from "./model";
import UserApi from "./user.api";

export interface UsersSlice{
    list?:any;
    single?:any;
    filter?:any;
    name?:any;
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataUser = createAsyncThunk(
    'getDataUserState/getDataUser',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await UserApi.getDataUser(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const createUser = createAsyncThunk(
    'createUserState/createUser',
    async (UserModel: UserModel, {getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await UserApi.createDataUser(token as string, UserModel);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

const usersSlice = createSlice({
    name: 'createDataUserState',
    initialState: {} as UsersSlice,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        setSingle: (state, action) => {
            state.single = action.payload;
          },
        setLoading: (state, action) => {
        state.isLoading = action.payload;
        },
        setFilter:(state, action) =>{
          state.filter = action.payload;
       
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            // state.status = "success";
          });
      
          builder.addCase(createUser.fulfilled, (state, { payload }) => {
            state.name = payload.name;
            state.isLoading = false;
            // state.status = "";
          });
          builder.addCase(createUser.rejected, (state, { payload }) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
          });

    builder.addCase(getDataUser.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getDataUser.fulfilled, (state, {payload})=> {
        state.list = payload;
        state.isLoading = false;
    });
    // builder.addCase(getDataRoleSingle.fulfilled, (state, { payload }) => {
    //     state.single = payload[0];
    //     state.isLoading = false;
    //   });
    builder.addCase(getDataUser.rejected, (state, {payload}) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
    });
    },
})
export const { setList, setSingle,setLoading, setFilter} = usersSlice.actions;

export default usersSlice.reducer;