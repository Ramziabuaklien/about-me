import React from "react";
import { Link, withRouter } from "react-router-dom";
function AboutMe(){
    const webdeveloperimg = "https://www.thebalancecareers.com/thmb/N0WHprMT46rOtd_0GXNO1YYKNww=/1500x1000/filters:fill(auto,1)/web-developer-job-description-salary-and-skills-2061841_final-01-1daf6d8219bd49a089189b4e8c6a7e4d.png";
    
    
    return <div className=" aboutmeC bg-dark container-fluid">
      <div class="bg-light container">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 aboutmewordR">Hello my name is Ramzi</h1>
        <p class="lead aboutmeword">i finished WebDeveloper course and now i am trying to build up my skill by building website.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <Link to="/about" class="btn btn-outline-dark btn-lg px-4 me-md-2 fw-bold aboutmeword">About Web Developing</Link>
          <Link to="/Project" class="btn btn-outline-dark btn-lg px-4 me-md-2 fw-bold aboutmeword">Project</Link>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-1 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={webdeveloperimg} alt="" width="720" />
      </div>
    </div>
  </div>
    </div>

}
export default AboutMe;