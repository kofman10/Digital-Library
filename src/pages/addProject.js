import React, {useState} from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ColorRing } from  'react-loader-spinner'

const addProject = () => {
    
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  // const filename = watch('filename')[0].name
  const [loading, setLoading] = useState(false);

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
      console.log(filename);
      const newProject = {
        title,
        author,
        course,
        filename,
      };
 
      await axios.post("/api/project", newProject);
      toast("project uploaded successfully");
      setLoading(false)
    } catch (error) {
      console.log(error);
    }}

  return (
    <div>
         <section className="mt-32">
            <h1 className="text-center text-3xl font-mono font-semibold mb-5">
              Upload a Project
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="flex flex-col gap-5 justify-center w-full items-center">
                <div className="relative">
                  <input
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
                  *<input {...register("filename")} type="file" className="" />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className=" bg-black text-white rounded-md shadow-sm mt-5 w-72 py-2"
                  type="submit"
                >
                  { loading ? <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']} 
/> : 'Submit'}
                </button>
              </div>
            </form>
          </section>
        <section>
          <div className="flex justify-center mb-10 mt-20">
            <div className="flex justify-between w-1/3 items-center border border-black rounded-full px-4 py-1 mb-10">
              <input
                className="bg-transparent outline-none pr-4 text-black placeholder-black"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="mx-24">
            <div className="bg-white p-3 h-28 w-48 border rounded-md">
              <p>Title: whatever</p>
              <p>Author: Kayode Fayemi</p>
              <p>Course: CSC 431</p>
              <a className="italic underline" href="www.kofman.com">
                Link to project
              </a>
            </div>
            <div className="bg-white p-3 h-28 w-48 border rounded-md">
              <p>Title: whatever</p>
              <p>Author: Kayode Fayemi</p>
              <p>Course: CSC 431</p>
              <a className="italic underline" href="www.kofman.com">
                Link to project
              </a>
            </div>
          </div>
        </section>
        <ToastContainer />
    </div>
  )
}


export default addProject