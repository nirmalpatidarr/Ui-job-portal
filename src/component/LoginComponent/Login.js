import "../LoginComponent/login.css"
import { Formik, Form, Field, } from "formik";
import axios from "axios";
import {  Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
// import { MainComponent } from "../mainPage";



export function UserLogin() {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookies] = useCookies();


    return (


        <div className="container-fluid" >

            <Formik
                initialValues={{
                    "Email": "",
                    "Password": "",
                    "Role": ""
                }}
                onSubmit={
                    async (values) => {
                        await axios({
                            method: "post",
                            url: "http://127.0.0.1:8080/login",
                            data: values
                        }).then((result) => {
                            console.log(result.data.result, "result.result")
                            setCookies("userData", result.data.result);
                            if (result.data.result.Role === "Employer") {
                                navigate("/employer")
                            }
                            else {
                                navigate("/user");
                            }

                        })
                    }
                }
            >
                {
                    <Form>
                        <div className="login-main">
                            <div className="login-form">
                                <div className="head"> <h1 align="center">Login</h1></div>
                                <dl className="login-menu">
                                    <dt></dt>
                                    <dd className="mt-4 ">
                                        <div className="input-group">
                                            <label className=" LABEL input-group-text"><span className="bi bi-person-fill" ></span> </label>
                                            <Field style={{ border: "none", borderBottom: "1px solid black", backgroundColor: "transparent", }} type="text" name="Email" placeholder="Email" className="w-75"  ></Field>
                                        </div>
                                    </dd>
                                    <dt></dt>
                                    <dd className="mt-4">
                                        <div className="input-group">
                                            <label className=" LABEL bi bi-key input-group-text"></label>
                                            <Field style={{ border: "none", borderBottom: "1px solid black", backgroundColor: "transparent" }} type="text" name="Password" placeholder="Password" className="w-75" ></Field>
                                        </div>
                                    </dd>
                                    <dt></dt>
                                    <dd className="mt-4">

                                        <div className="input-group">
                                            <label className=" LABEL  bi bi-person input-group-text"></label>
                                            <Field as="select" style={{ border: "none", borderBottom: "1px solid black", backgroundColor: "transparent" }} name="Role" className="w-75" >
                                                <option value="-1" >Select Role</option>
                                                <option value="Candidate" >Candidate</option>
                                                <option value="Employer">Employer</option>
                                            </Field>
                                        </div>
                                    </dd>
                                    <dd style={{ marginLeft: "170px" }}>Forgot Password ?</dd>
                                </dl>

                                <button className="btn btn-success w-50 login">Login</button>

                                <p>Don't have an Account ? <Link to="/register"><u>Register Here</u> </Link></p>
                            </div>
                        </div>
                    </Form>
                }
            </Formik>

        </div>


    )


}