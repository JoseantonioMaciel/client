import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import { red, green, blue, pink, yellow } from '@mui/material/colors';

const Title = styled(Typography)(({ theme }) => ({
  color: 'white',
  textAlign: 'center' ,
  Typography: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    backgroundColor: yellow[500],
    fontSize: 16,
    
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: pink[500],
    fontSize: 20,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: red[500],
    fontSize: 24,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: blue[500],
    fontSize: 34,
  },
  [theme.breakpoints.up('xl')]: {
    backgroundColor: green[500],
    fontSize: 48,
  },
  
}));

const Description = styled(Typography)(({ theme }) => ({
  color: 'white',
  textAlign: 'center' ,
  Typography: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    backgroundColor: yellow[500],
    fontSize: 14,
    
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: pink[500],
    fontSize: 16,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: red[500],
    fontSize: 20,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: blue[500],
    fontSize: 24,
  },
  [theme.breakpoints.up('xl')]: {
    backgroundColor: green[500],
    fontSize: 34,
  },
}));



export default function Processinfo() {
  return (
    
      <Box m="auto" >
      <Stack p={5} spacing={3}>
        <Title color="#003478" >
          OUR PROCESS
        </Title>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l aboris nisi ut aliquip ex ea commodo consequat
        </Description>
      </Stack>
      </Box>
      
    
);
}
