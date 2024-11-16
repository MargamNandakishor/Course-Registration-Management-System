import './App.css'; // Ensure this line is presentimport React, { useState } from 'react';
import CourseTypeForm from './CourseTypeForm';
import CourseForm from './CourseForm';
import RegistrationForm from './RegistrationForm';
import './App.css'; // Optional: Import your CSS for styling

const App = () => {
    const [courseTypes, setCourseTypes] = useState([]);
    const [courses, setCourses] = useState([]);
    const [registrations, setRegistrations] = useState([]);

    const addCourseType = (type) => {
        if (!courseTypes.includes(type)) {
            setCourseTypes([...courseTypes, type]);
        }
    };

    const addCourse = (courseName) => {
        if (!courses.includes(courseName)) {
            setCourses([...courses, courseName]);
        }
    };

    const registerStudent = (course) => {
        if (!registrations.includes(course)) {
            setRegistrations([...registrations, course]);
        }
    };

    return (
        <div className="container">
            <h1>Course Management</h1>

            <div className="form-section">
                <h2>Add Course Type</h2>
                <CourseTypeForm onAdd={addCourseType} />
            </div>

            <div className="form-section">
                <h2>Add Course</h2>
                <CourseForm onAdd={addCourse} />
            </div>

            <div className="form-section">
                <h2>Register for Courses</h2>
                <RegistrationForm courses={courses} onRegister={registerStudent} />
            </div>

            <div className="available-courses">
                <h3>Available Courses:</h3>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>

            <div className="available-course-types">
                <h3>Available Course Types:</h3>
                <ul>
                    {courseTypes.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;