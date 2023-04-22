export enum AnimeStatut 
{
  Pending,
  Start,
  Success,
  Failed,
};


export const API_URL = "https://api.jikan.moe/v4/anime"

export type AnimeType =
{
    mal_id: number|null,
    url: string|null,
    images: {
    jpg: {
    image_url: string|null,
    small_image_url: string|null,
    large_image_url: string
    }|null,
    webp: {
    image_url: string|null,
    small_image_url: string|null,
    large_image_url: string
    }
    }|null,
    trailer: {
    youtube_id: string|null,
    url: string|null,
    embed_url: string
    }|null|null,
    approved: true|null|null,
    titles: [
    {
    type: string|null|null,
    title: string
    }
    ]|null|null,
    title: string|null|null,
    title_english: string|null|null,
    title_japanese: string|null,
    title_synonyms: [
    string
    ]|null,
    type: string|null,
    source: string|null,
    episodes: number|null,
    status: string|null,
    airing: true|null,
    aired: {
    from: string|null,
    to: string|null,
    prop: {
    from: {
    day: number|null,
    month: number|null,
    year: number
    }|null,
    to: {
    day: number|null,
    month: number|null,
    year: number
    }|null,
    string: string
    }
    }|null,
    duration: string|null,
    rating: string|null,
    score: number|null,
    scored_by: number|null,
    rank: number|null,
    popularity: number|null,
    members: number|null,
    favorites: number|null,
    synopsis: string|null,
    background: string|null,
    season: string|null,
    year: number|null,
    broadcast: {
    day: string|null,
    time: string|null,
    timezone: string|null,
    string: string
    }|null,
    producers: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]|null,
    licensors: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]|null,
    studios: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]|null,
    genres: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]|null,
    explicit_genres: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]|null,
    themes: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]|null,
    demographics: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]|null,
    relations: [
    {
    relation: string|null,
    entry: [
    {
    mal_id: number|null,
    type: string|null,
    name: string|null,
    url: string
    }
    ]
    }
    ]|null,
    theme: {
    openings: [
    string
    ]|null,
    endings: [
    string
    ]
    }|null,
    external: [
    {
    name: string|null,
    url: string
    }
    ]|null,
    streaming: [
    {
    name: string|null,
    url: string
    }
    ]
}

export type AnimesList =  AnimeType[];

export interface Anime  {
  Statut: AnimeStatut,
  AnimesInfo0:AnimeType|AnimesList|null,
  AnimeInfo:AnimeType|AnimesList|null,
  Message:string
}



export const initialState: Anime =
{
    Statut       : AnimeStatut.Failed,
    AnimeInfo    : null,
    AnimesInfo0  : null,
    Message      : ""
}
