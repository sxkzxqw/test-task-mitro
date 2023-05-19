import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPost, getCurrentPostComments } from '../../redux/Slices/PostSlice';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';
import styles from './PostPage.module.css';
import Comment from '../../components/Comment/Comment';

const PostPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentPost(id))
        dispatch(getCurrentPostComments(id))
    }, [])
    const post = useSelector((state) => state.post.currentPostInfo)
    const comments = useSelector((state) => state.post.currentPostComments)
    const isLoading = useSelector((state) => state.post.isLoading)
    return (
        <div className={styles.wrapper}>
            {isLoading
                ? <Loader />
                : <>
                    <Post post={post} />
                    <div className={styles.border_container}>
                        <p className={styles.comments}>{`Посмотреть комментарии (${comments.length})`}</p>
                        <div className={styles.border}></div>
                    </div>
                    <ul className={styles.comments_list}>
                        {comments.map((comment) => {
                            return <Comment comment={comment} key={comment.id} />
                        })}
                    </ul>
                </>
            }
        </div>
    );
};

export default PostPage;