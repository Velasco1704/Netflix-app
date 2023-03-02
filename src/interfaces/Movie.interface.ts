export interface Movie {
  availability: Availability;
  inRemindMeList: boolean;
  queue: Queue;
  summary: Summary;
  episodeCount: number;
  jawSummary: JawSummary;
}

export interface Availability {
  isPlayable: boolean;
  availabilityDate: string;
  availabilityStartTime: number;
  unplayableCause: null;
}

export interface JawSummary {
  trackIds: TrackIDS;
  tags: Cast[];
  cast: Cast[];
  creators: Cast[];
  directors: any[];
  writers: any[];
  genres: Cast[];
  availability: Availability;
  contextualSynopsis: ContextualSynopsis;
  currentContextualSynopsis: ContextualSynopsis;
  maturity: Maturity;
  id: number;
  type: string;
  isOriginal: boolean;
  videoId: number;
  requestId: string;
  userRatingRequestId: string;
  title: string;
  copyright: null;
  releaseYear: number;
  watched: boolean;
  hasAudioDescription: boolean;
  synopsis: string;
  synopsisRegular: string;
  hasSensitiveMetaData: boolean;
  delivery: Delivery;
  titleMaturity: TitleMaturity;
  broadcaster: Broadcaster;
  trailerSummary: TrailerSummary;
  supplementalMessage: string;
  supplementalMessageIcon: string;
  videoMerch: VideoMerch;
  seasonAbbr: string;
  seasonCount: number;
  numSeasonsLabel: string;
  episodeCount: number;
  episodeTitle: string;
  logoImage: LogoImage;
  backgroundImage: BackgroundImage;
}

export interface BackgroundImage {
  videoId: string;
  url: string;
  width: number;
  height: number;
  image_key: string;
}

export interface Broadcaster {
  broadcasterName: null;
}

export interface Cast {
  id: number;
  name: string;
}

export interface ContextualSynopsis {
  text: string;
  evidenceKey: string;
}

export interface Delivery {
  has3D: boolean;
  hasHD: boolean;
  hasUltraHD: boolean;
  hasHDR: boolean;
  hasDolbyVision: boolean;
  hasDolbyAtmos: boolean;
  has51Audio: boolean;
  quality: string;
}

export interface LogoImage {
  videoId: number;
  url: string;
  type: string;
  width: number;
  height: number;
  extension: string;
  size: string;
  imageKey: string;
}

export interface Maturity {
  rating: Rating;
}

export interface Rating {
  value: string;
  maturityDescription: string;
  specificRatingReason: string;
  maturityLevel: number;
  board: string;
  boardId: number;
  ratingId: number;
  reasons: Reason[];
}

export interface Reason {
  id: number;
  levelDescription: null;
  reasonDescription: string;
}

export interface TitleMaturity {
  level: number;
}

export interface TrackIDS {
  videoId: number;
  trackId_jaw: number;
  trackId_jawEpisode: number;
  trackId_jawTrailer: number;
  trackId: number;
}

export interface TrailerSummary {
  length: number;
}

export interface VideoMerch {
  videoId: number;
  id: number;
  start: number;
  computeId: string;
}

export interface Queue {
  available: boolean;
  inQueue: boolean;
}

export interface Summary {
  type: string;
  id: number;
  isOriginal: boolean;
}
