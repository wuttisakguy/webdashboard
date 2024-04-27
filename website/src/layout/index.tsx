import { FC, ReactNode, useEffect, useState } from "react";
import Leftbar from "@/components/leftbar";
import Topbar from "@/components/topbar";
import { axiosConfig } from "@/utils/axiosConfig";
import Login from "@/app/login/page";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}


const Layout: FC<LayoutProps> = ({ children }) => {
const router = useRouter()
  const [getuserlogin, setUserLogin] = useState("waiting")
  useEffect (() => {
    verifyuser()
  },[])

  const verifyuser = async () => {
    try {
      const res = await axiosConfig.get("/api/verify");
      console.log (res.data)
      setUserLogin("login")
    } catch (error) {
      console.error(error);
      setUserLogin("not_login")
      router.push("/login")
    }
  };
  if (getuserlogin === "waiting"){
    return (<p>.......</p>)
  }

  else if (getuserlogin === "not_login"){
    return (
      <Login />
    )
  }else{
    return (
      <div className="w-full min-h-screen h-auto flex justify-start overflow-hidden">
        <div className="fixed top-0 left-0 2xl:w-[16%] xl:w-[18%] lg:w-[22%] w-[15%] h-full z-[2] duration-300">
          <Leftbar />
        </div>
        <div className="fixed top-0 2xl:left-[16%] xl:left-[18%] lg:left-[22%] left-[15%] 2xl:w-[84%] xl:w-[82%] lg:w-[78%] w-[85%] h-full  duration-300">
          <div className="drop-shadow-lg z-1">
          <Topbar />
          </div> 
          <div className="overflow-y-auto h-full z-0">
            {children}
          </div>
        </div>
      </div>
    );
  }

  
};

export default Layout;
