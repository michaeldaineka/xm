import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import alertsSlice from './slices/alertsSlice';
import companySlice from './slices/companySlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    alerts: alertsSlice,
    company: companySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
