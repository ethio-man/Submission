import axios from "axios";

const getAll = () => {
  return axios
    .get("http://localhost:3001/persons")
    .then((response) => response.data)
    .catch((error) => console.error("Error to fetch data"));
};

const create = (data) => {
  const request = axios.post("http://localhost:3001/persons", data);
  return request
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default { getAll, create };
