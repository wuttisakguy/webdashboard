import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Topbar: FC = () => {
  return (
    <div className="w-full h-20 bg-white py-4 px-6 shadow-lg shadow-black/10 flex justify-between items-center select-none">
      <div className="flex justify-start items-center gap-2">
        <div className="w-[20px]">
          <FontAwesomeIcon icon={faHome} className="text-[#595959]" />
        </div>
        <p className="text-[#595959]">/</p>
        <p className="text-[#595959]">dashboard</p>
      </div>
      <div className="flex justify-end items-center gap-4 p-3 rounded-lg duration-300 hover:bg-black/5 cursor-pointer">
          <div className="w-[15px]">
               <FontAwesomeIcon icon={faUser} className="text-[#595959]" />
          </div>
          <p className="text-[#595959]">Username</p>
      </div>
    </div>
  );
};

export default Topbar;
