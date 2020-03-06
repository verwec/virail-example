import React, {useState, useEffect} from 'react';
import Connections from './Connections';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

const ConnectionContainer = ({date}) => {
  const API = 'https://www.virail.com/virail/v7/search/en_us?';
  const apiFormatedDate = date.format('YYYY-MM-DD');
  const readableDate = date.format('MMM Do YY');
  const query = `from=c.3173435&to=c.3169070&lang=en_us&dt=${apiFormatedDate}&currency=USD&adult_passengers=1`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = API + query;

  const [errorText, setErrorText] = useState();
  const [connections, setConnnections] = useState();

  useEffect(() => {
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        const orderedByPrice = data.result.sort((b, a) => {
          return parseFloat(b.price) - parseFloat(a.price);
        });

        setConnnections(orderedByPrice.slice(0, 3));
      })
      .catch(e => {
        setErrorText(e.message);
      });
  }, [targetUrl]);

  if (errorText) {
    return <ErrorMessage errorText={errorText} />;
  }

  if (!connections) {
    return <Loading />;
  }

  return <Connections date={readableDate} connections={connections} />;
};

export default ConnectionContainer;
