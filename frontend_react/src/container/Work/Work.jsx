import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleWorkFilter = () => {};
  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {["Web 3", "E-Commerce", "Mern Stack", "CRUD", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app_flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Work;
