// Fichero src/services/api.js

const callToApi = () => {
  // Llamamos a la API
  return fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,flag,continents'
  )
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((country) => ({
        img: country.flag,
        name: country.name.official,
        capital: country.capital,
        continents: country.continents,
      }));
      return result;
    });
};

export default callToApi;
