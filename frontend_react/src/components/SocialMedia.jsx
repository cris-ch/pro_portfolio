import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/crismch/"> <BsLinkedin /> </a>
    </div>
    <div>
      <a href="https://github.com/cris-ch"> <BsGithub /> </a>
    </div> 
  </div>
);

export default SocialMedia;