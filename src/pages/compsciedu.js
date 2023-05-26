import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { ColorRing } from "react-loader-spinner";
import Projectcard from "../components/Projectcard";
import Navbar from "@/components/Navbar/Navbar";

const compsciedu = () => {
  const [loading1, setLoading1] = useState(false);
  const [project, setProject] = useState([]);
  const [filteredProject, setFilteredproject] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getProject = async () => {
      setLoading1(true);
      try {
        const response = await axios.get("/api/compsciedu");
        setProject(response.data);
        setFilteredproject(response.data);
        setLoading1(false);
      } catch (err) {
        console.log(err);
        setLoading1(false);
      }
    };
    getProject();
  }, []);
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchList = project.filter(
      (item) =>
        item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.course.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.author.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    setFilteredproject(searchList);
  };
  return (
    <div>
      <Navbar />
      <section>
        <Image className = "h-full w-full object-cover object-top" src={"/compsciedu2.jpg"} width={500} height={500} />
        <div className="flex justify-center mb-10 mt-20">
          <div className="flex justify-between w-1/3 items-center border border-black rounded-full px-4 py-1 mb-10">
            <input
              required
              className="bg-transparent outline-none pr-4 text-black placeholder-black"
              type="text"
              placeholder = "Search..."
              onChange={handleSearch}
              value={searchQuery}
            />
          </div>
        </div>
        {loading1 ? (
          <div className="flex justify-center">
            {" "}
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
            />{" "}
          </div>
        ) : (
          <div className="flex justify-center mb-10">
            <div className="w-5/6 flex flex-col gap-4">
              {filteredProject.map((item) => (
                <Projectcard key={item._id} project={item} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default compsciedu;
