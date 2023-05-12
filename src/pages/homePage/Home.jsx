import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.smalContainer}>
        <h2 className={css.title}>Welcome to the contact storage app.</h2>
        <p className={css.text}>
          To start using the application,{' '}
          <Link to="/register">register on the page,</Link>
          <br /> or if you have an account, go to the{' '}
          <Link to="/login">login page.</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;