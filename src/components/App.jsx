//imports dependencias, images, componentes, styles
import { useEffect, useState } from 'react';
import callToApi from '../services/callToApi';
// import ls from '../services/localStorage';
import '../styles/App.scss';

function App() {
  //states
  const [dataCountry, setDataCountry] = useState([]);

  //effects
  useEffect(() => {
    callToApi().then((response) => {
      setDataCountry(response);
    });
  }, []);
  //handlers from events

  //renders

  //html
  return (
    <>
      <p></p>
    </>
  );
}

export default App;
