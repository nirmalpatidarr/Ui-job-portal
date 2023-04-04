import "./register.css"
import { Formik, Form, Field,ErrorMessage } from "formik"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import * as yup from "yup";


export function RegisterComponent() {
    const navigate=useNavigate()
    return (
        <div className="container-fluid">

            <Formik
                initialValues={{
                    Fullname: "",
                    Mobile: "",
                    Email: "",
                    Password: "",
                    Role: ""

                }}
                validationSchema={
                    yup.object({
                        Fullname: yup.string().required("Name Required"),
                        Password: yup.string().required("Password Required").matches(/(?=.*[A-Z])\w{4,15}/, "Password 4 to 15 chars with atleast one uppercase letter"),
                        Email: yup.string().required("Email Required").email("Invalid Email"),
                        Mobile: yup.string().required("Mobile Required").matches(/\+91\d{10}/, "Invalid Mobile +91 and 10 digits")
                    })
                }



                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: "http://127.0.0.1:8080/register",
                            data: values
                        })
                            .then(() => {
                                alert(" Register Successfully..");
                                navigate("/");
                            })

                    }
                }

            >
                {
                    <Form className="d-flex justify-content-center">

                        <div className="w-50 ">
                            <h1 align="center" className="mb-3">Register here</h1>

                            <div class="form-floating mt-4">
                                <Field type="text" className="form-control" name="Fullname" placeholder="Fullname" />
                                <label >Fullname</label>
                                <div className="text-danger">   <ErrorMessage name="Fullname" /></div>
                            </div>

                            <div class="form-floating mt-3">
                                <Field type="email" className="form-control" name="Email" placeholder="name@example.com" />
                                <label >Email address</label>
                                <div className="text-danger">   <ErrorMessage name="Email" /></div>
                            </div>

                            <div className="form-floating mt-4">
                                <Field type="text" name="Mobile" className="form-control" placeholder="Mobile" />
                                <label className="form-label" >Mobile</label>
                                <div className="text-danger">   <ErrorMessage name="Mobile" /></div>
                            </div>

                            <div className="form-floating mt-4">
                                <Field type="password" name="Password" className="form-control" placeholder="Password" />
                                <label className="form-label">Password</label>
                                <div className="text-danger">   <ErrorMessage name="password" /></div>
                            </div>
                            <div class="form-floating mt-4">

                                <select className="form-select" as="select" name="Role">
                                    <option name="">Open this select Role</option>
                                    <option name="Candidate">Candidate</option>
                                    <option name="Employer">Employer</option>
                                </select>
                                <label>Works with selects</label>
                                <div className="text-danger">   <ErrorMessage name="Role" /></div>
                            </div>

                            <div className="form-check d-flex justify-content-center mt-4">
                                <Field className="form-check-input me-2" type="checkbox" name="" id="form2Example3cg" />
                                <label className="form-check-label">
                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                </label>
                            </div>

                            <div className="d-flex justify-content-center mt-5">
                                <button
                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                            </div>

                            <p className="text-center text-muted mt-3">Have already an account? <Link to="/"
                                className="fw-bold text-body"><u>Login here</u></Link></p>


                        </div>
                    </Form>
                }
            </Formik>

        </div >

    )
}