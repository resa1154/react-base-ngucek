import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiErrorResponse } from "../..";
import { RootState } from "../../app/store";
import { AccountBankModel, InformationStoreModel, OffDayStoreModel, OperationHoursModel } from "./model";
import StoreApi from "./store.api";

export interface StoreSlice{
    list?:any;
    listbanking?:any;
    filter?:any;
    name?:any;
    single?:any;
    isLoading?:boolean;
    status?: string;
    update?:any;
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

export const getDataOff = createAsyncThunk(
  'getDataOffState/getDataOffDay',
  async(id:string | undefined = undefined,{getState, rejectWithValue}) =>{
    const { token } = (getState() as RootState).user;
    try{
      return await StoreApi.getDataOffDay(token as string);
    } catch (e) {
      return rejectWithValue(e as ApiErrorResponse<any>);
    }
  }
);

export const getDataBanking = createAsyncThunk(
  'getDataBankState/getDataBank',
  async(id:string | undefined = undefined,{getState, rejectWithValue}) =>{
    const { token } = (getState() as RootState).user;
    try{
      return await StoreApi.getDataAccountBank(token as string);
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

    export const updateAccountBank = createAsyncThunk(
      'updateAccountState/updateAccountBank',
      async (DataAccountBank: AccountBankModel, {getState, rejectWithValue}) => {
          const {token} = (getState() as RootState).user;
          try {
              return await StoreApi.updateAccountBank(token as string, DataAccountBank);
          } catch (e) {
              return rejectWithValue(e as ApiErrorResponse<any>);
          }
      }
  )

    export const createInfoStore = createAsyncThunk(
        'createInfoStoreState/createInfoStore',
        async (DataInfoStore: InformationStoreModel, {getState, rejectWithValue }) => {
            const { token } = (getState() as RootState).user;
            try {
            return await StoreApi.createInformationStore(token as string, DataInfoStore);
            } catch (e) {
            return rejectWithValue(e as ApiErrorResponse<any>);
            }
        }
        );

        export const createOperationDay = createAsyncThunk(
          'createOperationState/createOperationDay',
          async (DataOperationDay: OperationHoursModel, {getState, rejectWithValue}) => {
            const { token } = (getState() as RootState).user;
            try{
              return await StoreApi.createHoursOperation(token as string, DataOperationDay);
            } catch(e) {
              return rejectWithValue(e as ApiErrorResponse<any>);
            }
          }
        );

        export const createOffDays = createAsyncThunk(
          'createOffDayState/createOffDay',
          async (DataOffDay: OffDayStoreModel, {getState, rejectWithValue }) => {
              const { token } = (getState() as RootState).user;
              try {
              return await StoreApi.createOffDay(token as string, DataOffDay);
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
        },
        setListBank: (state, action) => {
          state.listbanking = action.payload;
        },
        setUpdate: (state, action) => {
          state.update = action.payload;
        },
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
        builder.addCase(getDataOff.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        });
        builder.addCase(getDataOff.pending, (state) => {
          state.isLoading = true;
      });
      builder.addCase(getDataOff.fulfilled, (state, {payload})=> {
          const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
          state.list = ArrObj;
          // state.list = payload;
          state.isLoading = false;
      });
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
          builder.addCase(updateAccountBank.pending, (state) => {
            state.isLoading = true;
            state.status = "updated"
        })
        builder.addCase(updateAccountBank.fulfilled,(state, {payload})=> {
            state.update = payload.update;
            state.isLoading = false;
            state.status = "";
        })
          builder.addCase(createInfoStore.pending, (state) => {
            state.isLoading = true;
          });
      
          builder.addCase(createInfoStore.fulfilled, (state, { payload }) => {
            state.name = payload.name;
            state.isLoading = false;
          });
      
          builder.addCase(createInfoStore.rejected, (state, { payload }) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
          });

          builder.addCase(createOffDays.pending, (state) => {
            state.isLoading = true;
          });
      
          builder.addCase(createOffDays.fulfilled, (state, { payload }) => {
            state.name = payload.name;
            state.isLoading = false;
          });
      
          builder.addCase(createOffDays.rejected, (state, { payload }) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
          });

          builder.addCase(createOperationDay.pending, (state) => {
            state.isLoading = true;
          });
      
          builder.addCase(createOperationDay.fulfilled, (state, { payload }) => {
            state.name = payload.name;
            state.isLoading = false;
          });
      
          builder.addCase(createOperationDay.rejected, (state, { payload }) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
          });
          builder.addCase(getDataBanking.rejected, (state, {payload}) => {
            state.error = payload as ApiErrorResponse<any>;
            state.isLoading = false;
        });
        builder.addCase(getDataBanking.pending, (state) => {
          state.isLoading = true;
      });
      builder.addCase(getDataBanking.fulfilled, (state, {payload})=> {
          const ArrObj = Object.entries(payload).map((e)=>({id:e[0], data:e[1]})) 
          // state.list = ArrObj;
          // state.list = payload;
          state.listbanking = ArrObj[0];
          state.isLoading = false;
      });
        },
})

export const { setList, setSingle, setFilter, setName, setListBank} = storeSlice.actions;

export default storeSlice.reducer;