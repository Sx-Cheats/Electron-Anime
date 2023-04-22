import * as React from 'react';
import {AnimesList} from "../redux/Types"
import { useAppSelector, useAppDispatch } from '../redux/__reduxkernel__';
import {
  FetchAnimes,
  AnimeShop,
  UpdateAnimeList
} from '../redux/AnimeSlice';

import {Anime} from "../redux/Types"
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import AnimeCard from '../Components/AnimeCard';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchBarStyled = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    backgroundColor:"rgb(14 14 14 / 0%)",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

export function Home() {

  const AnimeSelector = useAppSelector(AnimeShop);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  React.useEffect(()=>{
    dispatch(FetchAnimes())
  },[dispatch])

  return (
    <div id="Home">
       <Search id="SearchAnime" >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchBarStyled 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}

              onChange={(v)=>dispatch(UpdateAnimeList(v.target.value))}
            />
          </Search>
      <div name="Anime-Container">
       {(((AnimeSelector.Current as Anime).AnimeInfo as AnimesList)||[]).map((v,i)=><AnimeCard key={i} onClick={()=>navigate(`/Animes/${v.mal_id}`,{state:v} as any)} key={i} Title={v.title} ImgPath={v.images.jpg.large_image_url} Description={v.synopsis} />)}
       </div>
    </div>
  );
}

export function SimpleTestRoute()
{
  return(<div><button>TEST<Link to="/main_window">Back</Link></button></div>)
}