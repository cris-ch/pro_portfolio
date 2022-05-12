import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="App__Social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  )
}

export default SocialMedia