import { useDeleteContactMutation } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contact = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(contact.id);
      Notify.success('Contact was delete from your phonebook');
    } catch (error) {
      Notify.failure('Something wrong. Please, try again');
    }
  };

  return (
    <div>
      <span>
        {contact.name}: <span>{contact.number}</span>
      </span>
      <button onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};