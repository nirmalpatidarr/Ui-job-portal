import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useCookies } from 'react-cookie';
import * as yup from "yup";
import { UserHeader } from "../userpage/UserHeader";



export function ProfileUpdate() {
    const navigate = useNavigate();
    const [cookies] = useCookies();
    const { _id } = cookies['userData']
    if (_id == undefined) {
        navigate("/");
    }
    return (
        <div className="container-fluid">
            <UserHeader />
            <main className="mt-5">
                <button><Link to="/user">Back to Home</Link></button>
                <Formik
                    initialValues={{
                        file: null,
                        _id,
                        Fullname: "",
                        Mobile: "",
                        Skill: "",
                        Qualification: "",
                        Expected_CTC: "",
                        Current_CTC: "",
                        Prefer_Work_Location: "",
                        Resume: "",
                    }}
                    // validationSchema={
                    //     yup.object({
                    //         Fullname: yup.string().required("Name Required"),
                    //         Mobile: yup.string().required("Mobile Required").matches(/\+91\d{0,10}/, "Invalid Mobile +91 and 10 digits"),
                    //         Skill: yup.string().required("Skill Required"),
                    //         Qualification: yup.string().required("Qualification Required"),
                    //         Expected_CTC: yup.string().required("Expected_CTC Required"),
                    //         Current_CTC: yup.string().required("Current_CTC Required"),
                    //         Prefer_Work_Location: yup.string().required("Prefer_Work_Location Required"),

                    //     })
                    // }
                    onChange={e => {
                        console.log(e)
                    }}
                    onSubmit={values => {
                        const formData = new FormData();
                        formData.append('photos', values.file);
                        delete values.file;
                        formData.append('data', JSON.stringify(values));
                        console.log(formData)

                        axios({
                            url: "http://127.0.0.1:8080/updateProfile",
                            method: 'POST',
                            data: formData
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log(data, "kjhgf");
                            })
                    }}





                >

                    {({ values, handleChange, setFieldValue, handleBlur }) =>
                        <Form className="d-flex justify-content-center">

                            <div className="w-50 ">
                                <h1 align="center" className="mb-3">Profile Update</h1>


                                <div className="form-floating mt-4">
                                    <Field type="text" className="form-control" name="Fullname" placeholder="FullName" />
                                    <label >FullName</label>
                                    <div className="text-danger">   <ErrorMessage name="Fullname" /></div>
                                </div>



                                <div className="form-floating mt-4">
                                    <Field type="mobile" name="Mobile" className="form-control" placeholder="Mobile" />
                                    <label className="form-label" >Mobile</label>
                                    <div className="text-danger">   <ErrorMessage name="Mobile" /></div>
                                </div>



                                <div className="form-floating mt-4">
                                    <Field type="text" name="Skill" className="form-control" placeholder="Skill" />
                                    <label className="form-label" >Skill</label>
                                    <div className="text-danger">   <ErrorMessage name="Skill" /></div>
                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="text" name="Qualification" className="form-control" placeholder="Qualification" />
                                    <label className="form-label" >Qualification</label>
                                    <div className="text-danger">   <ErrorMessage name="Qualification" /></div>
                                </div>

                                <div className="form-floating mt-4">
                                    <Field type="text" name="Expected_CTC" className="form-control" placeholder="Expected_CTC" />
                                    <label className="form-label" >Expected_CTC</label>
                                    <div className="text-danger">   <ErrorMessage name="Expected_CTC" /></div>
                                </div>
                                <div className="form-floating mt-4">
                                    <Field type="text" name="Current_CTC" className="form-control" placeholder="Current_CTC" />
                                    <label className="form-label" >Current_CTC</label>
                                    <div className="text-danger">   <ErrorMessage name="Current_CTC" /></div>
                                </div>

                                <div className="form-floating mt-4">
                                    <Field type="text" name="Prefer_Work_Location" className="form-control" placeholder="Prefer_Work_Location" />
                                    <label className="form-label" >Prefer_Work_Location</label>
                                    <div className="text-danger">   <ErrorMessage name="Prefer_Work_Location" /></div>
                                </div>
                                {/* <div className="input-group mt-4">

                                    <label className="bg-primary" >Resume</label>
                                    <Field onChange={this.onChange(file)} type="file" name="file" placeholder="Resume"
                                    />

                                </div> */}
                                <div className="form-group">
                                    <label for="file">File upload</label>
                                    <input id="file" name="file" type="file" onChange={(event) => {
                                        setFieldValue("file", event.currentTarget.files[0]);
                                    }} className="form-control" />
                                    <label file={values.file} />
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




                            </div>
                        </Form>
                    }
                </Formik>
            </main>
        </div>


    )
}