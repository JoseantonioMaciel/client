import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.primary.main,
}));




export default function OurServices() {
  return (
  <Box m="auto" >
    <Stack spacing={5}>
      <Title>
      OTHER SERVICES
      </Title>
    </Stack>
  </Box>
);
}
