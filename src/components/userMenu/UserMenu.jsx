import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelector';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div className={css.container}>
      <p className={css.text}>Hello {name}</p>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;