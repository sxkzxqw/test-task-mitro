import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPost, getCurrentPostComments } from '../../redux/Slices/PostSlice';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';
import styles from './PostPage.module.css';
import Comment from '../../components/Comment/Comment';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [isCommentsAvailable, setIsCommentsAvailable] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentPost(id))
    }, [])

    const getComments = () => {
        dispatch(getCurrentPostComments(id))
        setIsCommentsAvailable(!isCommentsAvailable)
    }


    const post = useSelector((state) => state.post.currentPostInfo)
    const comments = useSelector((state) => state.post.currentPostComments)
    const isLoading = useSelector((state) => state.post.isLoading)
    return (
        <div className={styles.wrapper}>
            {isLoading
                ? <Loader />
                : <>
                    <button type='button' className={styles.button} onClick={() => { navigate('/') }}>
                        Go back
                    </button>
                    <Post post={post} />
                    <div className={styles.border_container}>
                        <button className={styles.comments} onClick={() => {
                            getComments()
                        }}>{!isCommentsAvailable
                            ? 'Показать комментарии'
                            : 'Скрыть комментарии'
                            }</button>
                        <div className={styles.border}></div>
                    </div>
                    {isCommentsAvailable
                        ? <ul className={styles.comments_list}>
                            {comments.map((comment) => {
                                return <Comment comment={comment} key={comment.id} />
                            })}
                        </ul>
                        : null
                    }
                </>
            }
        </div>
    );
};

export default PostPage;