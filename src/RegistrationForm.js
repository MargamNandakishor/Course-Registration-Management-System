import React, { useState } from 'react';

const RegistrationForm = ({ courses, onRegister }) => {
    const [selectedCourse, setSelectedCourse] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if (selectedCourse) {
            onRegister(selectedCourse);
            setSelectedCourse('');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                <option value="">Select a course</option>
                {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                ))}
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;