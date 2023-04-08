// import PropTypes from 'prop-types';
import { Button, Item, Parag } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Parag>
        {name}: {number}
      </Parag>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </Item>
  );
};

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
