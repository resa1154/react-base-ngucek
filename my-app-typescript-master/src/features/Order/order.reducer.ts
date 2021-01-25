import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import OrderApi from "./order.api";

export interface OrderSlice{
    list?:any;
    single?:any;
    name?:any;
    filter?:any;
    isLoading?:boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataOrder = createAsyncThunk(
    'getDataOrderState/getDataOrder',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await OrderApi.getDataOrderReguler(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const getDataOrderSingle = createAsyncThunk(
    'getOrderSingleState/orderSingle',
    async (id: string, { getState, rejectWithValue }) => {
      const { token } = (getState() as RootState).user;
      try {
        return await OrderApi.getSingleReguler(id);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
  );


const orderSlice = createSlice({
    name:'createDataOrderSlice',
    initialState:{} as OrderSlice,
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
        builder.addCase(getDataOrder.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getDataOrder.fulfilled, (state, {payload})=> {
            const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
            state.list = ArrObj;
            // state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getDataOrderSingle.fulfilled, (state, { payload }) => {
            const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
    
            state.single = ArrObj[0];
            state.isLoading = false;
          });
        builder.addCase(getDataOrder.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        });

        },
})

export const { setList, setSingle, setFilter, setName} = orderSlice.actions;

export default orderSlice.reducer;