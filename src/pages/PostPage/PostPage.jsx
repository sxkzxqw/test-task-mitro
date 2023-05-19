import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPost, getCurrentPostComments } from '../../redux/Slices/PostSlice';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';
import styles from './PostPage.module.css';

const PostPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentPost(id))
        dispatch(getCurrentPostComments(id))
    }, [])
    const post = useSelector((state) => state.post.currentPostInfo)
    const isLoading = useSelector((state) => state.post.isLoading)
    return (
        <div className={styles.wrapper}>
            {isLoading
                ? <Loader />
                : <Post post={post} />
            }
        </div>
    );
};

export default PostPage;