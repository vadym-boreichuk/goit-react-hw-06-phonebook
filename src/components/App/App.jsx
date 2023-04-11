import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/Form';
import { Div, Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Div>
        <Title>Phonebook</Title>

        <ContactForm />
      </Div>
      <Div>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Div>
    </Container>
  );
};
