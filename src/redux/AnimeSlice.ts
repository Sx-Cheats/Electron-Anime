import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { RootState } from './__reduxkernel__';
import {initialState,AnimeStatut,AnimesList,AnimeType,API_URL} from "./Types"
import axios from 'axios';

export const GetAnimes = async (AnimeId:number=0):Promise<AnimesList|AnimeType> =>
{
  console.log("GetAnimes !!!!!")
  if(AnimeId===0)
  {
    const response = await axios
    .get(API_URL)
    .then(data =>  data.data)
    .catch(error => {throw error;});
      return response.data;
  }else if(AnimeId !== 0)
  {
    const response = await axios
    .get(API_URL+`/${AnimeId}/full`)
    .then(data =>  data.data)
    .catch(error => {throw error;});
      return response.data;
  }
}

export const FetchAnimes = createAsyncThunk<AnimesList|AnimeType,number|void>(
  'Anime/fetchAnime',
  async (AnimeId :number=0) => GetAnimes(AnimeId)
);

export const AnimeSlice:any = createSlice({
  name: 'Anime',
  initialState,

  reducers: {

    UpdateAnimeList : (state,action) => {
      const animes = (state.AnimesInfo0 as AnimesList)
      state.AnimeInfo = []

      action.payload = action.payload.toLowerCase()
   
      for(let anime of animes)
            if((anime.title.toLowerCase()).match(action.payload) != null)
            state.AnimeInfo.push(anime)
    
      return state

    }
   
  },

  extraReducers: (builder) => {
    builder
      .addCase(FetchAnimes.pending, (state) => {
        state.Statut = AnimeStatut.Pending;
      })
      .addCase(FetchAnimes.fulfilled, (state, action) => {
        state.Statut = AnimeStatut.Success;
        state.AnimesInfo0 = action.payload
        state.AnimeInfo   = action.payload
      })

      .addCase(FetchAnimes.rejected, (state) => {

        state.Statut = AnimeStatut.Failed;
      });
  },
});

export const { UpdateAnimeList } = AnimeSlice.actions;

export const AnimeShop = (state: RootState) => state;
// export const selectAmount = (state: RootState) => state.counter.incrementAmount;


// Reducer
export default AnimeSlice.reducer;
