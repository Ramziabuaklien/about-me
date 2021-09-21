import React from "react";


function TopHomePage() {
  



    return <div className=" container-fluid homepagetop ">
    

   <div class="position-relative overflow-hidden p-3 p-md-5 text-center ">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="ramzinav display-4 fw-normal">RamziAbuAklien</h1>
      <p class="lead fw-normal">Welcome to my website and this my frist website that i build from React.</p>
      <p>
  <a class="btn  btn-outline-dark" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Info
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div style={{color: 'white'}} class="card card-body bg-dark">
  This Website Build From:<span style={{color: 'orange'}}>HTML</span><span style={{color: 'blue'}}>CSS</span><span style={{color: 'yellow'}}>JS</span><span style={{color: 'pink'}}>Bootstrap</span><span style={{color: '#00ff88'}}>React</span>
  </div>
</div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>



     
    </div>
}

export default TopHomePage;