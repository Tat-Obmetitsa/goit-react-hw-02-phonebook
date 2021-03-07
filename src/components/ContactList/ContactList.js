import React from 'react';
// import styles from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = function ({ contacts, deleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(e => {
          return (
            <li key={e.id}>
              <span>{e.name}: </span>
              <span>{e.number}</span>
              <button type="button" onClick={() => deleteContact(e.id)}>
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
