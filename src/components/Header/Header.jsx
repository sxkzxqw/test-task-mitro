import React from 'react';
import { FaHotjar } from "react-icons/fa";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Header = () => {
    const user = useSelector((state) => state.user.currentUser)
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link className={styles.logo} to={'/'}>
                    <FaHotjar style={{ width: 45, height: 45 }} />
                    <h2 className={styles.blog}>BlaBla-Blog</h2>
                </Link>
                <Link to={`/user/${user.id}`} className={styles.user}>
                    <div className={styles.image}>
                        <FaUserAlt style={{ width: 30, height: 30, background: 'white' }} />
                    </div>
                    <p>{user?.username}</p>
                </Link>
            </div>
        </header>
    );
};

export default Header;