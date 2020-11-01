import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import styles from "./MovieDetails.module.scss";
import Logo from "../../components/Logo/Logo";
import * as movieActions from "../../actions/movieActions";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Shared/Loader/Loader";

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieDetails = ({ getMovieById, selectedMovie, onCloseMovieDetails }) => {
    const router = useRouter();

    const getMovieYear = (movieReleaseDate) => {
        return movieReleaseDate.slice(0, 4);
    };

    const goBack = () => {
        onCloseMovieDetails();
        router.back();
    };


    useEffect(() => {
        if (router && router.query) {
            const { id } = router.query;
            if (id) {
                getMovieById(id);
            }
        }
    }, [router]);

    return (
        <div className={styles['movie-details-container']}>
            <div className={styles.topbar}>
                <div className={styles.container}>
                    <Logo />
                    <span className={styles['search-icon']} onClick={goBack}>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>
            <div className={styles.container}>
                {selectedMovie && Object.keys(selectedMovie).length > 0 ?
                    <div className={styles['movie-content']}>
                        <img alt={selectedMovie.title} src={selectedMovie.poster_path} />
                        <div className={styles.info}>
                            <div className={styles.row}>
                                <span className={styles.title}>{selectedMovie.title}</span>
                                <span className={styles.rating}>{selectedMovie.vote_average}</span>
                            </div>

                            <div className={styles.row}>
                                <span className={styles['release-date']}>{getMovieYear(selectedMovie.release_date)}</span>
                                <span className={styles.duration}>{selectedMovie.runtime} min</span>
                            </div>

                            <p className={styles.description}>
                                {selectedMovie.overview}
                            </p>
                        </div>
                    </div>
                    :
                    <Loader />
                }
            </div>
            <Footer><Logo /></Footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    };
};

const mapDispatcherToProps = (dispatch) => {
    return {
        getMovieById: (movieId) => dispatch(movieActions.findMovieById(movieId)),
        onCloseMovieDetails: () => dispatch(movieActions.clearSelectedMovie())
    }
};

export default connect(mapStateToProps, mapDispatcherToProps)(MovieDetails);