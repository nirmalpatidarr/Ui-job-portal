import "../../component/main.css"
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from "react";

export function UserHeader() {
    const navigate = useNavigate();
    const [cookies,removeCookies] = useCookies();

    useEffect(() => {
        const { _id } = cookies['userData']
        if (_id == undefined) {
            navigate("/");
        }
   })
    function SignoutClick() {
        removeCookies("userData");
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
                <span><Link to="/user">Home</Link></span>
                <span><Link to="/profile">Profile</Link></span>

                <span><Link to="/CandApplied" >JobsApplied</Link></span>

            </div>
            <div className="d-flex">
               
                <button className="btn btn-success" onClick={SignoutClick} >  <span className="bi bi-person-fill">Logout</span></button>
            </div>
        </header>



)


}