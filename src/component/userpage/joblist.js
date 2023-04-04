import "./joblist.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { UserHeader } from "./UserHeader";


export function JobList() {
    const [Jobs, setJob] = useState([]);
    const [aply, setaply] = useState([])
    const params = useParams();
    console.log(params, 'da')
    const [cookies, removeCookies] = useCookies();
    const navigate = useNavigate();





    useEffect(() => {

        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }
        console.log(_id, "zz")
        axios({
            method: "get",
            url: `http://127.0.0.1:8080/GetJob/${params.id}`
        }).then((response) => {
            console.log(response.data.result, "qq")
            setJob(...response.data.result)
            console.log(Jobs, "aaa")
        })



    }, [])
    const handleClick = (value) => {
        console.log(cookies['userData'], "aaadf ");
        console.log(value, "llll")
        const { _id } = cookies['userData']
        value.Candidate_Id = _id;
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
    // function ApplyClick(e,data) {
    //     console.log(data,"aaaaa")
    //     alert(e.target.data)
    //         axios({
    //             method:"post",
    //             url: `http://127.0.0.1:8080/Apply`,
    //             data:e.target.value
    //         }).then(() => {

    //          alert("saved")


    //         })

    // }
    function SignoutClick() {
        removeCookies("userData");
        navigate("/");
    }


    return (

        <div className="container-fluid">
            <UserHeader/>
            <button><Link to="/user">Back to Home</Link></button>
            <div className="joblist-content mt-4">

                <h3 className="ms-4">Job Description</h3>


                <div className='cardmain'>
                    <div className="cardlist" key={Jobs.Job_Title}>

                        <div className="card-body ms-3">
                            <div className='job-title'>{Jobs.Job_Title} </div>
                            <div className="job-loc">{Jobs.Emp_Company_Name} </div>
                            <div className="mt-2">
                                <ul className="jobb mt-1">
                                    <li> <span className=" bi bi-bag"></span><span > {Jobs.Job_Position}</span> </li>
                                    <li><span className="job-content bi bi-currency-rupee"></span><span>{Jobs.Minimum_CTC}-{Jobs.Maximum_CTC}</span></li>
                                    <li><span className="job-content-one bi bi-geo-alt-fill"></span> <span>{Jobs.Job_Location}</span></li>
                                </ul>
                            </div>
                            <p className="card-text mt-1 "><span className="bi bi-book"></span> Imidiate job opening for {Jobs.Job_Position} .</p>

                            <p className="mt-1 bi bi-book"><span className="one ">Full Time</span> - &nbsp;<span /> <span className="one" >{Jobs.primary_Skill_Required}</span> -&nbsp; <span className="one">{Jobs.Secondary_Skill_Required}</span> -&nbsp; <span className="one">{Jobs.Mandatry_Skill}</span></p>
                            <div className="d-flex">
                                <button type="submit" onClick={() => handleClick({ EmployerId: Jobs.EmployerId, Job_Id: Jobs._id })} className="btn btn-primary">Apply</button></div>
                        </div>
                    </div>
                    <div className="summry">
                        <h3>Summary</h3>
                        <p>
                            {Jobs.Job_Title}

                        </p>
                        <p>Role and Responsibilities</p>
                        <p>{Jobs.Job_Description}</p>
                        <dl>
                            <dt>Job_Title</dt>
                            <dd>{Jobs.Job_Title}</dd>
                            <dt>Education</dt>
                            <dd>{Jobs.Qualification}</dd>
                            <dt>Job_Location</dt>
                            <dd>{Jobs.Job_Location}</dd>
                            <dt>primary_Skill_Required</dt>
                            <dd>{Jobs.primary_Skill_Required}</dd>
                            <dt>Secondary_Skill_Required</dt>
                            <dd>{Jobs.Secondary_Skill_Required}</dd>
                            <dt>Mandatry_Skill</dt>
                            <dd>{Jobs.Mandatry_Skill}</dd>
                        </dl>
                    </div>
                </div>






            </div>


        </div >
    )
}


