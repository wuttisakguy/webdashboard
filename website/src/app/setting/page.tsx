"use client";
import Layout from "@/layout";
import { FC, useState, useEffect } from "react";
import { axiosConfig } from "@/utils/axiosConfig";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Setting: FC = () => {
  const { register, setValue, watch, handleSubmit } = useForm();
  useEffect(() => {
    queryConfigElec();
    queryConfigWater();
  }, []);

  const queryConfigElec = async () => {
    try {
      const res = await axiosConfig.get("/api/configelectric");
      setValue("config_elec", res.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const queryConfigWater = async () => {
    try {
      const res = await axiosConfig.get("/api/configwater");
      setValue("config_water", res.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitConfigElec = async () => {
    const payload = {
      ft: Number(watch("config_elec.ft")),
      unit151_400: Number(watch("config_elec.unit151_400")),
      unit1_150: Number(watch("config_elec.unit1_150")),
      unit401: Number(watch("config_elec.unit401")),
    };

    try {
      await axiosConfig.put("/api/configelectric/update", payload);
      toast.success("อัปเดตข้อมูลสำเร็จ");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดไม่สามารถอัปเดตข้อมูลได้");
    }
  };

  const onSubmitConfigWater = async () => {
    const payload = {
      waterunit_0_10: Number(watch("config_water.waterunit_0_10")),
      waterunit_11_20: Number(watch("config_water.waterunit_11_20")),
      waterunit_21_30: Number(watch("config_water.waterunit_21_30")),
      waterunit_31_40: Number(watch("config_water.waterunit_31_40")),
      waterunit_41_50: Number(watch("config_water.waterunit_41_50")),
      waterunit_51_60: Number(watch("config_water.waterunit_51_60")),
      waterunit_61_80: Number(watch("config_water.waterunit_61_80")),
      waterunit_81_100: Number(watch("config_water.waterunit_81_100")),
      waterunit_101_120: Number(watch("config_water.waterunit_101_120")),
      waterunit_121_160: Number(watch("config_water.waterunit_121_160")),
      waterunit_161_200: Number(watch("config_water.waterunit_161_200")),
      waterunit_201: Number(watch("config_water.waterunit_201")),
    };

    try {
      await axiosConfig.put("/api/configwater/update", payload);
      toast.success("อัปเดตข้อมูลสำเร็จ");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดไม่สามารถอัปเดตข้อมูลได้");
    }
  };

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
            {watch("config_elec") && (
              <form onSubmit={handleSubmit(onSubmitConfigElec)}>
                <div className="w-full mb-3">
                  <label className="text-[#737373] text-[15px] font-[400]">
                    FT
                  </label>
                  <input
                    className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                    placeholder="ชื่อ"
                    {...register("config_elec.ft", { required: "กรอกข้อมูล" })}
                    defaultValue={watch("config_elec.ft")}
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
                    {...register("config_elec.unit151_400", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_elec.unit151_400")}
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
                    {...register("config_elec.unit1_150", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_elec.unit1_150")}
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
                    {...register("config_elec.unit401", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_elec.unit401")}
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
              </form>
            )}
          </div>
        </div>
        <div className="border-[1px] border-[#e6e6e6] rounded-[9px] py-2 px-8 bg-white my-5 m-auto w-[100%] overflow-x-auto">
          <div className="flex p-3 gap-3 border-b-2 border-gray-300 w-[92em] ">
            <h1 className="text-black/80 text-[22px] font-[600]">
              Config Watermeter
            </h1>
          </div>
          <div className="mt-4">
            {watch("config_water") && (
              <form onSubmit={handleSubmit(onSubmitConfigWater)}>
                <div className="w-full mb-3">
                  <label className="text-[#737373] text-[15px] font-[400]">
                    waterunit_0_10
                  </label>
                  <input
                    className="w-full py-2 px-4 rounded-md border-[1px] border-[#595959]/50 mt-2 outline-none"
                    placeholder="ชื่อ"
                    {...register("config_water.waterunit_0_10", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_0_10")}
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
                    {...register("config_water.waterunit_11_20", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_11_20")}
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
                    {...register("config_water.waterunit_21_30", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_21_30")}
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
                    {...register("config_water.waterunit_31_40", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_31_40")}
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
                    {...register("config_water.waterunit_41_50", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_41_50")}
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
                    {...register("config_water.waterunit_51_60", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_51_60")}
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
                    {...register("config_water.waterunit_61_80", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_61_80")}
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
                    {...register("config_water.waterunit_81_100", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_81_100")}
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
                    {...register("config_water.waterunit_101_120", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_101_120")}
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
                    {...register("config_water.waterunit_121_160", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_121_160")}
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
                    {...register("config_water.waterunit_161_200", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_161_200")}
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
                    {...register("config_water.waterunit_201", {
                      required: "กรอกข้อมูล",
                    })}
                    defaultValue={watch("config_water.waterunit_201")}
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
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
