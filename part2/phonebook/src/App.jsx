import { useState } from "react";
import { PersonForm } from "./components/PersonForm.jsx";
import { Filter } from "./components/Filter.jsx";
import { Persons } from "./components/Persons.jsx";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "12-34-567890", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  //console.log("loading...");
  const addPhonebook = (event) => {
    event.preventDefault();
    const isExist = persons.find((p) => p.name === newName);
    if (isExist) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    console.log(persons[persons.length - 1]); // id of the last person
    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons[persons.length - 1].id + 1, //id of the new user we be id of the last user + 1
      }),
    );
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((p) =>
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

      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
