import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { UserHeader } from './UserHeader';

export function JobsApplied() {
    const navigate = useNavigate();
    // const params = useParams();
    const [Jobs, setJob] = useState([]);
    const [cookies] = useCookies();




    useEffect(() => {
        console.log(cookies['userData'], "userdata")
        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }
        axios({
            method: "get",
            url: `http://127.0.0.1:8080/AppliedJob?id=${_id}`,

        }).then((response) => {
            console.log(response.data.result, "data")
            setJob(response.data.result);
            console.log(Jobs, "xxx")
        })

    }, [])





    return (

        <div className="container-fluid">
            <UserHeader />


            <main className='mt-5'>
                <h2>Applied Jobs</h2>
                <div className='table-responsive-xl'>

                    <table className='table table-hover table-striped  table-bordered '>
                        <thead className='bg-secondary'>
                            <tr>
                                <th>#</th>
                                <th>Job_Title</th>
                                <th>Job_Position</th>
                                <th>Job_Location</th>
                                <th>Experince Required</th>
                                <th>Company Name</th>
                            </tr>
                        </thead>
                        <tbody>
                          { Jobs.map(job=>
                              <tr>
                                  <td>*</td>
                                  <td>{job.Job_Id.Job_Title}</td>
                                  <td>{job.Job_Id.Job_Position}</td>
                                  <td>{job.Job_Id.Job_Location}</td>
                                  <td>{job.Job_Id.Experince_Required}</td>
                                  <td>{job.EmployerId.Emp_Company_Name}</td>
                            </tr>
                            
                            )
                            }

                           
                      
                        </tbody>

                    </table>
                </div>

            </main>
        </div>




    )

}