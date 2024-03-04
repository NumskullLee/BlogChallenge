import axios from 'axios';

export const getPostsRequest=async()=>{
    return axios.get('http://localhost:4000/posts');
}

export const createPostRequest=async(post)=>{
     return await axios.post('http://localhost:4000/post', post);
}

