import { Input, Label } from './Filter.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  // console.log(filter);
  const dispatch = useDispatch();

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filterContacts = event => {
  //   dispatch(setStatusFilter(event.currentTarget.value));
  // };
  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        value={filter}
        onChange={event => dispatch(setStatusFilter(event.currentTarget.value))}
      />
    </Label>
  );
};
