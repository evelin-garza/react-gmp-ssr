import React from "react";

import styles from "./NotFound.module.scss";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className={styles['main-container']}>
            <div className={styles.topbar}>
                <div className="container">
                    <Logo />
                </div>
            </div>
            <div className={styles.content}>
                <div className="container">
                    <h2>Page Not Found</h2>
                    <p>404</p>
                    <Link href="/"><button>Go Back To Home</button></Link>
                </div>
            </div>
            <Footer><Logo /></Footer>
        </div>
    );
}

export default NotFound;