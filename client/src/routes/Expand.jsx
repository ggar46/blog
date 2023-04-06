
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,  useEffect } from 'react';


const Expand =()=> {
    let {id} = useParams();
    console.log(id, "here");
    //experiment
    const [post, setPost] = useState([]);

    //experiment receives is here 
    const loadOnePost = (id) => {

        fetch(`http://localhost:8080/api/blog/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                console.log(data)
            
            });
    }

    
    
    useEffect(() => {
        loadOnePost(id);
    }, []);



return(
    <div className='expandContentDiv'>
        <h3>{post[0]?.title}</h3>
        <img src={post[0]?.image}/>
        <p>{post[0]?.date.substring(0,10)}</p>
        <p>By: {post[0]?.author}</p>
        <p id="italicsExcerpt">{post[0]?.excerpt}</p>
        <p>{post[0]?.text}</p>

      
    </div>

)};
  


export default Expand;
