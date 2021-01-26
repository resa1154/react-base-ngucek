import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../../..";
import { RootState } from "../../../app/store";
import ProvinceApi from "./province.api";

export interface ProvinceSlice {
    province?: any[];
    single?: any;
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const getAddressProvince = createAsyncThunk(
    'provinceState/provinceList',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;

        try {
            return await ProvinceApi.getAllProvince(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

const provinceSlice = createSlice({
    name: 'provinceState',
    initialState: {} as ProvinceSlice,
    reducers: {
        setProvince: (state, action) => {
            state.province = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAddressProvince.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAddressProvince.fulfilled, (state, {payload})=> {
            state.province = payload;
            state.isLoading = false;
        });
        builder.addCase(getAddressProvince.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        })
    }
})

export default provinceSlice.reducer;