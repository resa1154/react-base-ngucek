import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiErrorResponse } from "../..";
import {RootState} from "../../app/store";
import DataTestApi from "./dataTest.api";
import { DataTestModel } from './models';

export interface DataTestSlice {
    name?: string;
    list? : any[];
    single? : DataTestModel;
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataTest = createAsyncThunk(
    'getDataTestState/getDataTest',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await DataTestApi.getDataTest(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const createDataTest = createAsyncThunk(
    'createDataTestState/createDataTest',
    async (DataTestModel: DataTestModel, {getState, rejectWithValue }) => {
        const { token } = (getState() as RootState).user;
        try {
        return await DataTestApi.createDataTest(token as string, DataTestModel);
        } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
    );

const dataTestSlice = createSlice({
    name: 'createDataTestState',
    initialState: {} as DataTestSlice,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        setName: (state, action) => {
        state.name = action.payload;
        },
        setLoading: (state, action) => {
        state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
    builder.addCase(getDataTest.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getDataTest.fulfilled, (state, {payload})=> {
        state.list = payload;
        state.isLoading = false;
    });
    builder.addCase(getDataTest.rejected, (state, {payload}) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
    });
      builder.addCase(createDataTest.pending, (state) => {
        state.isLoading = true;
      });
  
      builder.addCase(createDataTest.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.isLoading = false;
      });
  
      builder.addCase(createDataTest.rejected, (state, { payload }) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
      });
    },
})

export const { setList, setName, setLoading} = dataTestSlice.actions;

export default dataTestSlice.reducer;