import {
  SearchShowResponse,
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

export const searchShowByQuery = (
  query: string,
): Promise<AxiosResponse<SearchShowResponse[]>> => {
  return API.get('/search/shows', {params: {q: query}});
};

export const getEpisodeDetails = (
  episodeId: number
): Promise<AxiosResponse<SearchShowResponse[]>> => {
  return API.get('/search/shows', {params: {q: query}});
};

