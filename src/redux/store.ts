import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './userApiSlice';
import { rideApi } from './riderApiSlice';
import { driverApiSlice as driverApi } from "../redux/driverApislice";
import { adminApi } from './AdminApiSlice';


export const store = configureStore({
  reducer: {
     [userApi.reducerPath]: userApi.reducer,
     [rideApi.reducerPath]:rideApi.reducer,
     [driverApi.reducerPath]:driverApi.reducer,
     [adminApi.reducerPath]:adminApi.reducer,
     },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
  .concat(rideApi.middleware).concat(driverApi.middleware).concat(adminApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
