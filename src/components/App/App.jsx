import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import PostPage from "../../pages/PostPage/PostPage";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import UserPage from "../../pages/UserPage/UserPage";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getPosts } from "../../redux/Slices/PostSlice";
import { getUsers } from "../../redux/Slices/UserSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
    dispatch(getUsers())
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;
