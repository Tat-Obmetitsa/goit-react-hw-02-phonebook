import React from 'react';
import s from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = function ({ contacts, deleteContact }) {
  return (
    <>
      <ul className={s.form__list}>
        {contacts.map(e => {
          return (
            <li key={e.id} >
              <span>{e.name}: </span>
              <span>{e.number}</span>
              <button
              
              
                  type="button"
               
               
                className={s.form__list_button}
              
              
                  onClick={() => deleteContact(e.id)}
              
              
              >
                Delete contact
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
