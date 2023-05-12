import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactItem } from 'components/contactItem/ContactItem';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h2 className={css.title}>Add contact</h2>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <div className={css.smalContainer}>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList>
          <ContactItem />
        </ContactList>
        <Toaster />
      </div>
    </div>
  );
};

export default Contacts;