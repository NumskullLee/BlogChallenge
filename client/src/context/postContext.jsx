import {  createContext, useContext, useState } from "react";
import { getPostsRequest } from '../api/post.api.js'
export const PostContext = createContext();

export const usePostC=()=>{
    const context =useContext(PostContext);
    if(!context){
        throw new Error("usePost must be used within a PostContextProvider");
    }
    return context;
}

export const PostContextProvider = ({children})=>{
    const [post, setPost] = useState([]);
    const [find, setfind] = useState([]);
    const [idPost, setIdPost]=useState(0);
    const [isOnline,setIsOnline]=useState(true);

    async function loadPosts(){        
        const response = await getPostsRequest();
        setPost(response.data.data);
        setfind(response.data.data);
    }

    return <PostContext.Provider value={{post, loadPosts, idPost, setIdPost, find, setfind, isOnline, setIsOnline}}>
        {children}
    </PostContext.Provider>
}