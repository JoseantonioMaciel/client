import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
}));



export default function BasicStack() {
  return (
    
      <Box m="auto" >
      <Stack spacing={6}>
        <Title>
          WE NEED A TITLE
        </Title>
        <Description>
          Ultimate Drafting Services Values are driven by integrity and professionalism. 
          We are dedicated to providing you and your project with ultimate attention to ensure 
          you receive the highest quality service in the industry. 
        </Description>
      </Stack>
      </Box>
      
    
  );
}
