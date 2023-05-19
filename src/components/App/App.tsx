import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import PostPage from "../../pages/PostPage/PostPage";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;
