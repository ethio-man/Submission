import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  console.log("loading...");
  const addPhonebook = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhonebook}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
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
  return <div>{person.name}</div>;
};
export default App;
