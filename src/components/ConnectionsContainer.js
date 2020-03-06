import React, {useState, useEffect} from 'react';
import Connections from './Connections';

function App() {
  const API = 'https://www.virail.com/virail/v7/search/en_us?';
  const QUERY =
    'from=c.3173435&to=c.3169070&lang=en_us&dt=2020-03-10&currency=USD&adult_passengers=1';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = API + QUERY;

  const [errorText, setErrorText] = useState();
  const [connections, setConnnections] = useState();

  useEffect(() => {
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        setConnnections(data.result);
      })
      .catch(e => {
        setErrorText(e.message);
      });
  }, [targetUrl]);

  if (errorText) {
    return <h1> {errorText} </h1>;
  }

  if (!connections) {
    return <h1> Loading ... </h1>;
  }

  return <Connections connections={connections} />;
}

export default App;
