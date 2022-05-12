import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {images} from "../../constants"

import "./About.scss";

const abouts = [
  {title: 'Full Stack Web Dev', description: 'Proficient in Back/Front End', imgUrl: images.about05},
  {title: 'Team Player', description: 'Experienced working as part of a team', imgUrl: images.about06},
  {title: 'Problem Solver', description: 'Solid at identifying and fixing technical errors', imgUrl: images.about07},
  {title: 'Adaptable', description: 'Easy to adjust to new circumstances', imgUrl: images.about08},
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I have not failed. <span>I’ve just found</span><br />10.000 <span>Ways that won’t work</span></h2>

      <div className="app__profiles">
        { abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20,}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
