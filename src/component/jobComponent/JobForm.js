import { useCookies } from 'react-cookie';
import { Formik, Form, Field ,ErrorMessage} from "formik"

import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import * as yup from "yup";
import "../jobComponent/jobform.css"
import { HeaderComponent } from '../EmployerPage/EmpHeader';



export function JobTabel() {
    const navigate = useNavigate();
  
    const [cookies, removeCookies] = useCookies();
  
    const { _id } = cookies['userData']
    if (_id == undefined) {
        navigate("/");
    }
  
    function SignoutClick() {
        removeCookies("userData");
        navigate("/");
    }

    return (
        <div className="container-fluid">
           <HeaderComponent/>
            <div className='mt-4'>
                <button><Link to="/employer">Back to Home</Link></button>
            </div>
            <Formik
                initialValues={{
                    EmployerId:_id,
                    Job_Title: "",
                    Job_Description: "",
                    Job_Position: "",
                    Experince_Required: "",
                    Job_Location: "",
                    primary_Skill_Required: "",
                    Secondary_Skill_Required: "",
                    Mandatry_Skill: "",
                    Qualification: "",
                    Minimum_CTC: "",
                    Maximum_CTC: "",
                    Vacancy: ""

                }}
                validationSchema={
                    yup.object({
                        Job_Title: yup.string().required("Job_Title Required"),
                        Job_Description: yup.string().required("Job_Description Required"),
                        Job_Position: yup.string().required("Job_Position Required"),
                        Experince_Required: yup.string().required("Experince_Required Required"),
                        primary_Skill_Required: yup.string().required("primary_Skill_Required Required"),
                        Secondary_Skill_Required: yup.string().required("Secondary_Skill_Required Required"),
                        Mandatry_Skill: yup.string().required("Mandatry_Skill Required"),
                        Qualification: yup.string().required("Qualification Required"),
                        Minimum_CTC: yup.string().required("Minimum_CTC Required"),
                        Maximum_CTC: yup.string().required("Maximum_CTC Required"),
                        Vacancy: yup.string().required("Vacancy Required"),


                    })
                }
                onSubmit={
                    (values) => {
                        axios({
                            method: "post",
                            url: `http://127.0.0.1:8080/JobPost?id=${_id}`,
                            data: values
                        })
                            .then(() => {
                                alert(" Job posted Successfully..");
                                navigate("/employer");
                            })

                    }
                }


            >



                {
                    <Form>
                        <div className="jobMain">

                            <div className="job">

                                <div className="heading ">
                                    <h1 align="center"> * Post Job Here *</h1>
                                </div>


                                <dl className="mt-3">

                                    {/* <dt className="input-group"> <label>EmployerId</label></dt>
                                            <dd>
                                                <Field type="text" name="EmployerId" className="form-control field"  placeholder="EmployerId"></Field>
                                            </dd> */}
                                    <dt className="input-group" > <label>Job_Title</label></dt>
                                    <dd>
                                        <Field type="text" name="Job_Title" className="form-control field" placeholder="Job_Title"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Job_Title" /></dd>
                                    <dt className="input-group"> <label>Job_Description</label></dt>
                                    <dd>
                                        <Field type="text" name="Job_Description" className="form-control field" placeholder="Job_Description"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Job_Description" /></dd>
                                    <dt className="input-group"> <label>Job_Position</label></dt>
                                    <dd>
                                        <Field type="text" name="Job_Position" className="form-control field" placeholder="Job_Position"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Job_Position" /></dd>
                                    <dt className="input-group"> <label>Experince_Required</label></dt>
                                    <dd>
                                        <Field type="text" name="Experince_Required" className="form-control field" placeholder="Experince_Required"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Experince_Required" /></dd>
                                    <dt className="input-group"> <label>Job_Location</label></dt>
                                    <dd>
                                        <Field type="text" name="Job_Location" className="form-control field" placeholder="Job_Location"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Job_Location" /></dd>
                                    <dt className="input-group"> <label> primary_Skill_Required</label></dt>
                                    <dd>
                                        <Field type="text" name="primary_Skill_Required" className="form-control field" placeholder=" primary_Skill_Required"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="primary_Skill_Required" /></dd>
                                    <dt className="input-group"> <label>Secondary_Skill_Required</label></dt>
                                    <dd>
                                        <Field type="text" name="Secondary_Skill_Required" className="form-control field" placeholder=" Secodary_Skill_Required"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Secondary_Skill_Required" /></dd>
                                    <dt className="input-group"> <label>Mandatry_Skill</label></dt>
                                    <dd>
                                        <Field type="text" name="Mandatry_Skill" className="form-control field" placeholder="Mandatry_Skill"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Mandatry_Skill" /></dd>
                                    <dt className="input-group"> <label>Qualification</label></dt>
                                    <dd>
                                        <Field type="text" name="Qualification" className="form-control field" placeholder="Qualification"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Qualification" /></dd>
                                    <dt className="input-group"> <label>Minimum_CTC</label></dt>
                                    <dd>
                                        <Field type="text" name="Minimum_CTC" className="form-control field" placeholder="Minimum_CTC"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Minimum_CTC" /></dd>
                                    <dt className="input-group"> <label>Maximum_CTC</label></dt>
                                    <dd>
                                        <Field type="text" name="Maximum_CTC" className="form-control field" placeholder="Maximum_CTC"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Maximum_CTC" /></dd>
                                    <dt className="input-group"> <label>Vacancy</label></dt>
                                    <dd>
                                        <Field type="text" name="Vacancy" className="form-control field" placeholder="Vacancy"></Field>
                                    </dd>
                                    <dd className='text-danger'> <ErrorMessage name="Vacancy" /></dd>


                                    <button className="btn btn-success mt-3">POST</button>

                                </dl>
                            </div>

                        </div>
                    </Form>
                }
            </Formik>
        </div>
    )
}