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



export default function Processinfo() {
  return (
    
      <Box mb={6} ml={25}sx={{width: 1500,}}>
      <Stack spacing={5}>
        <Title>
          OUR PROCESS
        </Title>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l aboris nisi ut aliquip ex ea commodo consequat
        </Description>
      </Stack>
      </Box>
      
    
);
}
