// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ViewEmployeePage from './Pages/ViewEmployeePage';
import InsertEmployeePage from './Pages/InsertEmployeePage';
import UpdateEmployeeData from './Pages/UpdateEmployeeData';
import EmployeePage from './Pages/EmployeePage';
// import auth from './Auth';
// import AuthGuard from './AuthGuard';
import React from 'react';
import IssueWarningLetter from './Pages/IssueWarningLetter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewPendingWarningLetter from './Pages/ViewPendingWarningLetter';
import UpdateWarningLetterStatus from './Pages/UpdateWarningLetterStatus'
import WarningLetterPage from './Pages/WarningLetterPage'
import TerminationLetterPage from './Pages/TerminationLetterPage';
import IssueTerminationLetter from './Pages/IssueTerminationLetter';
import ViewAcceptWarningLetter from './Pages/ViewAcceptWarningLetter';
import ViewReviseWarningLetter from './Pages/ViewRevisedWarningLetter';
import ViewRejectWarningLetter from './Pages/ViewRejectedWarningLetter';
import ViewPendingTerminationLetter from './Pages/ViewPendingTerminationLetter';
import ViewReviseTerminationLetter from './Pages/ViewReviseTerminationLetter';
import ViewAcceptTerminationLetter from './Pages/ViewAcceptTerminationLetter';
import MoviePage from './Pages/MoviePage'
import ViewAllMoviePage from './Pages/ViewAllMoviePage';
import InsertMovie from './Pages/InsertMovie'
import UpdateMovie from './Pages/UpdateMovie'
import UpdateTerminationLetterStatus from './Pages/UpdateTerminationLetterStatus';
import IssueResignationLetter from './Pages/IssueResignationLetter';
import ResignationLetterPage from './Pages/ResignationLetterPage';
import ViewPendingResignationLetter from './Pages/ViewPendingResignationLetter';
import ViewAcceptResignationLetter from './Pages/ViewAcceptResignationLetter';
import ViewReviseResignationLetter from './Pages/ViewReviseResignationLetter';
import ViewRejectResignationLetter from './Pages/ViewRejectResignationLetter';
import UpdateResignationLetterStatus from './Pages/UpdateResignationLetterStatus';
import ExternalPartiesPage from './Pages/ExternalPartiesPage'
import InsertExternalParties from './Pages/InsertExternalParties';
import ViewExternalParties from './Pages/ViewExternalParties';
import ViewExternalPartiesReport from './Pages/ViewExternalPartiesReport';
import CreateFundRequest from './Pages/CreateFundRequest';
import FundRequestPage from './Pages/FundRequestPage';
import ViewFundRequest from './Pages/ViewFundRequest'
import UpdateFundRequestStatus from './Pages/UpdateFundRequestStatus';
import FoodPage from './Pages/FoodPage';
import ViewAllFood from './Pages/ViewAllFood';
import ViewAvailableFood from './Pages/ViewAvailableFood';
import InsertFood from './Pages/InsertFood'
import PromoPage from './Pages/PromoPage';
import CreatePromo from './Pages/CreatePromo';
import ViewPromo from './Pages/ViewPromo';
import MembershipPage from './Pages/MembershipPage';
import ViewMembership from './Pages/ViewMembership';
import InsertMembership from './Pages/InsertMembership';
import LeaveRequestPage from './Pages/LeaveRequestPage';
import IssueLeaveRequest from './Pages/IssueLeaveRequest';
import ViewLeaveRequest from './Pages/ViewLeaveRequest';
import FacilityPage from './Pages/FacilityPage';
import ViewAllEquipment from './Pages/ViewEquipment';
import InsertFacilityPage from './Pages/InsertFacility';
import UpdateLeaveRequestStatus from './Pages/UpdateLeaveRequestStatus';
import SalaryRequest from './Pages/SalaryRequestPage';
import ViewSalaryRequest from './Pages/ViewSalaryRequest';
import InsertSalaryRequest from './Pages/InsertSalaryRequest';
import UpdateSalaryRequestStatus from './Pages/UpdateSalaryRequestStatus';
import EmployeeShiftPage from './Pages/EmployeeShiftPage'
import ViewEmployeeShift from './Pages/ViewEmployeeShiftPage';
import UpdateEmployeeWorkingTime from './Pages/UpdateEmployeeWorkingTime';
import MovieSchedulePage from './Pages/MovieSchedulePage'
import GenerateSchedule from './Pages/GenerateSchedule'
import ViewPendingMovie from './Pages/ViewPendingMovie'
import ViewGeneratedMovie from './Pages/ViewGeneratedMovie';
import ViewUpdateMovieSchedule from './Pages/ViewUpdateMovieSchedule';
import UpdateMovieSchedule from './Pages/UpdateMovieSchedule';
import MovieOrderPage from './Pages/MovieOrderPage'
// const a = new auth();

