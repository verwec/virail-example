import React from 'react';
import ConnectionRow from './ConnectionRow';

const Connections = ({connections, date}) => {
  return (
    <>
    {date}
    <table>
      <thead>
        <tr>
          <th>Transport</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {connections.map(connection => (
          <ConnectionRow connection={connection} />
        ))}
      </tbody>
    </table>
    </>
  );
};

export default Connections;
