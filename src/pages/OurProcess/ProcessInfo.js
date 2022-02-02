import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  padding: theme.spacing(0),
  textAlign: 'center',
  
}));

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));



export default function Processinfo() {
  return (
    
      <Box m="auto" >
      <Stack p={10} spacing={3}>
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
