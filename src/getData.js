import React from 'react'
import axios from "axios"

const userDataUrl = 'https://jsonplaceholder.typicode.com/users';
const userPostsUrl = 'https://jsonplaceholder.typicode.com/posts/1';

export default async function GetData(userId) {
    try{
        const userDataResponse = await axios.get(`${userDataUrl}/${userId}`);
        const userPostsResponse = await axios.get(`${userPostsUrl}?userId=${userId}`);

        const userData = userDataResponse.data;
        const userPosts = userPostsResponse.data

        const mergedData = {
            ...userData,
            posts : userPosts,
        };

        return mergedData;

    } catch(err){
        console.log("hata alındı : ",err);
        throw err;
    }
}
