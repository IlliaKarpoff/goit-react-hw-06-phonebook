import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// import Layout from './Layout/Layout';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = filter => setFilter(filter);

  const handleChangeFilter = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  const handleDelBtn = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);

    setContacts(newContacts);
  };

  const isAdded = name => contacts.map(contact => contact.name).includes(name);

  const addContacts = (name, phone) => {
    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      setContacts(contacts => [
        ...contacts,
        { id: uuid(), name: name, phone: phone },
      ]);
    }
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onAddContacts={addContacts} />
      </Section>

      {contacts.length ? (
        <Section title="Contacts">
          <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactsList
            contactsData={handleChangeFilter()}
            onDeleteBtn={handleDelBtn}
          />
        </Section>
      ) : null}
    </>
  );
}