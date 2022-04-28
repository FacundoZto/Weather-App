import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Search({handleSearch}) {

  const [city, setCity] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    if(city){
      e.preventDefault();
      handleSearch(city);
      setCity('');
    }
  }
  
  return (
    <Box
      sx={{
        width: '60%',
        maxWidth: '100%',
        display: 'flex'
      }}
    >
      <TextField 
        fullWidth 
        label="Search City" 
        id="fullWidth" 
        color="primary"
        variant="standard"
        onChange={handleChange} 
        value={city}
        onSubmit={handleSubmit}
        />
      <Button 
        variant="outlined" 
        size="large" 
        style={{
          marginLeft: '10px',
          fontFamily: 'Montserrat',
          fontWeight: 'bold'

        }}
        onClick={handleSubmit}
        >
        Search
      </Button>
    </Box>
  );
}
