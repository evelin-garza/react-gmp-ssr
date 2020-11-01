import React from "react";

import Modal from "../Shared/Modal/Modal";
import MovieForm from "../Shared/MovieForm/MovieForm";
import { EDIT_MOVIE_VALIDATION_SCHEMA } from "../Shared/common";
import styles from "../Shared/Modal/Modal.module.scss";

const EditMovieModal = (props) => {
    return (
        <Modal {...props}>
            <div className={styles['modal-header']}>
                <h2 className={styles['modal-title']}>EDIT MOVIE</h2>
            </div>
            <div className={styles['modal-body']}>
                <MovieForm movie={props.currentMovie} mode="edit" validationSchema={EDIT_MOVIE_VALIDATION_SCHEMA} onClose={props.onClose}></MovieForm>
            </div>
        </Modal>
    );
}

export default EditMovieModal;