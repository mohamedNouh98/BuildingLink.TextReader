import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import {  Box, Button, Container, Stack, Typography } from '@mui/material';


 
function App() {
  const [text, setText] = useState('');
  const [countOfRepeatedWords, setCountOfRepeatedWords] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    var fileReader = new FileReader();
    if (e.target.files != null){
      fileReader.readAsText(e.target.files[0], 'UTF-8')
    }
    fileReader.onload = e => {
      setText(e.target?.result as string);
    }
    fileReader.onerror = e => {
      alert(e.target?.error)
    }
  }

  useEffect(() => {
    var words = text.split(' ');
    const repeatedWords : string[] = [];
    words.map(word => {
      console.log(word);
      console.log(words.filter(x => x === word));
      console.log(repeatedWords.find(x => x === word));

        if (words.filter(x => x === word).length > 1 && repeatedWords.find(x => x === word) === undefined){
          repeatedWords.push(word);
        }
    });

    setCountOfRepeatedWords(repeatedWords.length);
  }, [text]);

  return (
    <Container maxWidth="sm" >
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              BuildingLink Text Reader
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Please Upload file to read from
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
              variant="contained"
              component="label"
              fullWidth={false}
              >
                Upload File
                <input
                  type="file"
                  hidden
                  accept=".txt"
                  onChange={event => onChange(event)}
                />
              </Button>
            </Stack>
            {
              text && 
              <>
                <Typography variant="h4" align="center" color="text.primary" paragraph mt={5}>
                  File Contains following text:
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph mt={2}>
                    {text}
                </Typography>

                <Typography variant="h5" align="center" color="text.primary" paragraph>
                    Count of Repeated words : {countOfRepeatedWords}
                </Typography>
              </>
            }
            
          </Container>
        </Box>     
  </Container>
  );
}

export default App;
