import React from "react";

import Modal from "../Shared/Modal/Modal";
import MovieForm from "../Shared/MovieForm/MovieForm";
import { ADD_MOVIE_INITIAL_VALUES, ADD_MOVIE_VALIDATION_SCHEMA } from "../Shared/common";
import styles from "../Shared/Modal/Modal.module.scss";

const AddMovieModal = (props) => {

    return (
        <Modal {...props}>
            <div className={styles['modal-header']}>
                <h2 className={styles['modal-title']}>ADD MOVIE</h2>
            </div>
            <div className={styles['modal-body']}>
                <MovieForm mode="add" initialValues={ADD_MOVIE_INITIAL_VALUES} validationSchema={ADD_MOVIE_VALIDATION_SCHEMA} onClose={props.onClose} />
            </div>
        </Modal>
    );
}

export default AddMovieModal;