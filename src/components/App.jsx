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
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

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
        <li key={i} className="list-child">
          <p className="list-child-info">{eachCountry.img}</p>
          <p className="list-child-info">{eachCountry.name}</p>
          <p className="list-child-info">{eachCountry.capital}</p>
          <p className="list-child-info">{eachCountry.continents}</p>
          <span className="list-child-cross">X</span>
        </li>
      ));
  };

  //html
  return (
    <>
      <header className="header">
        <h1 className="header-title">Country Info App</h1>
        <p className="header-info">
          Explore information about countries, capitals ans flags. Add new
          countries and filter throught the list!
        </p>
      </header>
      <section className="forms">
        <form className="forms-filter" onSubmit={handleFormSubmit}>
          <label htmlFor="" className="forms-filter-title">
            Filters
          </label>
          <label htmlFor="" className="forms-filter-title-one">
            By Country{' '}
          </label>
          <input
            type="text"
            placeholder="Spain..."
            value={inputFilterCountry}
            onChange={handleFilterCpuntry}
          />
          <label htmlFor="" className="forms-filter-title-two">
            By Continent
          </label>
          <select
            name=""
            id=""
            value={selectedContinent}
            onChange={handleFilterContinent}
          >
            <option value="">All</option>
            <option value="Adrica">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        <form className="forms-add" onSubmit={handleFormSubmit}>
          <label htmlFor="" className="forms-add-title">
            Add Country
          </label>
          <input type="text" placeholder="Country name" />
          <input type="text" placeholder="Capital" />
          <input type="text" placeholder="Flag icon" />
          <input type="text" placeholder="Continent" />
          <button>Add Country</button>
        </form>
      </section>
      <ul className="list">{renderCountryList()}</ul>
    </>
  );
}

export default App;
