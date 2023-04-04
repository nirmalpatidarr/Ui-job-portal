import "../../component/main.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie';
import { HeaderComponent } from "./EmpHeader";
import { AppliedCandidate } from "./ViewAppliedApp";

export function EmployerPortal() {
    const navigate = useNavigate();
    // const params = useParams();
    const [Jobs, setJob] = useState([]);
    const [cookies,] = useCookies();

    useEffect(() => {
        console.log(cookies['userData'])
        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }
        axios({
            method: "get",
            url: `http://127.0.0.1:8080/AppliedJobc?id=${_id}`,

        }).then((response) => {
            setJob(response.data.result);
        })


    }, []);


    return (

        <div className="container-fluid">
            <HeaderComponent />
            <main className='mt-5'>


                <div className='table-responsive-xl'>
            <h2>Applied Candidate List</h2>
                    <table className='table table-hover table-striped  table-bordered '>
                        <thead className='bg-secondary'>
                            <tr>
                                <th>#</th>
                                <th>Job_Title</th>
                                <th>Job_Position</th>
                                <th>Job_Location</th>
                                <th>Candidate Fullname</th>
                                <th>Candidate Email</th>
                                <th>Candidate Mobile</th>
                                <th>Qualification</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Jobs.map(job =>

                                    <tr>
                                        <td>*</td>
                                        <td>{job.Job_Id.Job_Title}</td>
                                        <td>{job.Job_Id.Job_Position}</td>
                                        <td>{job.Job_Id.Job_Location}</td>
                                        <td>{job.Candidate_Id.Fullname}</td>
                                        <td>{job.Candidate_Id.Email}</td>
                                        <td>{job.Candidate_Id.Mobile}</td>
                                        <td>{job.Candidate_Id.Qualification}</td>
                                        <td>{job.Candidate_Id.Resume}</td>
                                    </tr>
                                )
                            }
                            {/* {Jobs.Job_Title} */}
                        </tbody>

                    </table>
                </div>





            </main >
        </div>

    )
}