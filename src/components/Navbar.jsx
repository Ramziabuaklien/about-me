import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
 function Navbar() {

  const now = new Date().toLocaleTimeString();


  const [humbrager, setHumbrager]= useState(true);
  

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
  setHumbrager(prevValue =>{
    return !prevValue;
  });
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
   <div style={{textAlign: "center"}} className={humbrager? "navbar-links": "container navbar-links active"}>
   <ul class="nav justify-content-end">
  <li class="nav-item">
     <Link class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold" to="/about">About</Link>
  </li>
  <li>
    <Link to="/Project" class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold">ToDoList</Link>
  </li>
  <li>
    <Link to="/KeeperApp" class="Linka btn btn-outline-light btn-lg px-4 me-md-2 fw-bold">NotesApp</Link>
  </li>
</ul>
   </div>

</nav>

);
}

export default Navbar;