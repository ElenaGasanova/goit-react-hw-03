import { useState, useEffect } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import initialContacts from "./contact.json";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (newContacts) => {
    console.log(newContacts);
    setContacts((prevContacts) => {
      return [...prevContacts, newContacts];
    });
  };

  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const register = (data) => {
    console.log("Sending data...");
    setTimeout(() => {
      console.log("Data sent", data);
    }, 1000);
    setTimeout(() => {
      console.log(`Welcome on board, ${data.username}! 🔥`);
    }, 2000);
  };

  const handleDeleteUser = (id) => {
    console.log(id);
  };

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm register={register} onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;
