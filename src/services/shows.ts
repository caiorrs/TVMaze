import {API} from '.';
import {AxiosResponse} from 'axios';
import {ShowResponse} from './types';

export const getShows = (): Promise<AxiosResponse<ShowResponse[]>> => {
  return API.get('/shows');
};

export const getShowsPaginated = (
  page: number,
): Promise<AxiosResponse<ShowResponse[]>> => {
  return API.get('/shows', {params: page});
};
