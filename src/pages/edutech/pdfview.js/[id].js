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
    const getProject = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/compsciedu/projectinfo/${id}`);
          setFile(response.data[0]);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getProject();
    console.log(file?.filename)
  }, [id]);

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
              src={file?.filename}
              type="application/pdf"
              width="100%"
              height="100%"
              onLoad={() => console.log("PDF Loaded")}
            />
          )
        )}{" "}
      </div>
    </div>
  );
};

export default File;
