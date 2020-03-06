import React, {useState, useEffect} from 'react';

const ConnectionRow = ({connection}) => {
  const departure = connection.segments[0].departure;
  const arrival = connection.segments[connection.segments.length - 1].arrival;

  return (
    <tr>
      <td>{connection.transport}</td>
      <td>{departure}</td>
      <td>{arrival}</td>
      <td>{connection.duration}</td>
      <td>{connection.price}</td>
    </tr>
  );
};

export default ConnectionRow;
