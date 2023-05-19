import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import styles from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    console.log(post);
    const user = useSelector((state) => state.user.users).find((user) => user.id === post.userId)
    return (
        <Link className={styles.item} to={`/post/${post.id}`}>
            <div className={styles.user_info}>
                <div className={styles.image}>
                    <FaUserAlt style={{ width: 30, height: 30, background: 'white' }} />
                </div>
                <p>{user?.username}</p>
            </div>
            <h3>{post?.title}</h3>
            <p>{post?.body}</p>
        </Link>
    );
};

export default Post;