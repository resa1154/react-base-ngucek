import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiErrorResponse } from "../..";
import {RootState} from "../../app/store";
import MitraApi from "../Mitra/mitra.api";
import { MitraModel, MitraDetailModel } from './models';

export interface MitraSlice {
    name?: string;
    list? : any;
    single? :any;
    filter?:any;
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataMitra = createAsyncThunk(
    'getDataMitraState/getDataMitra',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await MitraApi.getDataMitra(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const createDataMitra = createAsyncThunk(
    'createMitraState/createMitra',
    async (DataMitraModel: MitraModel, {getState, rejectWithValue }) => {
        const { token } = (getState() as RootState).user;
        try {
        return await MitraApi.createMitra(token as string, DataMitraModel);
        } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
    );

export const getMitraSingle = createAsyncThunk(
        'getMitraSingleState/mitraSingle',
        async (id: string, { getState, rejectWithValue }) => {
          const { token } = (getState() as RootState).user;
          try {
            return await MitraApi.getSingle(id);
          } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
          }
        }
      );

      
const mitraSlice = createSlice({
    name: 'createDataMitraState',
    initialState: {} as MitraSlice,
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
        setLoading: (state, action) => {
        state.isLoading = action.payload;
        },
        setFilter:(state, action) =>{
          state.filter = action.payload;
        //   state.list = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(getDataMitra.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getDataMitra.fulfilled, (state, {payload})=> {
        state.list = payload;
        state.isLoading = false;
    });
    builder.addCase(getMitraSingle.fulfilled, (state, { payload }) => {
        state.single = payload[0];
        state.isLoading = false;
      });
    builder.addCase(getDataMitra.rejected, (state, {payload}) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
    });
      builder.addCase(createDataMitra.pending, (state) => {
        state.isLoading = true;
      });
  
      builder.addCase(createDataMitra.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.isLoading = false;
      });
  
      builder.addCase(createDataMitra.rejected, (state, { payload }) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
      });
    },
})

export const { setList, setSingle, setName, setLoading, setFilter} = mitraSlice.actions;

export default mitraSlice.reducer;