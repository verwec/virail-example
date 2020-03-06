import React from 'react';
import {Box} from '@material-ui/core';
import spinner from '../assets/images/spinner.gif';

const Loading = () => (
  <Box
    display="flex"
    height="100vh"
    justifyContent="center"
    alignItems="center">
    <img src={spinner} alt="spinner" />
  </Box>
);

export default Loading;
