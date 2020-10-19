import axios from "axios";

export const Data = () => {
  // 
  const url = "https://jsonplaceholder.typicode.com/todos";
  return axios.get(url).then((res) => res);
};
