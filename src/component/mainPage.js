import "../component/main.css"
// import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { UserLogin } from "./LoginComponent/Login"
import { RegisterComponent } from "./RegisterComponent/register"
import { ProfileUpdate } from "./profile/CandProfileUpdate"
import { UserPortal } from "./userpage/UserPortal";
import { EmployerPortal } from "./EmployerPage/EmployerPage";
import { JobCard } from "./userpage/cardjob"
import { JobList } from "./userpage/joblist"
import { EmployePost } from "./EmployerPage/getpostjob"
import { EmpoProfileUpdate } from "./profile/EmpoProfileUpdate"
import { JobTabel } from "./jobComponent/JobForm"
import { JobsApplied } from "./userpage/JobsAppplied"
import { AppliedCandidate } from "./EmployerPage/ViewAppliedApp"


export function MainComponent() {


    return (
        <BrowserRouter>
            <div className="container-fluid">

              
                <div>
                    <Routes>
                        <Route path="/" element={<UserLogin />} />
                        <Route path="register" element={<RegisterComponent />} />
                        <Route path="profile" element={<ProfileUpdate />} />
                        <Route path="EmpProfile" element={<EmpoProfileUpdate />}/>
                        <Route path="user" element={<UserPortal />} />
                        <Route path="jobcard" element={<JobCard/>} />
                        <Route path="employer" element={<EmployerPortal />} />
                        <Route path="joblist/:id" element={<JobList />} />
                        <Route path="empget" element={<EmployePost />} />
                        <Route path="Jobpost" element={<JobTabel />} />
                        <Route path="CandApplied" element={<JobsApplied />} />
                        <Route path="JobApplications" element={<AppliedCandidate/> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}