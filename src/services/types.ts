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
