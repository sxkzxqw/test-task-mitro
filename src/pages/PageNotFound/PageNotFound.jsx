import React from 'react';
import styles from './PageNotFound.module.css';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <h1 className={styles.text}>Ooops! Page Not Found...</h1>
            <button className={styles.button} type='button' onClick={() => {
                navigate('/')
            }}>Go back</button>
        </div>
    );
};

export default PageNotFound;