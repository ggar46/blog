import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveStudent, onUpdateStudent }) => {

    // This is the original State with not initial student 
    const [formUserInput, setFormUserInput] = useState(editingStudent || {
        title: "", 
        author: "", 
        excerpt: "", 
        text: "", 
        image:"" 
    });

    //create functions that handle the event of the user typing into the form
    const handleTitleChange = (event) => {
        const title = event.target.value;
        setFormUserInput((formUserInput) => ({ ...formUserInput, title }));

    };

    const handleAuthorChange = (event) => {
        const author = event.target.value;
        setFormUserInput((formUserInput) => ({ ...formUserInput, author }));
    };

    const handleExcerptChange = (event) => {
        const excerpt = event.target.value;
        //console.log(iscurrent);
        setFormUserInput((formUserInput) => ({ ...formUserInput, excerpt }));
    };

    const handleTextChange = (event) => {
        const text = event.target.value;
        setFormUserInput((formUserInput) => ({ ...formUserInput, text}));
    }

    const handleImageChange = (event) => {
        const image = event.target.value;
        setFormUserInput((formUserInput) => ({ ...formUserInput, image}));
    }

    const clearForm = () => {
        setFormUserInput({ title: "", author: "", excerpt: "", text: "", image:"" })
    }

    //A function to handle the post request
    const postStudent = (newStudent) => {
        return fetch("http://localhost:8080/api/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStudent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Students (the parent) for updating the list
                onSaveStudent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the post request
    const putStudent = (toEditStudent) => {
        return fetch(`http://localhost:8080/api/students/${toEditStudent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditStudent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateStudent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (student.id) {
            putStudent(student);
        } else {
            postStudent(student);
        }
    };

    return (
        <Form className='form-students' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <input
                    type="text"
                    id="add-title"
                    placeholder="Title"
                    required
                    value={student.title}
                    onChange={handleTitleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <input
                    type="text"
                    id="add-author"
                    placeholder="Author"
                    required
                    value={student.author}
                    onChange={handleAuthorChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Excerpt</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={student.lastname}
                    onChange={handleExcerptChange}
                />
            </Form.Group>


            <Form.Group>
                <Form.Label>Text</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={student.lastname}
                    onChange={handleTextChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Image</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={student.lastname}
                    onChange={handleImageChange}
                />
            </Form.Group>

            <Form.Group>
            <Button type="submit" variant="outline-success">{student.id ? "Edit Student" : "Add Student"}</Button>
            {student.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default MyForm