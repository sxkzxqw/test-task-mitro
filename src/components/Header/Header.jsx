import React from 'react';
import { FaHotjar } from "react-icons/fa";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to={'/'}>
                <FaHotjar style={{ width: 45, height: 45 }} />
                <h2 className={styles.blog}>BlaBla-Blog</h2>
            </Link>
        </header>
    );
};

export default Header;