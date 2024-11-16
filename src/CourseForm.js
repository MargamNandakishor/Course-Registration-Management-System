import React, { useState } from 'react';

const CourseForm = ({ onAdd }) => {
    const [courseName, setCourseName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (courseName) {
            onAdd(courseName);
            setCourseName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={courseName} 
                onChange={(e) => setCourseName(e.target.value)} 
                placeholder="Enter Course Name" 
                required 
            />
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;