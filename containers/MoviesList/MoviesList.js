import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import MovieCard from "../../components/MovieCard/MovieCard";

import styles from "./MoviesList.module.scss";
import * as movieActions from "../../actions/movieActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MoviesList = ({ movies, message, clearMessage }) => {
    return (
        <div className={styles['movies-container']}>
            {message && (
                <div className={styles['message-container']}>
                    <span>{message}</span>
                    <button className={styles.close} onClick={() => clearMessage()}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            )}
            {movies.length > 0 && (
                <p className={styles['movies-results']}><b>{movies.length}</b> movies found</p>
            )}
            {movies.length == 0 && (
                <div className={styles['no-results']}>No Movie Found</div>
            )}
            <div className={styles['movies-list']}>
                {movies.length > 0 &&
                    movies.map((movie, index) => (
                        <MovieCard
                            key={`${movie.title}-${index}`}
                            movie={movie} />
                    ))}
            </div>
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    message: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies,
        message: state.message
    };
}

const mapDispatcherToProps = (dispatch) => {
    return {
        clearMessage: () => dispatch(movieActions.clearMessage())
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(MoviesList);
