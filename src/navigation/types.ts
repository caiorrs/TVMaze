import {Episode} from '../services/types';

export type RootStackParamList = {
  Home: undefined;
  Details: {showId: number};
  Episode: {episode: Episode};
};
