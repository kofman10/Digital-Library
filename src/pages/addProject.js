import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getError } from "../utils/error";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import Projectcard from "../components/Projectcard";

const addProject = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  // const filename = watch('filename')[0].name
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false)
  
  const onSubmit = async (data) => {
    const { title, author, course, filename } = data;
    const formData = new FormData();

    formData.append("file", filename[0]);
    formData.append("upload_preset", "file_upload");

    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtfxgvzze/upload",
        formData
      );

      const filename = response.data.url;
      const newProject = {
        title,
        author,
        course,
        filename,
      };

      await axios.post("/api/project", newProject);
      toast("project uploaded successfully");
      setLoading(false);
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
    window.location.reload()
  };
  // useEffect(() => {
  //   window.location.reload();
  // }, [onSubmit]);

  const [project, setProject] = useState([]);
  const [filteredProject, setFilteredproject] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getProject = async () => {
      setLoading1(true);
      try {
        const response = await axios.get("/api/project");
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
      <section className="mt-32">
        <h1 className="text-center text-3xl font-mono font-semibold mb-5">
          Upload a Project
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="flex flex-col gap-5 justify-center w-full items-center">
            <div className="relative">
              <input
                required
                {...register("title")}
                type="text"
                placeholder="Title of Project"
                className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
              />
              <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                Title of project
              </label>
            </div>
            <div className="relative">
              <input
                required
                {...register("author")}
                type="text"
                placeholder="Author"
                className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
              />
              <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                Author
              </label>
            </div>
            <div className="relative">
              <input
                required
                {...register("course")}
                type="text"
                placeholder="Course"
                className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
              />
              <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                Course
              </label>
            </div>
            <div className="relative">
              *
              <input
                required
                {...register("filename")}
                type="file"
                className=""
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className=" bg-black text-white rounded-md shadow-sm mt-5 w-72 py-2"
              type="submit"
            >
              {loading ? (
                <div className="flex justify-center">
                  {" "}
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#b8c480",
                      "#B2A3B5",
                      "#F4442E",
                      "#51E5FF",
                      "#429EA6",
                    ]}
                  />{" "}
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </section>
      <section>
        <div className="flex justify-center mb-10 mt-20">
          <div className="flex justify-between w-1/3 items-center border border-black rounded-full px-4 py-1 mb-10">
            <input
              required
              className="bg-transparent outline-none pr-4 text-black placeholder-black"
              type="text"
              placeholder="Search..."
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
          <div className="mx-24 flex flex-col gap-4">
            {filteredProject.map((item) => (
              <Projectcard key={item._id} project={item} />
            ))}
          </div>
        )}
      </section>
      <ToastContainer />
    </div>
  );
};

export default addProject;
