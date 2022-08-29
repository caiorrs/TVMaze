import {
  ShowDetailsResponse,
  ShowDetailsWithEpisodesResponse,
  ShowResponse,
} from './types';

import {API} from '.';
import {AxiosResponse} from 'axios';

export const getShows = (): Promise<AxiosResponse<ShowResponse[]>> => {
  return API.get('/shows');
};

export const getShowsPaginated = (
  page: number,
): Promise<AxiosResponse<ShowResponse[]>> => {
  return API.get('/shows', {params: page});
};

export const getShowDetails = (
  id: number,
): Promise<AxiosResponse<ShowDetailsResponse>> => {
  return API.get(`/shows/${id}`);
};

export const getShowDetailsWithEpisodes = (
  id: number,
): Promise<AxiosResponse<ShowDetailsWithEpisodesResponse>> => {
  return API.get(`/shows/${id}`, {params: {embed: 'episodes'}});
};
