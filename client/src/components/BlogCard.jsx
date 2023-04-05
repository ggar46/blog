import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5';
import { Link } from 'react-router-dom';



const BlogCard = ({blogPost}) => {


    // const onUpdate = (toUpdateStudent) => {
    //     toUpdate(toUpdateStudent)
    // }

    // const onDelete = (toDeleteStudent) => {
    //     toDelete(toDeleteStudent)
    // }

    return (
        <>
    
        <Card>
            
            <Card.Body>
          
            <Card.Title>  {blogPost.title} </Card.Title>
            <p>{blogPost.date}</p>
            <p>{blogPost.author}</p>
            <p>{blogPost.text}</p>
                    <Link to={`/blog/${blogPost.id_blog}`} > Click here to Read This Blog</Link>
                
            <Button variant="outline-danger" onClick={()=>{onDelete(blogPost)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(blogPost)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
       
        </>
    )

}

export default BlogCard;

