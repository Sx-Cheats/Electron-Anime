
import * as React from 'react';
import {AnimeType} from "../redux/Types"

import {useLocation} from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

// On detail les animes, Jpg,Titre,Description,Genre, Note
export default function DetailAnime()
{
  // On recupère un Object Location et on recupere les states
  const location = useLocation();
  const Anime:AnimeType = location.state as AnimeType

  return  (<div>
    <div className='def-anime'>
    <img src={Anime.images.jpg.large_image_url} />
    <div name="syn-genre">
      <h2>{Anime.title}</h2>
     <p>{Anime.synopsis}</p>
     <h4>Episodes : {Anime.episodes}</h4>
     <h4>Studio : {Anime.studios[0].name}</h4>
     <Stack name="genre" direction="row" spacing={1}>
      {Anime.genres.map(v => <Chip label={v.name} variant="outlined" />)}

    </Stack>
    <Rating name="half-rating-read" defaultValue={Anime.score} precision={0.5} max={10} readOnly />
    </div>
    </div>
    </div>)

}