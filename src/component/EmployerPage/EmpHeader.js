import "../../component/main.css"

import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export function HeaderComponent() {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies();
    useEffect(() => {
        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }
    })
    function SignoutClick() {
        removeCookie("userData");
        navigate("/");
    }

    return (
        <header>
            <div className="heading">
                <span>
                    <img src="../images/logo.png" height="40px" width="35px" />
                    JOB  PORTAL
                </span>
            </div>
            <div className="nav-icon">
                <span><Link to="/employer">Home</Link></span>
                <span><Link to="/EmpProfile">Profile</Link></span>
                <span><Link to="/Jobpost">JobPost</Link></span>
                <span><Link to='/empget' >JobView</Link></span>
                <span><Link to="/JobApplications">View Applications</Link></span>
            </div>
            <div className="d-flex">
              
                <button className="btn btn-success" onClick={SignoutClick} >  <span className="bi bi-person-fill">Logout</span></button>

            </div>
        </header>
        
    )
}