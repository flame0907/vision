import React, { useState } from 'react';
import UserService from '../../service/UserService';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const Signup = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    education: "",
    college: "",
    marks: "",
    role: "",
    resume: null, 
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setUser({
      ...user,
      [name]: type === 'file' ? files[0] : value, 
    });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    console.log('User data being sent:', user);
  
    const formData = new FormData();
    formData.append('id', user.id);
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('education', user.education);
    formData.append('college', user.college);
    formData.append('marks', user.marks);
    formData.append('role', user.role);
    if (user.resume) {
      formData.append('resume', user.resume);
    }
  
    try {
      const response = await UserService.saveUser(formData);
      if (response.status === 200) {
        console.log("User saved successfully:", response);
        toast.success("Registration successful"); // Display success message
      } else {
        console.error("Error saving user:", response.data);
        toast.error("Failed to save user: " + response.data); // Display error message
      }
    } catch (error) {
      console.error("There was an error saving the user:", error);
      toast.error("An error occurred while saving the user. Please check your input and try again."); // Display error message
    }
  };
  
  return (
    <>
      <div className="signup-form-container">
        <div className="signup-form">
          <Form onSubmit={saveUser}>
            {/* Name Field */}
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                type="text"
                className="form-control"
                required
              />
            </FormGroup>

            {/* Email Field */}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                type="email"
                className="form-control"
                required
              />
            </FormGroup>

            {/* Education Field */}
            <FormGroup>
              <Label for="education">Highest Education</Label>
              <Input
                id="education"
                name="education"
                value={user.education}
                onChange={handleChange}
                placeholder="Your Education"
                type="text"
                className="form-control"
              />
            </FormGroup>

            {/* College/University Field */}
            <FormGroup>
              <Label for="college">College/University</Label>
              <Input
                id="college"
                name="college"
                value={user.college}
                onChange={handleChange}
                placeholder="Your College/University"
                type="text"
                className="form-control"
              />
            </FormGroup>

            {/* CGPA Field */}
            <FormGroup>
              <Label for="marks">Marks/CGPA</Label>
              <Input
                id="marks"
                name="marks"
                value={user.marks}
                onChange={handleChange}
                placeholder="Your Marks/CGPA"
                type="text"
                className="form-control"
              />
            </FormGroup>

            {/* Role Field */}
            <FormGroup>
              <Label for="role">Role</Label>
              <Input
                id="role"
                name="role"
                value={user.role}
                onChange={handleChange}
                placeholder="Role"
                type="text"
                className="form-control"
              />
            </FormGroup>

            {/* Resume Upload */}
            <FormGroup className="file-upload">
              <Label for="resume">Resume</Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                onChange={handleChange}
                className="form-control"
              />
            </FormGroup>

            {/* Checkbox Field */}
            <FormGroup check>
              <Input
                type="checkbox"
                id="check"
                className="form-check-input"
              />
              <Label for="check" check>
                Check me out
              </Label>
            </FormGroup>

            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <Button type="submit" className="btn-submit">Submit</Button>
            </div>
          </Form>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render toast notifications */}
    </>
  );
};

export default Signup;
