import axios from 'axios';

export const Data = () => {
   // const url = 'https://restcountries.eu/rest/v2/all';
   const url = 'https://jsonplaceholder.typicode.com/todos';
    return axios
    .get(url);
}