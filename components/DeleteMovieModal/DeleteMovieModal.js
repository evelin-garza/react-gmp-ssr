import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import Modal from "../Shared/Modal/Modal";
import * as movieActions from "../../actions/movieActions";
import modalStyles from "../Shared/Modal/Modal.module.scss";

const DeleteMovieModal = (props) => {

    const deleteMovie = () => {
        const { movie } = props;
        props.deleteMovie(movie.id);
        props.onClose();
    }

    return (
        <Modal {...props}>
            <div className={modalStyles['modal-header']}>
                <h2 className={modalStyles['modal-title']}>DELETE MOVIE</h2>
            </div>
            <div className={modalStyles['modal-body']}>
                <p>Are you sure you want to delete this movie?</p>
            </div>
            <div className={modalStyles['modal-footer']}>
                <button className={`${modalStyles.btn} ${modalStyles['btn-filled-red']}`} onClick={deleteMovie}>CONFIRM</button>
            </div>
        </Modal>
    );
}

DeleteMovieModal.propTypes = {
    onClose: PropTypes.func.isRequired
}

const mapDispatcherToProps = (dispatch) => {
    return {
        deleteMovie: (movieId) => dispatch(movieActions.deleteMovie(movieId))
    }
}

export default connect(null, mapDispatcherToProps)(DeleteMovieModal);