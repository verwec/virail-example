import React from 'react';
import ConnectionRow from './ConnectionRow';
import {
  Typography,
  Box,
  Container,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

const Connections = ({connections, date}) => {
  return (
    <Box m={10}>
      <Container maxWidth="md">
        <Box mb={2}>
          <Typography>{date}</Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Departure</TableCell>
                <TableCell>Arrival</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {connections.map(connection => (
                <ConnectionRow key={connection.id} connection={connection} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Connections;