function App() {
  // console.log("app")
  
  if (sessionStorage.getItem('currentUser')!=null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="register" element={<Register/>}/>
          {/* <Route path="employee" component={auth(EmployeePage)}> */}
          <Route path="warningletter" element={<WarningLetterPage/>}>
            <Route path="view/Pending" element={<ViewPendingWarningLetter/>}/>
            <Route path="view/Accept" element={<ViewAcceptWarningLetter/>}/>
            <Route path="view/Revise" element={<ViewReviseWarningLetter/>}/>
            <Route path="view/Reject" element={<ViewRejectWarningLetter/>}/>
            <Route path = "issue" element={<IssueWarningLetter/>}/>
            <Route path="update/:id" element={<UpdateWarningLetterStatus/>}/>
          </Route>
          <Route path="terminationletter" element={<TerminationLetterPage/>}>
            <Route path="view/Pending" element={<ViewPendingTerminationLetter/>}/>
            <Route path="view/Accept" element={<ViewAcceptTerminationLetter/>}/>
            <Route path="view/Revise" element={<ViewReviseTerminationLetter/>}/>
            <Route path="view/Reject" element={<ViewReviseTerminationLetter/>}/>
            <Route path = "issue" element={<IssueTerminationLetter/>}/>
            <Route path="update/:id" element={<UpdateTerminationLetterStatus/>}/>
          </Route>
          <Route path="resignationletter" element={<ResignationLetterPage/>}>
            <Route path="view/Pending" element={<ViewPendingResignationLetter/>}/>
            <Route path="view/Accept" element={<ViewAcceptResignationLetter/>}/>
            <Route path="view/Revise" element={<ViewReviseResignationLetter/>}/>
            <Route path="view/Reject" element={<ViewRejectResignationLetter/>}/>
            <Route path = "issue" element={<IssueResignationLetter/>}/>
            <Route path="update/:id" element={<UpdateResignationLetterStatus/>}/>
          </Route>
          <Route path="employee" element={<EmployeePage/>}>
            <Route path="view" element={<ViewEmployeePage/>}/>
            <Route path="insert" element={<InsertEmployeePage/>}/>
            <Route path="update/:id" element={<UpdateEmployeeData/>}/>
          </Route>
          <Route path="movie" element={<MoviePage/>}>
            <Route path="view" element={<ViewAllMoviePage/>}/>
            <Route path="insert" element={<InsertMovie/>}/>
            <Route path="update/:id" element={<UpdateMovie/>}/>
          </Route>
          <Route path="externalParties" element={<ExternalPartiesPage/>}>
            <Route path="view" element={<ViewExternalParties/>}/>
            <Route path="insert" element={<InsertExternalParties/>}/>
            <Route path="report/:id" element={<ViewExternalPartiesReport/>}/>
          </Route>
          <Route path="fundRequest" element={<FundRequestPage/>}>
            <Route path="view" element={<ViewFundRequest/>}/>
            <Route path="insert" element={<CreateFundRequest/>}/>
            <Route path="update/:id" element={<UpdateFundRequestStatus/>}/>
          </Route>
          <Route path="food" element={<FoodPage/>}>
            <Route path="view" element={<ViewAllFood/>}/>
            <Route path="insert" element={<InsertFood/>}/>
            {/* <Route path="update/:id" element={<UpdateFundRequestStatus/>}/> */}
          </Route>
          <Route path="promo" element={<PromoPage/>}>
            <Route path="view" element={<ViewPromo/>}/>
            <Route path="insert" element={<CreatePromo/>}/>
            {/* <Route path="update/:id" element={<UpdateFundRequestStatus/>}/> */}
          </Route>
          <Route path="membership" element={<MembershipPage/>}>
            <Route path="view" element={<ViewMembership/>}/>
            <Route path="insert" element={<InsertMembership/>}/>
            {/* <Route path="update/:id" element={<UpdateFundRequestStatus/>}/> */}
          </Route>
          <Route path="leaveRequest" element={<LeaveRequestPage/>}>
            <Route path="view" element={<ViewLeaveRequest/>}/>
            <Route path="insert" element={<IssueLeaveRequest/>}/>
            <Route path="update/:id" element={<UpdateLeaveRequestStatus/>}/>
          </Route>
          <Route path="salaryRequest" element={<SalaryRequest/>}>
            <Route path="view" element={<ViewSalaryRequest/>}/>
            <Route path="insert" element={<InsertSalaryRequest/>}/>
            <Route path="update/:id" element={<UpdateSalaryRequestStatus/>}/>
          </Route>
          <Route path="employeeShift" element={<EmployeeShiftPage/>}>
            <Route path="view" element={<ViewEmployeeShift/>}/>
            {/* <Route path="insert" element={<InsertSalaryRequest/>}/> */}
            <Route path="update/:id" element={<UpdateEmployeeWorkingTime/>}/>
          </Route>
          <Route path="movieSchedule" element={<MovieSchedulePage/>}>
            <Route path="view/pending" element={<ViewPendingMovie/>}/>
            <Route path="view/generated" element={<ViewGeneratedMovie/>}/>
            <Route path="view/generated/:id" element={<ViewUpdateMovieSchedule/>}/>
            {/* <Route path="insert" element={<InsertSalaryRequest/>}/> */}
            <Route path="generate/:id" element={<GenerateSchedule/>}/>
            <Route path="update/:id" element={<UpdateMovieSchedule/>}/>
          </Route>
          <Route path="facility" element={<FacilityPage/>}>
            <Route path="view" element={<ViewAllEquipment/>}/>
            <Route path="insert" element={<InsertFacilityPage/>}/>
            {/* <Route path="update/:id" element={<UpdateLeaveRequestStatus/>}/> */}
          </Route>
          <Route path="movieOrder" element={<MovieOrderPage/>}>
            <Route path="view/studio1" element={<ViewAllEquipment/>}/>
            <Route path="insert" element={<InsertFacilityPage/>}/>
            {/* <Route path="update/:id" element={<UpdateLeaveRequestStatus/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
