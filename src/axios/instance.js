import axios from "axios";
const url = "http://localhost:8000" ;

export const server = axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
});

export const StudentSignUp = (data) => server.post(`${url}/student-signup`, data);
export const TeacherSignUp = (data) => server.post(`${url}/teacher-signup`, data);
export const StudentLogin = (data) => server.post(`${url}/student-login`, data);
export const TeacherLogin = (data) => server.post(`${url}/teacher-login`, data);
export const StudentForgotPassword = (data) => server.post(`${url}/student-forgotpassword`, data);
export const TeacherForgotPassword = (data) => server.post(`${url}/teacher-forgotpassword`, data);
export const StudentResetPassword = (data) => server.post(`${url}/student-resetpassword`, data);
export const TeacherResetPassword = (data) => server.post(`${url}/teacher-resetpassword`, data);
export const StudentContact = (data) => server.post(`${url}/student-contact`, data);
export const TeacherContact = (data) => server.post(`${url}/teacher-contact`, data);