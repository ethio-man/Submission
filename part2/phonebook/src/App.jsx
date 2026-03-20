import { useState, useEffect } from "react";
import phoneBookService from "./api/api.js";
import { PersonForm } from "./components/PersonForm.jsx";
import { Filter } from "./components/Filter.jsx";
import { Persons } from "./components/Persons.jsx";
const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    phoneBookService
      .getAll()
      .then((initialData) => setPersons(initialData))
      .catch((err) => console.log(err));
  }, []);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  //console.log("loading...");
  const addPhonebook = async (event) => {
    event.preventDefault();
    const person = persons.find((p) => p.name === newName);
    if (person) {
      const res = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`,
      );
      if (!res) return;
      console.log;
      phoneBookService
        .change(person.id, { ...person, number: newNumber })
        .then((response) =>
          setPersons([
            ...persons.filter((p) => p.id !== response.id),
            response,
          ]),
        )
        .catch((err) => console.log(err));
      setNewName("");
      setNewNumber("");
      return;
    }
    console.log(persons[persons.length - 1]); // id of the last person
    const newId = Number(persons[persons.length - 1].id) + 1; //id of the new user we will be id of the last user + 1
    console.log(newId);
    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(newId),
    };
    setPersons(persons.concat(newPerson));
    await phoneBookService.create(newPerson);
    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (person) => {
    const res = confirm(`Are you sure to delete ${person.name} user?`);
    if (!res) return;
    phoneBookService
      .remove(person.id)
      .then((response) => setPersons(persons.filter((p) => p.id !== person.id)))
      .catch((err) => console.log(err));
  };
  console.log(persons);
  const filteredPersons = persons?.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <h3>add a new</h3>
      <PersonForm
        props={{ addPhonebook, newName, newNumber, setNewName, setNewNumber }}
      />
      <h3>Numbers</h3>

      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
