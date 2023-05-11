import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  function handleChange(evt) {
    dispatch(changeFilter(evt.target.value));
  }

  return (
    <label className={css.text}>
      Find contacts by Name
      <input
        className={css.input}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </label>
  );
};