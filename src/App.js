import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = (event) => {
    event.preventDefault();

    if (!name.trim() || !age || !major.trim()) return;

    setStudents([
      ...students,
      { id: Date.now(), name, age, major }
    ]);

    setName('');
    setAge('');
    setMajor('');
  };

  return (
    <div className="container">
      <h1>Student Information System</h1>

      <h4>
        Developed By: 101570138 || Anthony Huete-Jacobs || DevOps
      </h4>

      <form onSubmit={addStudent}>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            min="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="major">Major:</label>
          <input
            id="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Student</button>
      </form>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} — Age: {student.age} — Major: {student.major}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
