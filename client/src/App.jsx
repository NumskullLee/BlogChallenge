import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {PostContextProvider} from './context/postContext'
import PostPage from './pages/postPage'
import PostForm from "./pages/postForm";
import NotFound from "./pages/notFound";
import PostFullView from "./pages/postFullView";
import NavBar from "./componentes/navBar";

const App=()=>{
 
  return(
    <div className="bg-teal-50 h-screen">
      <PostContextProvider>
        <NavBar />
      <div className="container mx-auto py-4">
        <Routes>
          <Route path="/" element={ <PostPage/> } />
          <Route path="/new" element={ <PostForm/> } />
          <Route path="/fullView" element={ <PostFullView />} />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
      </div>
      </PostContextProvider>
    </div>
  );
}
export default App
