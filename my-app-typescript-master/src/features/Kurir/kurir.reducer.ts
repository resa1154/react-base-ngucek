import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import KurirApi from "./kurir.api";


export interface KurirSlice{
    list?:any;
    single?:any;
    filter?:any;
    isLoading?:boolean;
    error?: ApiErrorResponse<any>;
}

export const getDataKurir = createAsyncThunk(
    'getDataKurirState/getDataKurir',
    async (id: string | undefined = undefined, { getState, rejectWithValue}) => {
        const { token } = (getState() as RootState).user;
        try {
            return await KurirApi.getDataKurir(token as string);
        } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
        }
    }
);

export const getKurirSingle = createAsyncThunk(
    'getMitraSingleState/mitraSingle',
    async (id: string, { getState, rejectWithValue }) => {
      const { token } = (getState() as RootState).user;
      try {
        return await KurirApi.getSingle(id);
      } catch (e) {
        return rejectWithValue(e as ApiErrorResponse<any>);
      }
    }
  );

const kurirSlice = createSlice({
    name:'createDataKurirState',
    initialState: {} as KurirSlice,
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
    builder.addCase(getDataKurir.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getDataKurir.fulfilled, (state, {payload})=> {
        state.list = payload;
        state.isLoading = false;
    });
    builder.addCase(getKurirSingle.fulfilled, (state, { payload }) => {
        state.single = payload[0];
        state.isLoading = false;
      });
    builder.addCase(getDataKurir.rejected, (state, {payload}) => {
        state.error = payload as ApiErrorResponse<any>;
        state.isLoading = false;
    });
    //   builder.addCase(createDataMitra.pending, (state) => {
    //     state.isLoading = true;
    //   });
  
    //   builder.addCase(createDataMitra.fulfilled, (state, { payload }) => {
    //     state.name = payload.name;
    //     state.isLoading = false;
    //   });
  
    //   builder.addCase(createDataMitra.rejected, (state, { payload }) => {
    //     state.error = payload as ApiErrorResponse<any>;
    //     state.isLoading = false;
    //   });
    },
})

export const { setList, setSingle, setFilter} = kurirSlice.actions;

export default kurirSlice.reducer;