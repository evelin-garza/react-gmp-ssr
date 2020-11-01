import React from "react";

import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {

    const onCloseModal = () => {
        props.onClose(false);
    }

    if (!props.show) {
        return null;
    }

    return (
        <div className={styles['modal-container']}>
            <div className={styles.modal}>
                <button role="close" className={styles['close-modal']} onClick={onCloseModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;