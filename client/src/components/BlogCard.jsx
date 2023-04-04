import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import Expand from './Expand';

const BlogCard = ({blogPost}) => {

    // const onUpdate = (toUpdateStudent) => {
    //     toUpdate(toUpdateStudent)
    // }

    // const onDelete = (toDeleteStudent) => {
    //     toDelete(toDeleteStudent)
    // }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{blogPost.title}</Card.Title>
            <p> By: {blogPost.author}</p>
            <p> {blogPost.excerpt} </p>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(onSaveBlogPost)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(onSaveBlogPost)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            <Expand/>
            </Card.Body>
        </Card>
    )

}

export default BlogCard;