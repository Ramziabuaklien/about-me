import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
function Navbar() {

  const now = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(now);
 
  const data = new Date().toLocaleDateString();

  function handleTimeChange() {
    setInterval(handleTimeChange, 1000);
    const nowTime = new Date().toLocaleTimeString();
    setCurrentTime(nowTime);
  }
  function handleTimeChangeout(){
    setCurrentTime(now);
  }


return (
    <nav class="navbar navbar-dark bg-dark">
   <span class="navbar-brand mb-0 h1 ramzinav">RamziAbuAklien</span>
   <span class="navbar-brand mb-0 h1">Data : {data} </span>
   <span class="navbar-brand mb-0 h1" onMouseOver={handleTimeChange} onMouseOut={handleTimeChangeout} >Time : {currentTime}</span>
   <ul class="nav justify-content-end">
  <li class="nav-item">
     <Link class="btn btn-outline-light btn-lg px-4 me-md-2 fw-bold" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="btn btn-outline-light btn-lg px-4 me-md-2 fw-bold" to="/about">About</Link>
  </li>
  <li>
    <Link to="/Project" class="btn btn-outline-light btn-lg px-4 me-md-2 fw-bold">Project</Link>
  </li>
  <li>
    <Link to="/KeeperApp" class="btn btn-outline-light btn-lg px-4 me-md-2 fw-bold">KeeperApp</Link>
  </li>
</ul>
  
</nav>);
}

export default Navbar;