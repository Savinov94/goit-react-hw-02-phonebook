import css from './Contacts.module.css';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactsItem} key={id}>
          <p className={css.contactsText}>
            {name}: {number}
          </p>
          <button
            className={css.contactsButton}
            type="button"
            onClick={() => deleteContact(id)}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
