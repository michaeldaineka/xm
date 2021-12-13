import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AlertsState} from "../../types/slices/alerts";

const initialState: AlertsState = {
  isAlertOpen: false,
  alertOptions: {},
};

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    openAlert(state, action: PayloadAction<Record<string, AlertsState>>) {
      state.isAlertOpen = true;
      state.alertOptions = action.payload;
    },
  },
});

export const { openAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
