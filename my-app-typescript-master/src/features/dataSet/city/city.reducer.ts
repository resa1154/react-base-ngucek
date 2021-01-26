import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../../..";
import { RootState } from "../../../app/store";
import CityApi from "./city.api";

export interface CitySlice {
    city?: any[];
    single?: any;
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const getAddressCity = createAsyncThunk(
    'cityState/cityList',
    async (provinceId: string | undefined = undefined, { getState, rejectWithValue}) =>{
        const { token } = (getState() as RootState).user;
        try {
            return await CityApi.getAllCity(token as string, provinceId as string)
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
)

const citySlice = createSlice({
    name: 'cityState',
    initialState: {} as CitySlice,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAddressCity.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAddressCity.fulfilled, (state, {payload})=> {
            state.city = payload;
            state.isLoading = false;
        });
        builder.addCase(getAddressCity.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        })
    }
})

export default citySlice.reducer;