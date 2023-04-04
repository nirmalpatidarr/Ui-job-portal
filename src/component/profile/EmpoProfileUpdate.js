import { Formik, Form, Field,ErrorMessage } from "formik"
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useCookies } from 'react-cookie';
import * as yup from "yup";
import { HeaderComponent } from "../EmployerPage/EmpHeader";

export function EmpoProfileUpdate() {
    const navigate = useNavigate();
  const [cookies]=useCookies()

 
        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }

  

    return (

        <div className="container-fluid">
            <HeaderComponent/>
            <main className="mt-4">
                <Formik

                    initialValues={{
                        _id,
                        Fullname: "",
                        Mobile: "",
                        Qualification: "",
                        Organisation: "",
                        Position: "",
                        Emp_Company_Name: "",
                        Company_Address: "",
                        Country_id: "",
                        State_id: "",
                        // Role: "",
                        // Email: "",



                    }}
                    validationSchema={
                        yup.object({
                            Fullname: yup.string().required("Name Required"),
                            Mobile: yup.string().required("Mobile Required").matches(/\+91\d{0,10}/, "Invalid Mobile +91 and 10 digits"),
                            Qualification: yup.string().required("Qualification Required"),
                            Position: yup.string().required("Position Required"),
                            Emp_Company_Name: yup.string().required("Emp_Company_Name Required"),
                            Company_Address: yup.string().required("Company_Address Required"),
                            Country_id: yup.string().required("Country_id Required"),
                            State_id: yup.string().required("State_id Required"),
                        })
                    }




                    onSubmit={
                        (values) => {
                            axios({
                                method: "post",
                                url: "http://127.0.0.1:8080/updateProfile",
                                data: values
                            })
                                .then(() => {
                                    alert(" profile update Successfully..");
                                    navigate("/employer");
                                })

                        }
                    }



                >

                    {
                        <Form className="d-flex justify-content-center">

                            <div className="w-50 ">
                                <h1 align="center" className="mb-3"> Employer Profile Update</h1>

                                <div class="form-floating mt-4">
                                    <Field type="text" className="form-control" name="Fullname" placeholder="FullName" />
                                    <label >FullName</label>
                                    <div className="text-danger">   <ErrorMessage name="Fullname" /></div>
                                </div>

                                {/* <div class="form-floating mt-3">
                                <Field type="email" className="form-control" name="Email" placeholder="name@example.com" />
                                <label >Email address</label>
                            </div> */}

                                <div className="form-floating mt-4">
                                    <Field type="mobile" name="Mobile" className="form-control" placeholder="Mobile" />
                                    <label className="form-label" >Mobile</label>
                                    <div className="text-danger">   <ErrorMessage name="Mobile" /></div>
                                </div>

                                {/* <div className="form-floating mt-4">
                                <Field type="password" name="Password" className="form-control" placeholder="Password" />
                                <label className="form-label">Password</label>
                            </div> */}
                                {/* <div className="form-floating mt-4">
                                <select className="form-select" as="select" name="Role">
                                    <option name="">Open this select Role</option>
                                    <option name="Candidate">Candidate</option>
                                    <option name="Employer">Employer</option>
                                </select>
                                <label>Works with selects</label>
                            </div> */}
                                <div className="form-floating mt-4">
                                    <Field type="text" name="Qualification" className="form-control" placeholder="Qualification" />
                                    <label className="form-label" >Qualification</label>
                                    <div className="text-danger">   <ErrorMessage name="Qualification" /></div>
                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="text" name="Organisation" className="form-control" placeholder="Organisation" />
                                    <label className="form-label" >Organisation</label>
                                    <div className="text-danger">   <ErrorMessage name="Organisation" /></div>

                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="mobile" name="Position" className="form-control" placeholder="Position" />
                                    <label className="form-label" >Position</label>
                                    <div className="text-danger">   <ErrorMessage name="Position" /></div>

                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="text" name="Emp_Company_Name" className="form-control" placeholder="Emp_Company_Name" />
                                    <label className="form-label" >Emp_Company_Name</label>
                                    <div className="text-danger">   <ErrorMessage name="Emp_Company_Name" /></div>
                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="text" name="Company_Address" className="form-control" placeholder="Company_Address" />
                                    <label className="form-label" >Company_Address</label>
                                    <div className="text-danger">   <ErrorMessage name="Company_Address" /></div>
                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="text" name="Country_id" className="form-control" placeholder="Country_id" />
                                    <label className="form-label" >Country_id</label>
                                    <div className="text-danger">   <ErrorMessage name="Country_id" /></div>
                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="text" name="State_id" className="form-control" placeholder="State_id" />
                                    <label className="form-label" >State_id</label>
                                    <div className="text-danger">   <ErrorMessage name="State_id" /></div>
                                </div>



                                <div className="form-check d-flex justify-content-center mt-4">
                                    <Field className="form-check-input me-2" type="checkbox" name="" id="form2Example3cg" />
                                    <label className="form-check-label">
                                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                    </label>
                                </div>

                                <div className="d-flex justify-content-center mt-5">
                                    <button
                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Update</button>
                                </div>

                                {/* <p className="text-center text-muted mt-3">Have already an account? <Link to="/login"
                                className="fw-bold text-body"><u>Login here</u></Link></p> */}


                            </div>
                        </Form>
                    }
                </Formik>
            </main>
        </div >


    )
}