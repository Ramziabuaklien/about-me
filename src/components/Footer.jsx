import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
    const footeryear = new Date().getFullYear();
  return (
    
      <footer class="py-3 bg-dark ">
        <div class=" footerbtn container-fluid">
        <div class="btn-group" role="group" aria-label="Basic example">
   <a class="btn btn-outline-light text-white" href="https://github.com/Ramziabuaklien" role="button"><GitHubIcon /> GitHub</a>
   <a class="btn btn-outline-yellow " href="https://www.instagram.com/ramziabuaklein/" role="button"><InstagramIcon style={{color: 'white'}}/> 
     <a className="I">I</a>
     <a className="n">n</a>
     <a className="s">s</a>
     <a className="t">t</a>
     <a className="a">a</a>
     <a className="g">g</a>
     <a className="r">r</a>
     <a className="a">a</a>
     <a className="m">m</a>
   </a>
   <a class="btn btn-outline-danger" href="https://www.youtube.com/channel/UCGbfb9SM86efY8CuQdlDxQQ" role="button"><YouTubeIcon /> Youtube</a>
   <a class="btn btn-outline-primary " href="https://discord.gg/XrXE63qm" role="button">Discord</a>
</div>
          <p class="m-0 text-center text-white">
            Copyright &copy; RamziAbuAklien {footeryear}
          </p>
        </div>
      </footer>
 
  );
}

export default Footer;
