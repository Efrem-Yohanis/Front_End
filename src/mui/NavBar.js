import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

const theme = createTheme({
  palette: {
    primary: {main:"#01579b"},
    secondary: { main : "#ffa733"},
    success: {main:"#263238"},
    tomato: '#01579b',
    pink: {
      deep: '#ffa733',
      hot: '#FF69B4',
      medium: '#C71585',
      pale: '#DB7093',
      light: '#FFB6C1',
    },
  },
});

function NavBar(){
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar color="success">
              <IconButton aria-label="delete" size="large" href="/">
                 <OtherHousesIcon fontSize="large" color='primary' />
              </IconButton>
              <Typography sx={{ flexGrow: 1 }}> 
              <Button variant="text" href="/addHouse" sx={{pt:2,color:"primary"}}><Typography color="primary">Add-House</Typography></Button>
              <Button variant="text" href="/searchHouse" sx={{pt:2}}><Typography>Search-House</Typography></Button>
              <Button variant="text" href="/#" sx={{pt:2}}><Typography>MyPage</Typography></Button>      
              <Button variant="text" href="/contactUs" sx={{pt:2}}><Typography>Countac-Us</Typography></Button>      
              
              </Typography>
              <IconButton>
                <Button href='/login'>Logout</Button>
              </IconButton>
          
          </Toolbar>
        </AppBar>
      </Box>
      </ThemeProvider>
    );
}
export default NavBar;
  