import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { ColorRing } from "react-loader-spinner";
import { useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar/Navbar";

const Projectinfo = () => {
  const [field, setField] = useState();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {query} = useRouter()
  const { data: session } = useSession();

  let id = query.id 

  const onSubmit = async (data) => {
    const { emailOfSupervisor, phoneNumberOfSupervisor } = data;
    console.log(data)
    try {
      setLoading(true)
      const updateProject = {
        emailOfSupervisor,
        phoneNumberOfSupervisor,
      };
      await axios.post(`/api/compsciedu/projectinfo/${id}`,updateProject);
      setLoading(false)
      window.location.reload()
    } catch (error) {
      toast.error(getError(err));
      setLoading(false);
    }
  };

  useEffect(() => {
   
      const getProject = async () => {
        if(id) {
          try {
            const response =  await axios.get(`/api/compsciedu/projectinfo/${id}`);
            setField(response.data[0])
          } catch (error) {
            console.log(error)
          }     
        }
        }
        getProject();
  }, [id]);
  return (
    <div className="bg-gray-300 h-screen md:h-full">
      <Navbar />
      {session?.user && <form
        onSubmit= {handleSubmit(onSubmit)}
      >
        <div className="flex pt-20 flex-col mx-auto md:pt-40 items-center justify-center gap-4 w-full">
        <div className="relative">
          <input
            required
            {...register("emailOfSupervisor")}
            type="text"
            placeholder="EmailOfSupervisor"
            className="border border-black rounded-md focus:outline-none md:w-[500px] w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
          />
          <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
            EmailOfSupervisor
          </label>
        </div>

        <div className="relative">
          <input
            required
            {...register("phoneNumberOfSupervisor")}
            type="text"
            placeholder="phoneNumberOfSupervisor"
            className="border border-black rounded-md focus:outline-none md:w-[500px] w-72 h-10 px-2 focus:border-black focus:border-b-4 transition-colors peer"
          />
          <label className="absolute left-2 top-2 text-black cursor-text hidden peer-focus:block peer-focus:text-xs peer-focus:-top-4 peer-focus:text-black transition-all">
            PhoneNumberOfSupervisor
          </label>
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
      </form>}
      <div className="pt-20 md:p-40 ml-3 font-barlow text-xl">
        <p>To Access this project resources, Kindly contact the Project Supervisor </p>
        <p className="pt-10">Supervisor: {field && field.supervisor}</p>
        <p>email: {field && field.emailOfSupervisor}</p>
        <p>number: {field && field.phoneNumberOfSupervisor}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Projectinfo;
