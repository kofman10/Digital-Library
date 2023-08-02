import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";

const File = () => {
  const { query } = useRouter();
  let id = query.id;
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProject = async (projectId) => {
        try {
          const response = await axios.get(`/api/compsciedu/projectinfo/${projectId}`);
          setFile(response.data[0].filename);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }   
    };
    if (id) {
      const projectId = id;
      getProject(projectId);  
      console.log(file)
      console.log(id)
      console.log('got here!')
    }
  }, [id, file]);

  return (
    <div>
      <Navbar />
      <div className="pt-20 w-full h-screen">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          file && (
            <embed
              className="w-full h-full"
              src={file}
              type="application/pdf"
              width="100%"
              height="100%"
             
            />
          )
        )}{" "}
      </div>
    </div>
  );
};

export default File;
