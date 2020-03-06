import React from 'react';
import {Box, TableRow, TableCell, Link} from '@material-ui/core';

const ConnectionRow = ({connection}) => {
  const departure = connection.segments[0].departure;
  const arrival = connection.segments[connection.segments.length - 1].arrival;

  return (
    <TableRow key={connection.id}>
      <TableCell>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            style={{maxWidth: 50, maxHeight: 50}}
            alt="icon"
            src={connection.icon}
          />
          {connection.transport.toUpperCase()}
        </Box>
      </TableCell>
      <TableCell>{departure}</TableCell>
      <TableCell>{arrival}</TableCell>
      <TableCell>{connection.duration}</TableCell>
      <TableCell>{connection.price}</TableCell>
      <TableCell>
        <Link href={connection.url}>Details</Link>
      </TableCell>
    </TableRow>
  );
};

export default ConnectionRow;
