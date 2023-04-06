import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import BlogCard from './BlogCard';

const ListStudents = () => {

    // this is my original state with an array of students 
    const [blogPostsFromDB, setBlogPostsFromDB] = useState([]);


    const loadBlogPosts = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/blog")
            .then((response) => response.json())
            .then((data) => {
                setBlogPostsFromDB(data);
            });
    }



    useEffect(() => {
        loadBlogPosts();
    }, []);


    const onSaveBlogPost = (newBlogPost) => {
        //console.log(newStudent, "From the parent - List of Students");
        setBlogPostsFromDB((blogPostsFromDB) => [...blogPostsFromDB, newBlogPost]);
    }



    return (
        <div className="mybody">

        <div className="list-students">
        <h2> Blog Posts </h2>
        <MyForm onSaveBlogPost={onSaveBlogPost}/>
            <ul>
                {blogPostsFromDB.map((blogPost) => {
                    return <li key={blogPost.id_blog}> <BlogCard blogPost={blogPost}/></li>
                })}
            </ul>
        </div>

        </div>
    );
}


export default ListStudents