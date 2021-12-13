import axios from 'axios';

export const getHistoricalData = (companySymbol: string): Promise<unknown> => {
  return axios.get('https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data', {
    params: { symbol: companySymbol },
    headers: {
      'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY!,
    },
  });
};
