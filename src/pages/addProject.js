import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getError } from "../utils/error";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
//import Projectcard from "../components/Projectcard";
import Navbar from "@/components/Navbar/Navbar";

const addProject = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // const filename = watch('filename')[0].name
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { title, author, course, supervisor, abstract, filename, year, keywords } = data;
    const formData = new FormData();

    formData.append("file", filename[0]);
    formData.append("upload_preset", "file_upload");
  console.log(data)
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtfxgvzze/upload",
        formData
      );

      const filename = response.data.url;
      const newProject = {
        year,
        title,
        author,
        course,
        keywords,
        filename,
        supervisor,
        abstract
      };

      await axios.post("/api/project", newProject);
      toast("project uploaded successfully");
      setLoading(false);
    } catch (err) {
      toast.error(getError(err));
      setLoading(false);
    }
    window.location.reload();
  };
  // useEffect(() => {
  //   window.location.reload();
  // }, [onSubmit]);

  

  return (
    <div>
      <Navbar />
      <section className="pt-10 pb-10 bg-gray-300">
        <h1 className="text-center text-3xl font-mono font-semibold mb-5">
          Upload a Project
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="flex flex-col gap-5 justify-center w-full items-center">
            
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
              <select className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer" {...register("year")} name="Year" id="year">
                <option disabled selected>Select Year</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2021/2022">2021/2022</option>
                <option value="2020/2021">2020/2021</option>
                <option value="2019/2020">2019/2020</option>
                <option value="2018/2019">2018/2019</option>
              </select>
            </div>
            <div className="relative">
            <select className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer" {...register("course")} name="course" id="course">
                <option >Select programme</option>
                <option value="Computer Science Education">Computer Science Education</option>
                <option value="Educational Technology">Educational Technology</option>
                <option value="Technology Education">Technology Education</option>
              </select>
            </div>
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
                {...register("supervisor")}
                type="text"
                placeholder="Supervisor"
                className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
              />
              <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                Supervisor
              </label>
            </div>
            <div className="relative">
              <input
                required
                {...register("keywords")}
                type="text"
                placeholder="Keywords"
                className="border border-black rounded-md focus:outline-none w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
              />
              <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
                Keywords
              </label>
            </div>
            <textarea {...register("abstract")} placeholder="Upload Abstract" className="border border-black focus:outline-none w-72" id="" cols="20" rows="10" />
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
    
      <ToastContainer />
    </div>
  );
};

export default addProject;
