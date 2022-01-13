import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));



export default function BasicStack() {
  return (
    <div>
      <Stack spacing={2}>
        <Title>WE NEED A TITLE</Title>
        <Description>Ultimate Drafting Services Values are driven by integrity and professionalism. We are dedicated to
providing you and your project with ultimate attention to ensure you receive the highest quality service 
in the industry. </Description>
      </Stack>
    </div>
  );
}
