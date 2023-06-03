import React, { useState } from "react";

const Projectcard = ({ project }) => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className="bg-white p-3 border rounded-md flex flex-col gap-3">
      <p>Author: <b>{project.author} </b></p>
      <p>Year: <b>{project.year}</b></p>
      <p>Title: <b>{project.title}</b></p>
      <p>Course: <b>{project.course}</b></p>
      {show && (
        <div>
          <p className="text-sm mt-4">{project.abstract}</p>
          <p>Keywords: {project.keywords}</p>
        </div>
      )}
      <div className="flex justify-center gap-2">
        <a
          className="italic text-center text-black border rounded-md p-2"
          href={project.filename}
        >
          View Pdf
        </a>
        <button
          onClick={showHandler}
          className="p-2 border rounded-md text-black"
        >
          {show ? 'close' : 'extend'}
        </button>
        <a
          className="italic text-center  text-black border rounded-md p-2"
          href='/project'
        >
          link to project
        </a>
      </div>
    
    </div>
  );
};

export default Projectcard;
