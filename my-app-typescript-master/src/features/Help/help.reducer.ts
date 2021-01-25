import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import HelpApi from "./help.api";

export interface HelpSlice{
    list?:any;
    single?:any;
    name?:any;
    filter?:any;
    isLoading?:boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataHelp = createAsyncThunk(
    'getDataHelpState/getDataHelp',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await HelpApi.getDataHelp(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const getDataHelpSingle = createAsyncThunk(
    'getHelpSingleState/helpSingle',
    async (id: string, { getState, rejectWithValue }) => {
      const { token } = (getState() as RootState).user;
      try {
        return await HelpApi.getSingleHelp(id);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
  );


const helpSlice = createSlice({
    name:'createDataHelpSlice',
    initialState:{} as HelpSlice,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        setSingle: (state, action) => {
            state.single = action.payload;
          },
        setName: (state, action) => {
        state.name = action.payload;
        },
        // setLoading: (state, action) => {
        // state.isLoading = action.payload;
        // },
        setFilter:(state, action) =>{
          state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataHelp.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getDataHelp.fulfilled, (state, {payload})=> {
            const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
            state.list = ArrObj;
            // state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getDataHelpSingle.fulfilled, (state, { payload }) => {
            const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
    
            state.single = ArrObj[0];
            state.isLoading = false;
          });
        builder.addCase(getDataHelp.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        });

        },
})

export const { setList, setSingle, setFilter, setName} = helpSlice.actions;

export default helpSlice.reducer;