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
  const renderCountryList = () => {
    return dataCountry.map((eachCountry, i) => (
      <li key={i}>
        <img src={eachCountry.img} alt={eachCountry.name} />
        <p>{eachCountry.name}</p>
        <p>{eachCountry.capital}</p>
        <p>{eachCountry.continents}</p>
      </li>
    ));
  };

  //html
  return (
    <>
      <header>
        <h1>Country Info App</h1>
        <p>
          Explore information about countries, capitals ans flags. Add new
          countries and filter throught the list!
        </p>
      </header>
      <section>
        <form>
          <label htmlFor="">Filters</label>
          <input type="text" />
          <select name="" id="">
            <option value="">All</option>
            <option value="">Africa</option>
            <option value="">North America</option>
            <option value="">South America</option>
            <option value="">Europe</option>
            <option value="">Asia</option>
            <option value="">Oceania</option>
          </select>
        </form>
      </section>
      <ul>{renderCountryList()}</ul>
    </>
  );
}

export default App;
