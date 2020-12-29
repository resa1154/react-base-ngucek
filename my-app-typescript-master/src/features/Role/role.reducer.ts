import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import RoleApi from "./role.api";

export interface RoleSlice{
    list?:any;
    elem?:any;
    single?:any;
    filter?:any;
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataRole = createAsyncThunk(
    'getDataRoleState/getDataRole',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await RoleApi.getDataRole(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const getDataRoleSingle = createAsyncThunk(
    'getRoleSingleState/roleSingle',
    async (id: string, { getState, rejectWithValue }) => {
      const { token } = (getState() as RootState).user;
      try {
        return await RoleApi.getSingle(id);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
);

const roleSlice = createSlice({
    name: 'createDataRoleState',
    initialState: {} as RoleSlice,
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
        //   state.list = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(getDataRole.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getDataRole.fulfilled, (state, {payload})=> {
        state.list = payload;
        state.isLoading = false;
    });
    builder.addCase(getDataRoleSingle.fulfilled, (state, { payload }) => {
        state.single = payload[0];
        state.isLoading = false;
      });
    builder.addCase(getDataRole.rejected, (state, {payload}) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
    });
    },
})
export const { setList, setSingle,setLoading, setFilter} = roleSlice.actions;

export default roleSlice.reducer;
