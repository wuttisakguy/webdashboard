"use client";
import Layout from "@/layout";
import { FC, Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Logout: FC = () => {
    const router = useRouter()
    useEffect(() => {
        handleLogout()
      }, []);
      
    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/login")
    }
    return (
    <></>
    );
  };
  
  export default Logout;