"use client";
import Layout from "@/layout";
import { FC, useState, useEffect } from "react";
import { axiosConfig } from "@/utils/axiosConfig";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { randomcolour } from "@/utils/colour";

const Electricmeter: FC = () => {
  const [electricrmeter, setElectricrmeter] = useState<any>([]);
  const [selectElectricrmeter, setSelectElectricrmeter] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("ทั้งหมด");
  const [popupImage, setPopupImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchElectricrmeter();
  }, []);

  const fetchElectricrmeter = async () => {
    try {
      const response = await axiosConfig.get("/api/data_elect");
      const imageBase64 = response.data.image;
      setElectricrmeter(imageBase64);
      setElectricrmeter(response.data);
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setElectricrmeter({
          category: categorycolour,
          data: response.data.data,
        });
        const categoryfilter = response.data?.category.map((category: any) => ({
          label: category,
          value: category,
        }));
        setSelectElectricrmeter([{ label: "ทั้งหมด", value: "ทั้งหมด" }, ...categoryfilter]);
        console.log("Chart data Water:", response.data);
      }
    } catch (error) {
      console.error("Error fetching watermeter data:", error);
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageUrl: any) => {
    setPopupImage(imageUrl);
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(electricrmeter?.data?.length / itemsPerPage);

  return (
    <Layout>
      {popupImage && (
        <div className="fixed top-0 left-0 w-full h-full flex bg-black bg-opacity-50 justify-center items-center duration-300 z-50 ">
          <div className="max-w-[90%] max-h-[90%]">
            <img
              src={popupImage}
              alt="Popup"
              className="max-w-full max-h-full rounded-md"
            />
            <button
              className="absolute top-0 right-0 m-4 p-2 rounded-full text-white"
              onClick={handleClosePopup}
            >
              X
            </button>
          </div>
        </div>
      )}
      <div className="w-full py-6 px-8 justify-start overflow-y-auto h-screen pb-24">
        <h1 className="text-black/80 text-[32px] font-[600]">มิเตอร์ไฟ</h1>
        <div className="flex justify-start items-center gap-4 2xl:w-[88%] xl:w-[86%] lg:w-[80%] flex-wrap mt-3">
          <div className="flex relative 2xl:w-[35%] xl:w-[40%] lg:w-[35%] w-[80%]">
            <div className="absolute top-[10px] left-3 w-[20px]">
              <FontAwesomeIcon icon={faSearch} className="text-black/30" />
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="ค้นหา"
              className="bg-white rounded py-2 pl-12 px-4 w-full outline-none border-[1px] border-black/20 text-black placeholder-black/30"
              required
            />
          </div>
          <div className="flex justify-start items-center  2xl:w-[17%] xl:w-[20%] lg:w-[28%] w-[35%] flex-wrap">
            <Select
              value={{ label: selectedPosition, value: selectedPosition }}
              onChange={(selectedOption: any) => {
                setSelectedPosition(selectedOption.value)
                setCurrentPage(1)
              }}
              options={selectElectricrmeter}
            />
          </div>
        </div>

        <div className="border-[1px] border-[#e6e6e6] rounded-[9px] py-2 px-8 bg-white my-5 m-auto w-[100%] overflow-x-auto">
          <div className="flex p-3 gap-3 border-b-2 border-gray-300 w-[92em] ">
            <h1 className="w-[50%]">วัน-เวลา</h1>
            <h2 className="w-[50%]">ตำแหน่ง</h2>
            <h3 className="w-[50%]">เลขมิเตอร์</h3>
            <h4 className="w-[50%]">รูปภาพ</h4>
          </div>
          <div className="w-[92em]">
            {electricrmeter?.data
              ?.filter((item: any) => {
                if (selectedPosition === "ทั้งหมด") return true;
                return item.name === selectedPosition;
              })
              .filter((item: any) => {
                const searchKeywords = search
                  .toLowerCase()
                  .split(",")
                  .map((keyword) => keyword.trim());
                return (
                  searchKeywords.length === 0 ||
                  searchKeywords.every(
                    (keyword) =>
                      item.datetime.toLowerCase().includes(keyword) || item.name.toLowerCase().includes(keyword)
                  )
                );
              })
              .slice(startIndex, endIndex)
              .map((item: any, idx: any) => (
                <div
                  key={idx}
                  className="my-2 p-3 flex justify-start items-center gap-3 w-auto rounded-lg hover:bg-blue-200"
                >
                  <p className="text-left w-[50%]">{item.datetime}</p>
                  <p className="text-left w-[50%]">{item.name}</p>
                  <p className="text-left w-[50%]">{item.value}</p>
                  <p
                    className="text-left w-[50%] underline cursor-pointer"
                    onClick={() => handleImageClick(`data:image/png;base64,${item.image}`)}
                  >
                    รูปภาพ
                  </p>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-md mr-2"
            >
              ก่อนหน้า
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded-md ml-1"
            >
              ถัดไป
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Electricmeter;
