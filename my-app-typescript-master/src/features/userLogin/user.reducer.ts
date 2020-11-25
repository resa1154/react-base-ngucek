import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LSK_USER_SLICE } from '../../constants';
import { ApiErrorResponse } from '../..';
import { LoginCredential } from './models';
import UserApi from './user.api';

export interface UserSlice {
  id?: string;
  username?: string;
  token?: string;
  isLoading?: boolean;
  error?: ApiErrorResponse<any>;
}

// - IF EXISTS ON LOCAL STORAGE -
// getting initial slice from local storage
const initialSlice = localStorage.getItem(LSK_USER_SLICE)
  ? (JSON.parse(localStorage.getItem(LSK_USER_SLICE) as string) as UserSlice)
  : {};

export const logUserIn = createAsyncThunk(
  'userLoginState/logUserIn',
  async (loginCredential: LoginCredential, { rejectWithValue }) => {
    try {
      return await UserApi.login(loginCredential);
    } catch (e) {
      return rejectWithValue(e as ApiErrorResponse<any>);
    }
  }
);

const userSlice = createSlice({
  name: 'userLoginState',
  initialState: initialSlice,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logUserIn.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logUserIn.fulfilled, (state, { payload }) => {
      state.username = payload.username;
      state.id = payload.id;
      state.token = payload.token;
      state.isLoading = false;
    });

    builder.addCase(logUserIn.rejected, (state, { payload }) => {
      state.error = payload as ApiErrorResponse<any>;
      state.isLoading = false;
    });
  },
});

export const { setUsername, setToken, setId, setLoading } = userSlice.actions;

export default userSlice.reducer;
