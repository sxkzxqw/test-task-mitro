import React from 'react';
import styles from './Comment.module.css';
import { FaUserAlt } from "react-icons/fa";

const Comment = ({ comment }) => {
    return (
        <li className={styles.comment}>
            <div className={styles.comment_author}>
                <div className={styles.image}>
                    <FaUserAlt style={{ width: 20, height: 20, background: 'white' }} />
                </div>
                <p className={styles.userName}>{`${comment.email}:`}</p>
            </div>
            <p className={styles.comment_text}>{comment.body}</p>
        </li>
    );
};

export default Comment;