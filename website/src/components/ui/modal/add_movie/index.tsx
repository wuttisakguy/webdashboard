import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,faCalendarDays,faPlus } from "@fortawesome/free-solid-svg-icons";

interface AddMovieModalProps {
  isOpen: boolean;
  closeCallback: () => void;
}

const AddMovieModal: FC<AddMovieModalProps> = (props) => {
  return (
    <div
      onClick={() => props.closeCallback()}
      className={`${
        !props.isOpen
          ? "z-[-1] opacity-0 pointer-events-none"
          : "z-[1] opacity-100 pointer-events-auto"
      } absolute top-0 left-0 w-full h-full bg-[#595959]/50 flex justify-center items-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          !props.isOpen
            ? "z-[-1] opacity-0 pointer-events-none -translate-y-8"
            : "z-[1] opacity-100 pointer-events-auto translate-y-0"
        } duration-500 bg-white rounded-md py-6 px-8 shadow-lg w-[35%] overflow-y-auto h-4/5`}
      >
        <div className="border-b-[1px] border-[#B8B8B8]">
          <h1 className="text-black text-[20px] font-[700] pb-3">
          เพิ่มประกาศ
          </h1>
        </div>
        <div className="mt-6">
        <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
              ชื่อหนัง
            </label>
            <div className="relative ">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
              รายละเอียดหนัง
            </label>
            <div className="relative ">
              <textarea
                className="w-full h-40  py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none resize-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
              ประเภทหนัง
            </label>
            <div className="relative ">
              <div className="absolute right-5 h-full flex items-center justify-center ">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-[#ADADAD]"
                />
              </div>
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
              ปี
            </label>
            <div className="relative ">
              <div className="absolute right-5 h-full flex items-center justify-center ">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-[#ADADAD]"
                />
              </div>
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
              URL
            </label>
            <div className="relative ">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
            URL Teaser Youtube
            </label>
            <div className="relative ">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
            IMDb RATING
            </label>
            <div className="relative ">
              <input
                type="text"
                className="w-[20%] py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
            Quality
            </label>
            <div className="relative ">
              <div className="absolute right-5 h-full flex items-center justify-center ">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-[#ADADAD]"
                />
              </div>
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="text-[#737373] text-[15px] font-[400]">
            Language
            </label>
            <div className="relative ">
              <div className="absolute right-5 h-full flex items-center justify-center ">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-[#ADADAD]"
                />
              </div>
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder=""
                required
              />
            </div>
          </div>
          
          <div className="mt-5">
          <button 
            type="button"
            className="w-auto duration-300 hover:bg-[#1169DB] text-white text-[13px] font-[400] rounded-md bg-[#1877F2]  py-2 px-4 flex justify-center items-center gap-3"
          >
            <FontAwesomeIcon icon={faPlus} />
            <p>เพิ่มรูปภาพ</p>
          </button>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="w-full duration-300 hover:bg-[#46db32] text-white text-[16px] font-[400] rounded-md bg-[#00D609]  py-3 px-4 flex justify-center items-center gap-3"
            >
              <p>บันทึก</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovieModal;