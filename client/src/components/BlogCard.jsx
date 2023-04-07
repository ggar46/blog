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
            <Card.Subtitle className="mb-2 text-muted">{blogPost.author}</Card.Subtitle>
            <p>{blogPost.date.substring(0,10)}</p>
            <Card.Img src={blogPost.image}/>
            <Card.Text>{blogPost.excerpt}</Card.Text>
                    <Link id="link" to={`/blog/${blogPost.id_blog}`} > Click here to Read This Blog</Link>
                
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(blogPost)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(blogPost)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
       
        </>
    )

}

export default BlogCard;

