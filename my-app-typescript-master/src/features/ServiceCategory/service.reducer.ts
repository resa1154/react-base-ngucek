import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import { ServiceCategoryModel, ServicesModel } from "./model";
import ServiceApi from "./service.api";

export interface ServiceSlice{
    id?:number;
    no?:number;
    categoryname?:string;
    headcategory?:string;
    note?:string;
    description?:string;
    status?:string;
    price?:string;
    partnercommision?:string;
    list?:any;
    listservices?:any;
    single?:any;
    singleservices?:any;
    filter?:any;
    filterservices?:any
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const createServiceCategory = createAsyncThunk(
    'createService/createServiceCategory',
    async (CreateServiceCategory: ServiceCategoryModel, { rejectWithValue }) => {
      try {
        return await ServiceApi.CreateServiceCategory(CreateServiceCategory);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
  );

  export const createServices = createAsyncThunk(
    'createServices/createServices',
    async (CreateServices: ServicesModel, { rejectWithValue }) => {
      try {
        return await ServiceApi.CreateServices(CreateServices);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
  );

export const getDataServiceCategory = createAsyncThunk(
    'getDataServiceCategoryState/getDataServiceCategory',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await ServiceApi.getDataServiceCategory(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const getServiceCategorySingle = createAsyncThunk(
  'getServiceCategorySingle/ServiceCategorySingle',
  async (id: string, { getState, rejectWithValue }) => {
    // const { token } = (getState() as RootState).user;
    try {
      return await ServiceApi.getSingleCategory(id);
    } catch (e) {
      return rejectWithValue(e as ApiErrorResponse<any>);
    }
  }
);

export const getDataServices = createAsyncThunk(
  'getDataServices/getDataServices',
  async(id:string | undefined = undefined, {getState, rejectWithValue}) =>{
    const { token } = (getState() as RootState).user;
    try {
        return await ServiceApi.getDataServices(token as string);
    } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
    }
  }
);

export const getServicesSingle = createAsyncThunk(
  'getServiceSingle/ServiceSingle',
  async (id: string, { getState, rejectWithValue }) => {
    // const { token } = (getState() as RootState).user;
    try {
      return await ServiceApi.getSingleServices(id);
    } catch (e) {
      return rejectWithValue(e as ApiErrorResponse<any>);
    }
  }
);

const ServiceSlice = createSlice({
    name: 'CreateDataServiceSlice',
    initialState: {} as ServiceSlice,
    reducers:{
        setList:(state,action) =>{
            state.list = action.payload;
           
        },
        setSingle: (state, action) => {
          state.single = action.payload;
        },
        setListServices:(state,action) =>{
          state.listservices = action.payload;
      },
      setSingleServices: (state, action) => {
        state.single = action.payload;
      },
      setFilter:(state, action) =>{
        state.filter = action.payload;
      },
      setFilterServices:(state, action) =>{
        state.filterservices = action.payload;
      },
      setLoading: (state, action) => {
        state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDataServiceCategory.fulfilled, (state, {payload})=> {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getDataServices.fulfilled, (state, {payload})=> {
          state.listservices = payload;
          state.isLoading = false;
      });
        builder.addCase(createServiceCategory.pending, (state) => {
            state.isLoading = true;
          });
      
          builder.addCase(createServiceCategory.fulfilled, (state, { payload }) => {
            state.id = payload.id;
            state.categoryname = payload.categoryname;
            state.headcategory = payload.headcategory;
            state.note = payload.note;
            state.status = payload.status;
            state.isLoading = false;
          });
      
          builder.addCase(createServices.fulfilled, (state, { payload }) => {
            state.id = payload.id;
            state.no = payload.no;
            state.categoryname = payload.servicesname;
            state.headcategory = payload.headcategory;
            state.note = payload.note;
            state.description = payload.description;
            state.status = payload.status;
            state.price = payload.price;
            state.partnercommision = payload.partnercommission;
            state.isLoading = false;
          });

          builder.addCase(createServiceCategory.rejected, (state, { payload }) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
          });

          builder.addCase(getServiceCategorySingle.fulfilled, (state, { payload }) => {
            state.single = payload[0];
            state.isLoading = false;
          });
          builder.addCase(getServicesSingle.fulfilled, (state, { payload }) => {
            state.singleservices = payload[0];
            state.isLoading = false;
          });
    }
})

export const {setList, setListServices, setFilter, setFilterServices, setLoading} = ServiceSlice.actions;

export default ServiceSlice.reducer;