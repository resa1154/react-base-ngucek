import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { LSK_USER_SLICE } from '../constants';
import dataTestSliceReducer, { DataTestSlice } from '../features/dataTest/dataTest.reducer'; 
import userLoginSliceReducer, { UserSlice } from '../features/userLogin/user.reducer';
import mitraSliceReducer, {MitraSlice} from '../features/Mitra/mitra.reducer';
import serviceSliceReducer, { ServiceSlice } from '../features/ServiceCategory/service.reducer';
import kurirSliceReducer, { KurirSlice } from '../features/Kurir/kurir.reducer';
import roleSliceReducer, { RoleSlice } from '../features/Role/role.reducer';
import usersSliceReducer,{ UsersSlice } from '../features/User/user.reducer';
import customerSliceReducer, { CustomerSlice } from '../features/Customer/customer.reducer';
import storeSliceReducer, { StoreSlice } from '../features/Store/store.reducer';


export const store = configureStore<RootState>({
    reducer: {
        dataTest: dataTestSliceReducer,
        user: userLoginSliceReducer,
        mitra: mitraSliceReducer,
        services:serviceSliceReducer,
        kurir:kurirSliceReducer,
        role:roleSliceReducer,
        dataUser:usersSliceReducer,
        customer:customerSliceReducer,
        store:storeSliceReducer,
    }
})

export type RootState = {
    user: UserSlice;
    dataTest: DataTestSlice;
    mitra : MitraSlice;
    services:ServiceSlice;
    kurir:KurirSlice;
    role:RoleSlice;
    dataUser: UsersSlice;
    customer:CustomerSlice;
    store:StoreSlice;
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem(LSK_USER_SLICE, JSON.stringify(state.user));
})