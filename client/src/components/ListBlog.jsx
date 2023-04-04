import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import BlogCard from './BlogCard';

const ListStudents = () => {

    // this is my original state with an array of students 
    const [students, setStudents] = useState([]);


    const loadStudents = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8080/api/students")
            .then((response) => response.json())
            .then((students) => {
                setStudents(students);
            });
    }

    useEffect(() => {
        loadStudents();
    }, [students]);


    const onSaveStudent = (newStudent) => {
        //console.log(newStudent, "From the parent - List of Students");
        setStudents((students) => [...students, newStudent]);
    }



    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Techtonica Participants </h2>
            <ul>
                {students.map((student) => {
                    return <li key={student.id}> <BlogCard student={student} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul>
        </div>
        <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} onUpdateStudent={updateStudent} />
        </div>
    );
}


export default ListStudents