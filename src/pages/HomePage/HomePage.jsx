import styles from './HomePage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import Post from '../../components/Post/Post';
import { getPosts } from '../../redux/Slices/PostSlice';
import { getUsers } from '../../redux/Slices/UserSlice';


const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
        dispatch(getUsers())
    }, []);
    const posts = useSelector((state) => state.post.posts);
    const isPostsLoading = useSelector((state) => state.post.isLoading);
    const isUsersLoading = useSelector((state) => state.user.isLoading);
    const isLoading = Boolean(isPostsLoading && isUsersLoading);
    return (
        <div className="App">
            <ul className={styles.list}>
                {isLoading
                    ? <Loader />
                    : posts.map((post) => {
                        return <Post post={post} key={post.id} />
                    })
                }
            </ul>
        </div>
    );
};

export default HomePage;