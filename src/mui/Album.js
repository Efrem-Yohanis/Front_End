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
import { useState,useEffect } from 'react';






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


// max 
const cards = [1, 2,3,4,5,6];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {

  // const [House,setHouse] = useState([{"_id":"654d3161aa7b99369bfa9c68","location":"Your House Location","price":100000,"addBy":"user1232","image":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqGMQNf1-IM6rzrvoJ_2LsA74UR1P_MxzAzw&usqp=CAU","https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=1024x1024&w=is&k=20&c=L3b3Yi5MhR--0Y4O_AaFl6ARfDeM9BWfwvsGqECf6hw=","https://www.yourwebsite.com/images/your-house-image-1.png","https://www.yourwebsite.com/images/your-house-image-2.png","https://www.yourwebsite.com/images/your-house-image-3.png","https://www.yourwebsite.com/images/your-house-image-4.png","https://www.yourwebsite.com/images/your-house-image-5.png"],"requestedBy":["user1234","user5678","user91011"]},{"_id":"654d32784865524429deaf88","location":"Your House Location2","price":200000,"addBy":"user1232","image":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yTPYnP18dd01BjwbyB6cyeSJ1QqJzFLCZw&usqp=CAU","https://www.yourwebsite.com/images/your-house-image-1.png","https://www.yourwebsite.com/images/your-house-image-2.png","https://www.yourwebsite.com/images/your-house-image-3.png","https://www.yourwebsite.com/images/your-house-image-4.png","https://www.yourwebsite.com/images/your-house-image-5.png"],"requestedBy":["user1234","user5678","user91011"]}]);
  //const [House,setHouse] = useState([{"_id":"654d3161aa7b99369bfa9c68","location":"Your House Location","price":100000,"addBy":"user1232","image":["https://www.yourwebsite.com/images/your-house-image-1.png","https://www.yourwebsite.com/images/your-house-image-2.png","https://www.yourwebsite.com/images/your-house-image-3.png","https://www.yourwebsite.com/images/your-house-image-4.png","https://www.yourwebsite.com/images/your-house-image-5.png"],"requestedBy":["user1234","user5678","user91011"]},{"_id":"654d32784865524429deaf88","location":"Your House Location2","price":200000,"addBy":"user1232","image":["https://www.yourwebsite.com/images/your-house-image-1.png","https://www.yourwebsite.com/images/your-house-image-2.png","https://www.yourwebsite.com/images/your-house-image-3.png","https://www.yourwebsite.com/images/your-house-image-4.png","https://www.yourwebsite.com/images/your-house-image-5.png"],"requestedBy":["user1234","user5678","user91011"]}]); // store response data
 const [data, setData] = useState(null); // indicate loading state

 const [location1,setlocation1] = useState(null)
 useEffect(() => {
  fetchData();
  fetchData1(); // fetch data from API
}, []);

const fetchData = async () => {
  try {
    const response = await fetch('https://api-for-test-v2.onrender.com/api/v1/getAllHouse');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    setData(json); // set fetched data to the state hook
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};

const fetchData1 = async () => {
  try {
    const response = await fetch('https://api-for-test-v3.onrender.com/api/v1/getAllHouseLocation');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    setlocation1(json)// set fetched data to the state hook
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};
  return (
    <ThemeProvider theme={theme}>
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 6,
          }}
        >
          
          <Container maxWidth="sm">
            <Typography
             
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
              className='m-4'
            
            >
              <Typography component="span" color="tomato" variant='span'>Find Yo</Typography> <Typography component="span" color="pink.deep" variant='span'>ur House!</Typography>
            </Typography>


              
          
  <Grid container spacing={2}>
  <Grid xs={3}>
  </Grid>
  <Grid xs={6}>
  {/* <SearchBar/> */}

  <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={location1 && location1}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Type Location" />}
/>
  </Grid>
 {/* <Grid xs={3}>
 <Button variant="outlined">Search</Button>
 </Grid> */}
</Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>

{data && data.map((card) => (
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
        image={card.image[0]}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography>
          Location: {card.location}
          
          </Typography>
          <Typography>
          Price: {card.price}
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