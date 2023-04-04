import "./cardjob.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useParams } from 'react-router-dom';



export function JobCard() {
    const [Jobs, setJob] = useState([]);
    // const [JobId, setJobId] = useState({})
    const [cookies, removeCookies] = useCookies();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }

        axios({
            method: "get",
            url: `http://127.0.0.1:8080/fetchJob`
        }).then((response) => {
            console.log(response.data, "data")
            setJob(response.data);

        })



    }, [])
    const handleClick = (value) => {
        console.log(value,"qpqp")
        // console.log(cookies['userData'], "aaadf ");
        // const { _id } = cookies['userData']
        // value.Candidate_Id = _id;
        axios({
            method: "post",
            url: `http://127.0.0.1:8080/Apply`,
            data: value
        }).then(() => {
            //     if (result) {
            //      alert("already aplied by you")

            //     } else {
            //         alert("Job applied")
            //  }

        })
    };
    function SignoutClick() {
        removeCookies("userid");
        navigate("/");
    }
    // function handleClick(e, response) {
    //     console.log(e.target.id, "id");
    //     console.log(response)
    // }

    return (
        <div className="container-fluid">
            <header>
                <div className="heading">
                    <span>
                        {/* <img src="../images/logo.png" height="40px" width="35px"/> */}
                        JOB  PORTAL
                    </span>
                </div>
                <div className="nav-icon">
                    <span>Home</span>
                    <span><Link to="profile">Profile</Link></span>


                </div>
                <div className="d-flex justify-content-between">
                    <h4>Hello !  - </h4>
                    <button className="btn btn-success" onClick={SignoutClick}  >  <span className="bi bi-person-fill">Logout</span></button>
                </div>
            </header>
            <h1 align="center">Find your dream job now</h1>
            <button><Link to="/user">Back to Home</Link></button>
            <div className="d-flex justify-content-center">
                <div className="">

                    {
                        Jobs.map(job =>
                            <div className="card" key={job.Job_Title}>

                                <div className="card-body ms-3" key={job.Job_Title}>
                                    <div className='job-title'>{job.Job_Title} </div>
                                    <div className="job-loc">{job.EmployerId} </div>
                                    <p className="mt-2">
                                        <ul className="jobb mt-1">
                                            <li> <span className=" bi bi-bag"></span><span > {job.Job_Position}</span> </li>
                                            <li><span className="job-content bi bi-currency-rupee"></span><span>{job.Minimum_CTC}-{job.Maximum_CTC}</span></li>
                                            <li><span className="job-content-one bi bi-geo-alt-fill"></span> <span>{job.Job_Location}</span></li>
                                        </ul>
                                    </p>
                                    <p className="card-text mt-1 "><span className="bi bi-book"></span> Imidiate job opening for {job.Job_Position} .</p>

                                    <p className="mt-1"><span className="one">Full Time</span> - &nbsp;<span /> <span className="one" >{job.primary_Skill_Required}</span> -&nbsp; <span className="one">{job.Secondary_Skill_Required}</span> -&nbsp; <span className="one">{job.Mandatry_Skill}</span></p>
                                    <span className="d-flex justify-content-end "> <a href="#"> <span className="bi bi-bookmark">Save</span></a></span>



                                    <div className="d-flex">
                                        <span className="me-3">  <Link to={`/joblist/${job._id}`} className="btn btn-primary">Details</Link></span>

                                        <button type="submit" onClick={() => handleClick({ EmployerId: job.EmployerId, Job_Id: job._id })} className="btn btn-success">Apply</button></div>

                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}