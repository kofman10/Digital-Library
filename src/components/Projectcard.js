import React from 'react'
import axios from "axios";

const Projectcard = ({ project }) => {
  
  return (
      <div className="bg-white p-3 border rounded-md flex flex-col gap-3">
              <p>Author: {project.author}</p>
              <p>Year: {project.year}</p>
              <p>Title: {project.title}</p>
              <p>Course: {project.course}</p>
              <p className="text-sm mt-4">
                {project.abstract}
              </p>
              <p>Keywords: {project.keywords}</p>
              <div className='flex justify-center'>
              <a className = 'italic text-center bg-black text-white rounded-md p-2' href={project.filename}>Link to project</a>

              </div>
            </div>
  )
}

export default Projectcard;