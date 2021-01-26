import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../../..";
import { RootState } from "../../../app/store";
import SubDistrictApi from "./subDistrict.api";

export interface SubDistrictSlice {
    subDistrict?: any[];
    single?: any;
    isLoading?: boolean;
    error?: ApiErrorResponse<any>;
}

export const getAddressSubDistrict = createAsyncThunk(
    'subDistrictState/subDistrictList',
    async (cityId: string | undefined = undefined, { getState, rejectWithValue}) =>{
        const { token } = (getState() as RootState).user;
        try {
            return await SubDistrictApi.getAllSubDistrict(token as string, cityId as string)
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
)

const subDistrictSlice = createSlice({
    name: 'subDistrictState',
    initialState: {} as SubDistrictSlice,
    reducers: {
        setCity: (state, action) => {
            state.subDistrict = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAddressSubDistrict.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAddressSubDistrict.fulfilled, (state, {payload})=> {
            state.subDistrict = payload;
            state.isLoading = false;
        });
        builder.addCase(getAddressSubDistrict.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        })
    }
})

export default subDistrictSlice.reducer;