import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { Div, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  return (
    <Div>
      <List>
        {contacts &&
          contacts.map(({ name, number, id }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
      </List>
    </Div>
  );
};

// ContactList.propTypes = { contacts: PropTypes.array.isRequired };
