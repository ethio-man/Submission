import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phoneNumber: "12-34-567890" },
  ]);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhonebook}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <div>
            number:{" "}
            <input
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <Phonebook key={i} person={person} />
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
