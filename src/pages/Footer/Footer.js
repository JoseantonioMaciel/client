import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FooterBanner from "./FooterBanner";
import Divider from '@mui/material/Divider';

function Copyright() {
  return (
    <Typography variant="body2" color="background.paper" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ultimatedraftingservices.com/">
      Ultimate Drafting Services
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#003478', py: 1 }}>
      <FooterBanner/>
      <Divider  color ='white' variant="middle" />
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
);
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;