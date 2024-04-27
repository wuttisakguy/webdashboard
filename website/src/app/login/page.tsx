"use client";
import Layout from "@/layout";
import { FC, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosConfig } from "@/utils/axiosConfig";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login: FC = () => {
  const { register, setValue, watch, handleSubmit } = useForm();
  const router = useRouter()
  const onsubmitform = async (data: any) => {
    console.log(data)
    try {
      const res = await axiosConfig.post("/api/login", data);
      console.log(res.data)
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token)
        toast.success(res.data.message);
        let timer = setInterval(() => {
          router.push("")
          clearInterval(timer)
        },500)
      } else {
        toast.error(res.data.message);
      }
    }catch(error: any){
      toast.error(error.response.data.message);
    }
  }
  return (
    <Fragment>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col border-[1px] border-[#e6e6e6] rounded-[9px] py-2 px-8 bg-white w-[50%] justify-center items-center">
          <h1 className="text-black/80 text-[24px] font-[600]">Dashboard</h1>
          <form onSubmit={handleSubmit(onsubmitform)}>
            <div className="w-full mb-3">
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="username"
                {...register("username", { required: "กรอกข้อมูล" })}
                required
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="password"
                {...register("password", { required: "กรอกข้อมูล" })}
                required
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <button
                type="submit"
                className="w-full duration-300 hover:bg-green-600 text-white text-[16px] font-[400] rounded-md bg-green-500  py-3 px-4 flex justify-center items-center gap-3"
              >
                <p>Login</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
