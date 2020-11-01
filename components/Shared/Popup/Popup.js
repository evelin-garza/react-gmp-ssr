import React from "react";
import PropTypes from "prop-types";

import styles from './Popup.module.scss';

const Popup = (props) => {
    return (
        <>
            {props.isPopupOpened &&
                <div className={styles['popup-container']}>
                    <div className={styles['popup-options-list']}>
                        <div className={styles['popup-option-item']} onClick={props.openEditMovieModal}>Edit</div>
                        <div className={styles['popup-option-item']} onClick={props.openDeleteMovieModal}>Delete</div>
                    </div>
                </div>
            }

        </>
    )
};

Popup.propTypes = {
    showOrHideMovieOptions: PropTypes.func.isRequired,
    isPopupOpened: PropTypes.bool.isRequired,
    openEditMovieModal: PropTypes.func.isRequired,
    openDeleteMovieModal: PropTypes.func.isRequired
}

export default Popup;