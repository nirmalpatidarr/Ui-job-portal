import "../EmployerPage/getpostjob.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderComponent } from "./EmpHeader";


export function EmployePost() {
    const [Jobs, setJob] = useState([]);
    // const params = useParams();
    const [cookies,  removeCookies] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }

        axios({
            method: "get",
            url: `http://127.0.0.1:8080/EmpoGet?id=${_id}`,

        }).then((response) => {
            console.log(response.data.result, "data")

            setJob(...response.data.result);
            console.log(Jobs, "set")
        })



    }, [])
    function SignoutClick() {
        removeCookies("userid");    
        navigate("/");
    }

    return (

        <div className="container-fluid">
          <HeaderComponent/>


            <main>
                <div className='getjob'>
               
                    {/* <h4> {Jobs.Job_Title}</h4> */}


                    {
                        Jobs.map(job =>

                            < div className='empcard' >
                                <dl className="row" key={job.Job_Title}>
                                    <h3>{job.Job_Title}</h3>
                                    <dt className="col-6">Job_Title</dt>
                                    <dd className="col-6">{job.Job_Title}</dd>
                                    <dt className="col-6">Job_Description</dt>
                                    <dd className="col-6">{job.Job_Description}</dd>
                                    <dt className="col-6">Job_Position</dt>
                                    <dd className="col-6">{job.Job_Position}</dd>
                                    <dt className="col-6">Experince_Required</dt>
                                    <dd className="col-6">{job.Experince_Required}</dd>
                                    <dt className="col-6">Job_Location</dt>
                                    <dd className="col-6">{job.Job_Location}</dd>
                                    <dt className="col-6">primary_Skill_Required</dt>
                                    <dd className="col-6">{job.primary_Skill_Required}</dd>
                                    <dt className="col-6">Secondary_Skill_Required</dt>
                                    <dd className="col-6">{job.Secondary_Skill_Required}</dd>
                                    <dt className="col-6">Mandatry_Skill</dt>
                                    <dd className="col-6">{job.Mandatry_Skill}</dd>
                                    <dt className="col-6">Qualification</dt>
                                    <dd className="col-6">{job.Qualification}</dd>
                                    <dt className="col-6">Minimum_CTC</dt>
                                    <dd className="col-6">{job.Minimum_CTC}</dd>
                                    <dt className="col-6">Maximum_CTC</dt>
                                    <dd className="col-6">{job.Maximum_CTC}</dd>
                                    <dt className="col-6">Vacancy</dt>
                                    <dd className="col-6">{job.Vacancy}</dd>
                                </dl>

                            </div>
                        )

                    }
                </div>
            </main >
        </div >


    )
}