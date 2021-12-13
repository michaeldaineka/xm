import axios, {AxiosPromise} from 'axios';

export const getSymbols = (): AxiosPromise => {
  return axios.get(
    'https://pkgstore.datahub.io/core/nasdaq-listings/nasdaq-listed_json/data/a5bc7580d6176d60ac0b2142ca8d7df6/nasdaq-listed_json.json',
  );
};
