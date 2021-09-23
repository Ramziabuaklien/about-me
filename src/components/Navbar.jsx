import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
 function Navbar() {
  
  const navbarLinks = document.getElementsByClassName("navbar-links");

  const now = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(now);
 
  const data = new Date().toLocaleDateString();

  function handleTimeChange() {
    const nowTime = new Date().toLocaleTimeString();
    setCurrentTime(nowTime);
  }
  function handleTimeChangeout(){
    setInterval(handleTimeChange, 1000);
    setCurrentTime(now);
  }
  function handelClick(){
  navbarLinks.classList.toggle('active');
}
  


return (<nav class="navbar navbar-dark bg-dark">
   <span class="navbar-brand mb-0 h1 ramzinav">RamziAbuAklien</span>
   <span class="navbar-brand mb-0 h1">Date : {data} </span>
   <span class="navbar-brand mb-0 h1" onMouseOver={handleTimeChange} onMouseOut={handleTimeChangeout} >Time : {currentTime}</span>
   <a className="toggle-botton " onClick={handelClick}>
     <span class="bar"></span>
     <span class="bar"></span>
     <span class="bar"></span>
   </a>
   <div style={{textAlign: "center"}} className="navbar-links">
   <ul class="nav justify-content-end">
  <li class="nav-item">
     <Link class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold" to="/about">About</Link>
  </li>
  <li>
    <Link to="/Project" class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold">Project</Link>
  </li>
  <li>
    <Link to="/KeeperApp" class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold">KeeperApp</Link>
  </li>
</ul>
   </div>

</nav>

);
}

export default Navbar;