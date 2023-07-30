import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";

const File = () => {
  const { query } = useRouter();
  let id = query.id;
  const [file, setFile] = useState();
  useEffect(() => {
    const getProject = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/compsciedu/projectinfo/${id}`);
          setFile(response.data[0].filename);
          console.log(file)
        } catch (error) {
          console.log(error);
        }
      }
    };
    getProject();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="pt-20 w-full h-screen">
        <iframe className="w-full h-full" src={file} width="500" height="500"></iframe>
      </div>
    </div>
  );
};

export default File;
