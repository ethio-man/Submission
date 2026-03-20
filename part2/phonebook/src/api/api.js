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

const remove = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`);
  return request
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
export default { getAll, create, remove };
