import * as React from 'react';
import styles from './Home.module.scss';
import Header from '../../components/Header/Header';
import MovieFilters from '../../components/MovieFilters/MovieFilters';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../MoviesList/MoviesList';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <MovieFilters />
        <ErrorBoundary hasErrors={false}>
          <MoviesList />
        </ErrorBoundary>
        <Footer><Logo /></Footer>
      </div>
    </div>
  );
}

export default Home;
