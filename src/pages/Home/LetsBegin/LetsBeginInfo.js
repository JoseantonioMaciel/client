import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary,
}));

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary,
}));



export default function Processinfo() {
  return (
    <Box  p={2} m="auto" >
      <Stack spacing={3}>
        <Title>
          LET'S BEGIN
        </Title>
        <Description>
        Ultimate Drafting Services Values are driven by integrity and professionalism. We are dedicated to providing you and your project with ultimate attention to ensure you receive the highest quality service in the industry. Ultimate Drafting Services Values are driven by integrity and professionalism. We are dedicated to providing you and your project with ultimate attention to ensure you receive the highest quality service.
        </Description>
      </Stack>
    </Box>
);
}
