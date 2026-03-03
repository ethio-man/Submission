import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "12-34-567890", id: 1 },
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
    setPersons(persons.concat({ name: newName, phoneNumber: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with :{" "}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <form onSubmit={addPhonebook}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <Phonebook key={person.id} person={person} />
      ))}
    </div>
  );
};

const Phonebook = ({ person }) => {
  return (
    <div>
      {person.name} {person.phoneNumber}
    </div>
  );
};
export default App;
