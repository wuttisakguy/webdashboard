"use client";
import Layout from "@/layout";
import { FC, useState, useEffect } from "react";
import { axiosConfig } from "@/utils/axiosConfig";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

const Setting: FC = () => {
  return (
    <Layout>
      <div className="w-full py-6 px-8 justify-start overflow-y-auto h-screen pb-24">
        <h1 className="text-black/80 text-[32px] font-[600]">ตั้งค่า</h1>
        <div className="border-[1px] border-[#e6e6e6] rounded-[9px] py-2 px-8 bg-white my-5 m-auto w-[100%] overflow-x-auto">
          <div className="flex  p-3 gap-3 border-b-2 border-gray-300 w-[92em] ">
            <h1 className="text-black/80 text-[22px] font-[600]">
              Config Electricmeter
            </h1>
          </div>
          <div className="mt-4">
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                FT
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                unit151_400
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                unit1_150
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                unit401
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="mt-5 bg-white pt-5 border-t-[1px] border-[#B8B8B8]">
              <button
                type="submit"
                className="w-full duration-300 hover:bg-green-600 text-white text-[16px] font-[400] rounded-md bg-green-500  py-3 px-4 flex justify-center items-center gap-3"
              >
                <p>บันทึกข้อมูล</p>
              </button>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#e6e6e6] rounded-[9px] py-2 px-8 bg-white my-5 m-auto w-[100%] overflow-x-auto">
          <div className="flex p-3 gap-3 border-b-2 border-gray-300 w-[92em] ">
            <h1 className="text-black/80 text-[22px] font-[600]">
              Config Watermeter
            </h1>
          </div>
          <div className="mt-4">
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_0_10
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_11_20
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_21_30
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_31_40
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_41_50
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_51_60
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_61_80
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_81_100
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_101_120
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_121_160
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_161_200
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="w-full mb-3">
              <label className="text-[#737373] text-[15px] font-[400]">
                waterunit_201
              </label>
              <input
                className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                placeholder="ชื่อ"
                type="text"
              />
            </div>
            <div className="mt-5 bg-white pt-5 border-t-[1px] border-[#B8B8B8]">
              <button
                type="submit"
                className="w-full duration-300 hover:bg-green-600 text-white text-[16px] font-[400] rounded-md bg-green-500  py-3 px-4 flex justify-center items-center gap-3"
              >
                <p>บันทึกข้อมูล</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
