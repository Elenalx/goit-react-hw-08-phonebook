import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');



  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const dispatch = useDispatch();
  
  const contactAdd = {
    name: name,
    phone: number,
  };

  const contactsStore = useSelector(getContacts);

  const addContactToServer = () => {
    if (contactsStore.find(obj => obj.name === contactAdd.name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }


    dispatch(addContact(contactAdd));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContactToServer();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.text}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
        className={css.input}
      />

      <label className={css.text}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
        className={css.input}
      />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

