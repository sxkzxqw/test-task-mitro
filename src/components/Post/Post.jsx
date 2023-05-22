import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import styles from './Post.module.css';
import { Link } from 'react-router-dom';
import BigAvatar from '../BigAvatar/BigAvatar';

const Post = ({ post }) => {
    const user = useSelector((state) => state.user.users).find((user) => user.id === post.userId)
    if (user) {
        return (
            <div className={styles.wrapper}>
                <BigAvatar user={user} />
                <Link className={styles.item} to={`/post/${post.id}`}>
                    <div className={styles.user_info}>
                        <div className={styles.image}>
                            {user.imageUrl
                                ? <img src={user.imageUrl} alt={user.name} className={styles.picture} />
                                : <FaUserAlt style={{ width: 30, height: 30, background: 'white' }} />
                            }
                        </div>
                        <p>{user?.username}</p>
                    </div>
                    <h3>{post?.title}</h3>
                    <p>{post?.body}</p>
                </Link>
            </div>
        );
    }
};

export default Post;