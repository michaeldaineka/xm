import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHistoricalData } from '../../services/historicalData';
import dayjs from 'dayjs'

const initialState = {
  isFetching: false,
  companyData: [],
};

const getCompanyData: any = createAsyncThunk(
  'company/getCompanyData',
  async ({ companySymbol, startDate, endDate }: any): Promise<any> => {
    const res = await getHistoricalData(companySymbol);
    return { res, startDate, endDate };
  },
);

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: {
    [getCompanyData.pending]: (state) => {
      state.isFetching = true;
    },
    [getCompanyData.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.companyData = action.payload.res.data.prices;
      localStorage.startDate = dayjs(action.payload.startDate).unix();
      localStorage.endDate = dayjs(action.payload.endDate).unix();
    },
  },
});

export { getCompanyData };

export default companySlice.reducer;
