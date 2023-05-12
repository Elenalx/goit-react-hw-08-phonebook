import { useState } from 'react';
import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeEmail = evt => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    reset();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Registration form</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.text}>
          Name
          <input
            className={css.input}
            value={name}
            onChange={handleChangeName}
            type="text"
            name="name"
            required
          />
        </label>

        <label className={css.text}>
          Еmail address
          <input
            className={css.input}
            value={email}
            onChange={handleChangeEmail}
            type="email"
            name="email"
            required
          />
        </label>

        <label className={css.text}>
          Password
          <input
            className={css.input}
            value={password}
            onChange={handleChangePassword}
            type="password"
            name="password"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;