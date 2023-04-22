import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate} from 'react-router-dom';

export default function SearchAppBar() {
  const navigate = useNavigate();
	const goBack    = ()  => navigate(-1); // Pour aller vers l'arriere
  const goForward = ()  => navigate(1);  // Pour aller vers l'avant

  return (
    <Box id="SearchBar" sx={{ flexGrow: 2,width:"100vw",top:"0px",minHeight:"60px"}}>
      <AppBar position="static">
        <Toolbar name="top-bar" sx={{backgroundColor:"#101010"}}>
          <div id="logoapp" ></div>

          <div id="ViewHistory">
            <button onClick={goBack}><ArrowBackIosNewIcon /></button>
           <button  onClick={goForward}><ArrowForwardIosIcon /></button>
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            name="title"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },textAlign:"center" }}
          >
            AnimeList
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}