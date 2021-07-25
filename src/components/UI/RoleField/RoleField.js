import React from 'react';
import './RoleField.css';

export default function RoleField({value,onChange}) {
  return (
    <div className="rolediv" onChange={onChange} value={value}>
        <label className="iam">I am a </label>
        <label className="container"> Student
            <input type="radio" defaultChecked name="role" value="student"/>
            <span className="checkmark"></span>
        </label>
        <label className="container">Teacher
            <input type="radio" name="role" value="teacher"/>
            <span className="checkmark"></span>
        </label>
    </div>
  );
}