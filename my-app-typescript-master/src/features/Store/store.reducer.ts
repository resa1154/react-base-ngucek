import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import { AccountBankModel } from "./model";
import StoreApi from "./store.api";

export interface StoreSlice{
    list?:any;
    filter?:any;
    name?:any;
    single?:any;
    isLoading?:boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataStore = createAsyncThunk(
    'getDataStoreState/getDataStore',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await StoreApi.getDataStore(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const createAccountBank = createAsyncThunk(
    'createAccountState/createAccountBank',
    async (DataAccountBank: AccountBankModel, {getState, rejectWithValue }) => {
        const { token } = (getState() as RootState).user;
        try {
        return await StoreApi.createAccountBank(token as string, DataAccountBank);
        } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
    );

const storeSlice = createSlice({
    name:'createDataStoreSlice',
    initialState:{} as StoreSlice,
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
        builder.addCase(getDataStore.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getDataStore.fulfilled, (state, {payload})=> {
            const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
            state.list = ArrObj;
            // state.list = payload;
            state.isLoading = false;
        });
        // builder.addCase(getCustomerSingle.fulfilled, (state, { payload }) => {
        //     state.single = payload[0];
        //     state.isLoading = false;
        //   });
        builder.addCase(getDataStore.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        });
        builder.addCase(createAccountBank.pending, (state) => {
            state.isLoading = true;
          });
      
          builder.addCase(createAccountBank.fulfilled, (state, { payload }) => {
            state.name = payload.name;
            state.isLoading = false;
          });
      
          builder.addCase(createAccountBank.rejected, (state, { payload }) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
          });
        },
})

export const { setList, setSingle, setFilter, setName} = storeSlice.actions;

export default storeSlice.reducer;