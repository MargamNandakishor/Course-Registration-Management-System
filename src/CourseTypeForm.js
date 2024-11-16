import React, { useState } from 'react';

const CourseTypeForm = ({ onAdd }) => {
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type) {
            onAdd(type);
            setType('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={type} 
                onChange={(e) => setType(e.target.value)} 
                placeholder="Enter Course Type" 
                required 
            />
            <button type="submit">Add Course Type</button>
        </form>
    );
};

export default CourseTypeForm;