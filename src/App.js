import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import s from './App.module.css'
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook" className={s.container} >
        <ContactForm />
      </Section>

      {contacts.length ? (
        <Section title="Contacts" className={s.container} >
          <Filter  />
          <ContactsList />
        </Section>
      ) : null}
    </>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
