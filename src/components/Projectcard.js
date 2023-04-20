import React from 'react'
import axios from "axios";

const Projectcard = ({ project }) => {
  
  return (
    <div className="bg-white p-3 w-48 border rounded-md">
              <p>Title: {project.title}</p>
              <p>Author: {project.author}</p>
              <p>Course: {project.course}</p>
              <a className="italic underline" href={project.filename}>
                Link to project
              </a>
            </div>
  )
}

export default Projectcard