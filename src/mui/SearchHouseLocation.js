import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "bootstrap/dist/css/bootstrap.min.css";
import {Autocomplete} from "@mui/material"
import { blue } from '@mui/material/colors';



const theme = createTheme({
  palette: {
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


const cards = [1, 2, 3,4,5,6,7,8];
const top100Films = ['Any','Bole','Reche','Merkato','goro','Asko']
const Price = ['Any','5,000 - 10,000','10,000 - 15,000','15,000 - 20,000','25,000 - 30,000','All']
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SearchHouseLocation() {
  return (
    <ThemeProvider theme={theme}>
      
      <main>
        {/* Hero unit */}
      <Box sx={{ bgcolor: 'background.paper',pt: 20,pb: 2, }}>
       <Container maxWidth="sm">
        <Grid container spacing={10}>

         <Grid xs={6}>
  {/* <SearchBar/> */}

  <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Type Location" />}
/>
         </Grid>
         


         <Grid xs={6}>
  {/* <SearchBar/> */}

  <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={Price}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Type Price" />}
/>
         </Grid>




        </Grid>
       </Container>
      </Box>


        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                      Location: Bole
                      </Typography>
                      <Typography>
                      Price: 10,000 ETB
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href='/houseDetail'>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </ThemeProvider>
  );
}