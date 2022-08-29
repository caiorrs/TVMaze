export interface ShowResponse {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime?: number;
  averageRuntime?: number;
  premiered?: string;
  ended?: string;
  officialSite?: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel?: WebChannel;
  dvdCountry?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

interface Links {
  self: Self;
  previousepisode?: Self;
  nextepisode?: Self;
}

interface Self {
  href: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Externals {
  tvrage: number;
  thetvdb?: number;
  imdb?: string;
}

interface WebChannel {
  id: number;
  name: string;
  country?: Country;
  officialSite?: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite?: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Rating {
  average?: number;
}

interface Schedule {
  time: string;
  days: string[];
}

export interface ShowDetailsResponse {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  dvdCountry?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

interface Links {
  self: Self;
  previousepisode: Self;
}

interface Self {
  href: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}
interface Schedule {
  time: string;
  days: string[];
}

export type ShowDetailsWithEpisodesResponse = ShowDetailsResponse & {
  _embedded: Embedded;
};

interface Embedded {
  episodes: Episode[];
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links2;
}

interface Links2 {
  self: Self;
}
