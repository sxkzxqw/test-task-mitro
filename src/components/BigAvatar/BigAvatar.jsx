import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import styles from './BigAvatar.module.css';
import { Link } from 'react-router-dom';


const BigAvatar = ({ user }) => {
    if (user) {
        return (
            <Link to={`/user/${user.id}`} className={styles.wrapper}>
                <div className={styles.user_info}>
                    <div className={styles.image}>
                        {user.imageUrl
                            ? <img src={user.imageUrl} alt={user.name} className={styles.picture} />
                            : <FaUserAlt style={{ width: 100, height: 100, background: 'white' }} />
                        }
                    </div>
                    <p>{user?.username}</p>
                </div>
            </Link>
        );
    }
};

export default BigAvatar;