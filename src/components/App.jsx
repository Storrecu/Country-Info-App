//imports dependencias, images, componentes, styles
import { useEffect, useState } from 'react';
import callToApi from '../services/callToApi';
// import ls from '../services/localStorage';
import '../styles/App.scss';

function App() {
  //states
  const [dataCountry, setDataCountry] = useState([]);
  const [inputFilterCountry, setinputFilterCountry] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');

  //effects
  useEffect(() => {
    callToApi().then((response) => {
      setDataCountry(response);
    });
  }, []);
  //handlers from events
  const handleFilterCpuntry = (ev) => {
    setinputFilterCountry(ev.target.value);
  };
  const handleFilterContinent = (ev) => {
    setSelectedContinent(ev.target.value);
  };

  //renders
  const renderCountryList = () => {
    return dataCountry
      .filter((eachCountry) =>
        eachCountry.name
          .toLowerCase()
          .includes(inputFilterCountry.toLowerCase())
      )
      .filter((eachCountry) =>
        selectedContinent
          ? eachCountry.continents.includes(selectedContinent)
          : true
      )
      .map((eachCountry, i) => (
        <li key={i}>
          <p>{eachCountry.img}</p>
          <p>{eachCountry.name}</p>
          <p>{eachCountry.capital}</p>
          <p>{eachCountry.continents}</p>
          <span>X</span>
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
          <fieldset htmlFor="">
            Filters
            <label htmlFor="">By Country</label>
            <input
              type="text"
              placeholder="Spain..."
              value={inputFilterCountry}
              onChange={handleFilterCpuntry}
            />
            <label htmlFor="">By Continent</label>
            <select name="" id="" onChange={handleFilterContinent}>
              <option value="">All</option>
              <option value="Adrica">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
            </select>
          </fieldset>
        </form>
        <form>
          <fieldset htmlFor="">
            Add Country
            <input type="text" placeholder="Country name" />
            <input type="text" placeholder="Capital" />
            <input type="text" placeholder="Flag icon" />
            <input type="text" placeholder="Continent" />
            <button>Add Country</button>
          </fieldset>
        </form>
      </section>
      <ul>{renderCountryList()}</ul>
    </>
  );
}

export default App;
