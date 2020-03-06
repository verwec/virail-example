import React from 'react';
import './App.css';
import ConnectionsContainer from './components/ConnectionsContainer';
import {nextSevenDays} from './helper/range_helper';

const App = () => {
  const days = nextSevenDays();
  return days.map(date => <ConnectionsContainer key={date} date={date} />);
};

export default App;
