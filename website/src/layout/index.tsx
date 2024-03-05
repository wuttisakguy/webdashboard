import { FC, ReactNode, useEffect } from "react";
import Leftbar from "@/components/leftbar";
import Topbar from "@/components/topbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className="w-full min-h-screen h-auto flex justify-start overflow-hidden">
      <div className="fixed top-0 left-0 2xl:w-[16%] xl:w-[18%] lg:w-[22%] w-[15%] h-full z-[2] duration-300">
        <Leftbar />
      </div>
      <div className="fixed top-0 2xl:left-[16%] xl:left-[18%] lg:left-[22%] left-[15%] 2xl:w-[84%] xl:w-[82%] lg:w-[78%] w-[85%] h-full z-[1] duration-300">
        <Topbar />
        <div className="overflow-y-auto h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
