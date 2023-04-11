import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { Div, List } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Div>
      <List>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </Div>
  );
};
