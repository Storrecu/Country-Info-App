// Fichero src/services/api.js

const callToApi = () => {
  // Llamamos a la API
  return fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,flag,continents'
  )
    .then((response) => response.json())
    .then((response) => {
      const result = {
        img: response.flag,
        name: response.name.official,
        capital: response.capital,
        continents: response.continents,
      };
      return result;
    });
};

export default callToApi;
