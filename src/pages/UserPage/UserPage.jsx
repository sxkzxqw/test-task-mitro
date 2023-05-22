import React, { useEffect } from 'react';
import styles from './UserPage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../../redux/Slices/UserSlice';
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';
import { getPosts } from '../../redux/Slices/PostSlice';

const UserPage = () => {
    const isLoad = useSelector((state) => state.user.isLoading);
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser(id))
    }, [])
    const user = useSelector((state) => state.user.user)
    const posts = useSelector((state) => state.post.posts)
    const userPosts = posts.filter((post) => post.userId === user.id)
    const users = useSelector((state) => state.user.users)
    const isLoading = Boolean(userPosts && posts.length > 0 && user !== {} && users.length > 0 && !isLoad)
    return (
        <div className={styles.wrapper}>
            {!isLoading
                ? <Loader />
                : <>
                    <div className={styles.avatar}>
                        <div className={styles.image}>
                            {user.imageUrl
                                ? <img src={user.imageUrl} alt={user.name} className={styles.picture} />
                                : <FaUserAlt style={{ width: 200, height: 200, background: 'white' }} />
                            }
                        </div>
                        <div className={styles.userInfo}>
                            <p className={styles.userName}>{user?.username}</p>
                            <p className={styles.userEmail}>{user?.email}</p>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contactInfo}>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>Real name:</p>
                            <p className={styles.rightInfo}>{user?.name}</p>
                        </div>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>Phone number:</p>
                            <p className={styles.rightInfo}>{user?.phone}</p>
                        </div>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>Email:</p>
                            <p className={styles.rightInfo}>{user?.email}</p>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contactInfo}>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>City:</p>
                            <p className={styles.rightInfo}>{user?.address?.city}</p>
                        </div>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>Street:</p>
                            <p className={styles.rightInfo}>{user?.address?.street}</p>
                        </div>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>Suite:</p>
                            <p className={styles.rightInfo}>{user?.address?.suite}</p>
                        </div>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>ZipCode:</p>
                            <p className={styles.rightInfo}>{user?.address?.zipcode}</p>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.contactInfo}>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>Company:</p>
                            <p className={styles.rightInfo}>{user?.company?.name}</p>
                        </div>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>Catch phrase:</p>
                            <p className={styles.rightInfo}>{user?.company?.catchPhrase}</p>
                        </div>
                        <div className={styles.realName}>
                            <p className={styles.leftInfo}>BS:</p>
                            <p className={styles.rightInfo}>{user?.company?.bs}</p>
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.posts}>
                        <h2 className={styles.checkout}>Checkout user posts!</h2>
                        <ul className={styles.posts}>
                            {userPosts.map((post) => {
                                return <Post post={post} key={post.id} />
                            })}
                        </ul>
                    </div>
                    <div className={styles.border}></div>
                    <button type='button' className={styles.button} onClick={() => { navigate('/') }}>
                        Go back
                    </button>
                </>
            }
        </div>
    );
};

export default UserPage;