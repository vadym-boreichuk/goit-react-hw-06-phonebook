import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        onChange={event => dispatch(addFilter(event.currentTarget.value))}
      />
    </Label>
  );
};
