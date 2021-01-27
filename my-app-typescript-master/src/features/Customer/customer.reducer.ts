import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import CustomerApi from "./customer.api";
import { CustomerModel } from "./model";

export interface CustomerSlice{
    list?:any;
    single?:any;
    filter?:any;
    isLoading?:boolean;
    status?:string;
    error?: ApiErrorResponse<any>;
}

export const createDataCustomer = createAsyncThunk(
  'createCustomerState/createCustomer',
  async (DataCustomerModel: CustomerModel, {getState, rejectWithValue }) => {
      const { token } = (getState() as RootState).user;
      try {
      return await CustomerApi.createCustomer(token as string, DataCustomerModel);
      } catch (e) {
      return rejectWithValue(e as ApiErrorResponse<any>);
      }
  }
);

export const getDataCustomer = createAsyncThunk(
    'getDataCustomerState/getDataCustomer',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await CustomerApi.getDataCustomer(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const deleteDataCustomer = createAsyncThunk(
  'deleteWarehouseState/deleteWarehouseList',
  async (customerId: string, {getState, rejectWithValue}) =>{
      const { token } = (getState() as RootState).user;
      try {
          return await CustomerApi.deleteCustomer(token as string, customerId);
      } catch (e) {
          return rejectWithValue(e as ApiErrorResponse<any>);
      }
  }
)

export const getDataProvince = createAsyncThunk(
  'getDataProvinceState/getDataProvince',
  async (id:string | undefined = undefined, {getState, rejectWithValue}) => {
    const { token } = (getState() as RootState).user;
    try {
        return await CustomerApi.getDataCustomer(token as string);
    } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
    }
  }
);

export const getCustomerSingle = createAsyncThunk(
    'getCustomerSingleState/customerSingle',
    async (id: string, { getState, rejectWithValue }) => {
      const { token } = (getState() as RootState).user;
      try {
        return await CustomerApi.getSingle(token as string, id);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
  );

  
const customerSlice = createSlice({
    name:'createDataCustomerState',
    initialState: {} as CustomerSlice,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        setSingle: (state, action) => {
            state.single = action.payload;
          },
        // setName: (state, action) => {
        // state.name = action.payload;
        // },
        // setLoading: (state, action) => {
        // state.isLoading = action.payload;
        // },
        setFilter:(state, action) =>{
          state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(getDataCustomer.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getDataCustomer.fulfilled, (state, {payload})=> {
        state.list = payload;
        state.isLoading = false;
    });
    builder.addCase(getCustomerSingle.fulfilled, (state, { payload }) => {
        state.single = payload[0];
        state.isLoading = false;
      });
    builder.addCase(getDataCustomer.rejected, (state, {payload}) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
    });
    builder.addCase(deleteDataCustomer.pending, (state) => {
      state.status = "deleted"
  })
  builder.addCase(deleteDataCustomer.fulfilled, (state) => {
      state.status = ""
  })
    },
})

export const { setList, setSingle, setFilter} = customerSlice.actions;

export default customerSlice.reducer;