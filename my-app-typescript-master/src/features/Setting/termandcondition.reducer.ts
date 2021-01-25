import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import TermandConditionApi from "./termandcondition.api";

export interface TermandConditionSlice{
    list?:any;
    single?:any;
    name?:any;
    filter?:any;
    isLoading?:boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataTermandCondition = createAsyncThunk(
    'getDataTermState/getDataTerm',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await TermandConditionApi.getDataTermandCondition(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const getDataTermSingle = createAsyncThunk(
    'getTermSingleState/termSingle',
    async (id: string, { getState, rejectWithValue }) => {
      const { token } = (getState() as RootState).user;
      try {
        return await TermandConditionApi.getSingle(id);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
  );


const termSlice = createSlice({
    name:'createDataTermSlice',
    initialState:{} as TermandConditionSlice,
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
        builder.addCase(getDataTermandCondition.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getDataTermandCondition.fulfilled, (state, {payload})=> {
            const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
            state.list = ArrObj;
            // state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getDataTermSingle.fulfilled, (state, { payload }) => {
            const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
    
            state.single = ArrObj[0];
            state.isLoading = false;
          });
        builder.addCase(getDataTermandCondition.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        });

        },
})

export const { setList, setSingle, setFilter, setName} = termSlice.actions;

export default termSlice.reducer;