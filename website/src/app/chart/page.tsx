"use client";
import Layout from "@/layout";
import { FC, useEffect, useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import "chart.js/auto";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import { axiosConfig } from "@/utils/axiosConfig";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart: FC = () => {
  const [chartDataWater, setChartDataWater] = useState<any[]>([]);
  const [chartDataElect, setChartDataElect] = useState<any[]>([]);
  const [ChartDataWaterBillMonth, setChartDataWaterBillMonth] = useState<any[]>([]);
  const [ChartDataElectBillMonth, setChartDataElectBillMonth] = useState<any[]>([]);
  const [ChartDataElectBillUnitPerFloor, setChartDataElectBillUnitPerFloor] =useState<any[]>([]);
  const [ChartDataWaterBillUnitPerFloor, setChartDataWaterBillUnitPerFloor] =useState<any[]>([]);
  const [ChartDataWaterBillYear, setChartDataWaterBillYear] = useState<any[]>([]);
  const [ChartDataElectBillYear, setChartDataElectBillYear] = useState<any[]>([]);
  const [ChartDataWaterBillMonthChart, setChartDataWaterBillMonthChart] =useState<any[]>([]);
  const [ChartDatElectBillMonthChart, setChartDataElectBillMonthChart] =useState<any[]>([]);
  
  const [waterrmeter, setWatermeter] = useState([]);
  const [electricrmeter, setElectricrmeter] = useState([])

  useEffect(() => {
    fetchChartDataWater();
    fetchChartDataElect();
    fetchChartDataWaterBillMonth();
    fetchChartDataElectBillMonth();
    fetchChartDataWaterBillYear();
    fetchChartDataElectBillYear();
    fetchChartDataWaterBillMonthChart();
    fetchChartDataElectBillMonthChart();
    fetchChartDataElectBillUnitPerFloor();
    fetchChartDataWaterBillUnitPerFloor();
    fetchElectricrmeter();
    fetchWatermeter();
  }, []);

  const fetchElectricrmeter = async () => {
    try {
      const response = await axiosConfig.get("/api/datatable_elect");
      setElectricrmeter(response.data);
      console.log("Chart data table elect:", response.data);
    } catch (error) {
      console.error("Error fetching chart data table elect:", error);
    }
  };

  const fetchWatermeter = async () => {
    try {
      const response = await axiosConfig.get("/api/datatable_water");
      setWatermeter(response.data);
      console.log("Chart data table Water:", response.data);
    } catch (error) {
      console.error("Error fetching chart data table Water:", error);
    }
  };

  const fetchChartDataWater = async () => {
    try {
      const response = await axiosConfig.get("/api/data_chart_water");
      setChartDataWater(response.data);
      console.log("Chart data Water:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Water:", error);
    }
  };

  const fetchChartDataElect = async () => {
    try {
      const response = await axiosConfig.get("/api/data_chart_elect");
      setChartDataElect(response.data);
      console.log("Chart data Elect:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Elect:", error);
    }
  };

  const fetchChartDataElectBillMonth = async () => {
    try {
      const response = await axiosConfig.get("/api/data_electricbillmonth");
      setChartDataElectBillMonth(response.data);
      console.log("Chart data Elect Bill Month:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Elect Bill Month:", error);
    }
  };

  const fetchChartDataWaterBillMonth = async () => {
    try {
      const response = await axiosConfig.get("/api/data_waterbillmonth");
      setChartDataWaterBillMonth(response.data);
      console.log("Chart data Water Bill Month:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Water Bill Month:", error);
    }
  };

  const fetchChartDataElectBillUnitPerFloor = async () => {
    try {
      const response = await axiosConfig.get(
        "/api/data_electricbillunitperfloor"
      );
      setChartDataElectBillUnitPerFloor(response.data);
      console.log("Chart data Elect Bill UnitPerFloor:", response.data);
    } catch (error) {
      console.error(
        "Error fetching chart data Elect Bill UnitPerFloor:",
        error
      );
    }
  };

  const fetchChartDataWaterBillUnitPerFloor = async () => {
    try {
      const response = await axiosConfig.get(
        "/api/data_watericbillunitperfloor"
      );
      setChartDataWaterBillUnitPerFloor(response.data);
      console.log("Chart data Water Bill UnitPerFloor:", response.data);
    } catch (error) {
      console.error(
        "Error fetching chart data Water Bill UnitPerFloor:",
        error
      );
    }
  };

  const fetchChartDataElectBillYear = async () => {
    try {
      const response = await axiosConfig.get("/api/data_electricbillyear");
      setChartDataElectBillYear(response.data);
      console.log("Chart data Elect Bill Year:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Elect Bill Year:", error);
    }
  };

  const fetchChartDataWaterBillYear = async () => {
    try {
      const response = await axiosConfig.get("/api/data_waterbillyear");
      setChartDataWaterBillYear(response.data);
      console.log("Chart data Water Bill Year:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Water Bill Year:", error);
    }
  };

  const fetchChartDataElectBillMonthChart = async () => {
    try {
      const response = await axiosConfig.get(
        "/api/data_electricbillmonthChart"
      );
      setChartDataElectBillMonthChart(response.data);
      console.log("Chart data Elect Bill Month Chart:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Elect Bill Month Chart:", error);
    }
  };

  const fetchChartDataWaterBillMonthChart = async () => {
    try {
      const response = await axiosConfig.get("/api/data_waterbillmonthChart");
      setChartDataWaterBillMonthChart(response.data);
      console.log("Chart data Water Bill Month Chart:", response.data);
    } catch (error) {
      console.error("Error fetching chart data Water Bill Month Chart:", error);
    }
  };

 
  const [selectedPosition, setSelectedPosition] = useState("ทั้งหมด");
  const [selectedPositionWater, setSelectedPositionWater] = useState("ทั้งหมด");
 

  return (
    <Layout>
      <div className="w-full py-6 px-8 justify-start overflow-y-auto h-screen pb-24">
        <h1 className="text-black/80 text-[32px] font-[600] pb-3">Dashboard</h1>
        <div className="flex justify-between gap-3">
          <div className="bg-white w-2/4 h-3/5 rounded-md border border-slate-300 drop-shadow-lg">
            <div className="flex justify-between">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                มิเตอร์น้ำ
              </h1>
              <h1 className="px-5 pb-2 pt-5 text-black/50 text-[16px] font-[600]">
                วันนี้
              </h1>
            </div>

            <div className="w-full h-[300px] px-3 py-5">
              <Line
                data={{
                  labels: chartDataWater
                    .filter((data) => data.name === "ชั้นที่ 1")
                    .map((data) => data.time),
                  datasets: [
                    {
                      label: "ชั้นที่ 1",
                      data: chartDataWater
                        .filter((data) => data.name === "ชั้นที่ 1")
                        .map((data) => data.value.toString()),
                      backgroundColor: "#055C9D",
                      borderColor: "#055C9D",
                    },
                    {
                      label: "ชั้นที่ 2",
                      data: chartDataWater
                        .filter((data) => data.name === "ชั้นที่ 2")
                        .map((data) => data.value.toString()),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="bg-white w-2/4 h-4/5 rounded-md border border-slate-300 drop-shadow-lg">
            <div className="flex justify-between">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                มิเตอร์ไฟ
              </h1>
              <h1 className="px-5 pb-2 pt-5 text-black/50 text-[16px] font-[600]">
                วันนี้
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              <Line
                data={{
                  labels: chartDataElect
                    .filter((data) => data.name === "ชั้นที่ 1")
                    .map((data) => data.time),
                  datasets: [
                    {
                      label: "ชั้นที่ 1",
                      data: chartDataElect
                        .filter((data) => data.name === "ชั้นที่ 1")
                        .map((data) => data.value.toString()),
                      backgroundColor: "#055C9D",
                      borderColor: "#055C9D",
                    },
                    {
                      label: "ชั้นที่ 2",
                      data: chartDataElect
                        .filter((data) => data.name === "ชั้นที่ 2")
                        .map((data) => data.value.toString()),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                    {
                      label: "ชั้นที่ 3",
                      data: chartDataElect
                        .filter((data) => data.name === "ชั้นที่ 3")
                        .map((data) => data.value.toString()),
                      backgroundColor: "#00A67E",
                      borderColor: "#00A67E",
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5 gap-3">
        <div className="bg-white w-[25%] h-full rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              ค่าใช้จ่ายรายเดือนต่อชั้น
            </h1>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                ไฟ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              <Doughnut
                data={{
                  labels: ChartDataElectBillMonth.filter(
                    (data) => data.year === 2024
                  ).map((data) => {
                    const monthNames = [
                      "",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    return monthNames[data.month];
                  }),
                  datasets: [
                    {
                      label: "ชั้น 1 ค่าใช้จ่าย",
                      data: ChartDataElectBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 1"
                      ).map((data) => data.total_bill),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                    {
                      label: "ชั้น 2 ค่าใช้จ่าย",
                      data: ChartDataElectBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 2"
                      ).map((data) => data.total_bill),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                  ],
                }}
              />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                น้ำ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              <Doughnut
                data={{
                  labels: ChartDataWaterBillMonth.filter(
                    (data) => data.year === 2024
                  ).map((data) => {
                    const monthNames = [
                      "",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    return monthNames[data.month];
                  }),
                  datasets: [
                    {
                      label: "ชั้น 1 ค่าใช้จ่าย",
                      data: ChartDataWaterBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 1"
                      ).map((data) => data.total_bill),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                    {
                      label: "ชั้น 2 ค่าใช้จ่าย",
                      data: ChartDataWaterBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 2"
                      ).map((data) => data.total_bill),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="bg-white w-[50%] h-2/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              ค่าใช้จ่ายรายเดือน
            </h1>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                น้ำ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              <Bar
                data={{
                  labels: ChartDataWaterBillMonth.filter(
                    (data) => data.year === 2024
                  ).map((data) => {
                    const monthNames = [
                      "",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    return monthNames[data.month];
                  }),
                  datasets: [
                    {
                      label: "2024",
                      data: ChartDataWaterBillMonth.filter(
                        (data) => data.year === 2024
                      ).map((data) => data.total_bill),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                    {
                      label: "2025",
                      data: ChartDataWaterBillMonth.filter(
                        (data) => data.year === 2025
                      ).map((data) => data.total_bill),
                      backgroundColor: "#055C9D",
                      borderColor: "#055C9D",
                    },
                    {
                      label: "2026",
                      data: ChartDataWaterBillMonth.filter(
                        (data) => data.year === 2026
                      ).map((data) => data.total_bill),
                      backgroundColor: "#00A67E",
                      borderColor: "#00A67E",
                    },
                  ],
                }}
              />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                ไฟ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              <Bar
                data={{
                  labels: ChartDataElectBillMonth.filter(
                    (data) => data.year === 2024
                  ).map((data) => {
                    const monthNames = [
                      "",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    return monthNames[data.month];
                  }),
                  datasets: [
                    {
                      label: "2024",
                      data: ChartDataElectBillMonth.filter(
                        (data) => data.year === 2024
                      ).map((data) => data.total_bill),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                    {
                      label: "2025",
                      data: ChartDataElectBillMonth.filter(
                        (data) => data.year === 2025
                      ).map((data) => data.total_bill),
                      backgroundColor: "#055C9D",
                      borderColor: "#055C9D",
                    },
                    {
                      label: "2026",
                      data: ChartDataElectBillMonth.filter(
                        (data) => data.year === 2026
                      ).map((data) => data.total_bill),
                      backgroundColor: "#00A67E",
                      borderColor: "#00A67E",
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="bg-white w-[25%] h-2/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              ยูนิตที่ใช้รายเดือนต่อชั้น
            </h1>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                น้ำ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              <Doughnut
                data={{
                  labels: ChartDataElectBillMonth.filter(
                    (data) => data.year === 2024
                  ).map((data) => {
                    const monthNames = [
                      "",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    return monthNames[data.month];
                  }),
                  datasets: [
                    {
                      label: "ชั้น 1 จำนวนยูนิต",
                      data: ChartDataWaterBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 1"
                      ).map((data) => data.unit),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                    {
                      label: "ชั้น 2 จำนวนยูนิต",
                      data: ChartDataWaterBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 2"
                      ).map((data) => data.unit),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                  ],
                }}
              />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                ไฟ
              </h1>
            </div>
            <div className="w-[100%] h-[300px] px-3 py-5">
              <Doughnut
                data={{
                  labels: ChartDataElectBillMonth.filter(
                    (data) => data.year === 2024
                  ).map((data) => {
                    const monthNames = [
                      "",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    return monthNames[data.month];
                  }),
                  datasets: [
                    {
                      label: "ชั้น 1 จำนวนยูนิต",
                      data: ChartDataElectBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 1"
                      ).map((data) => data.unit),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                    {
                      label: "ชั้น 2 จำนวนยูนิต",
                      data: ChartDataElectBillUnitPerFloor.filter(
                        (data) => data.year === 2024 && data.name === "ชั้น 2"
                      ).map((data) => data.unit),
                      backgroundColor: [
                        "#FFC700",
                        "#Ff5733",
                        "#d1c4e9",
                        "#00bcd4",
                        "#dbbc8c",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
          
        </div>
        <div className="flex justify-center pt-5 gap-3">
          
          <div className="w-full h-1/5">
            <div className="bg-white w-[100%] h-2/5 rounded-md border border-slate-300 drop-shadow-lg mb-5">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                ค่าใช้จ่ายไฟรายเดือน
              </h1>

              <div className="flex justify-start items-center gap-4 2xl:w-[88%] xl:w-[86%] lg:w-[80%] flex-wrap mt-3 px-5 overflow-y-auto">
                <div className="flex justify-start items-center  2xl:w-[17%] xl:w-[20%] lg:w-[28%] w-[35%] flex-wrap">
                  <Select
                    value={{ label: selectedPosition, value: selectedPosition }}
                    onChange={(selectedOption: any) =>
                      setSelectedPosition(selectedOption.value)
                    }
                    options={[
                      { label: "ทั้งหมด", value: "ทั้งหมด" },
                      { label: "ชั้น 1", value: "ชั้น 1" },
                      { label: "ชั้น 2", value: "ชั้น 2" },
                      { label: "ชั้น 3", value: "ชั้น 3" },
                    ]}
                  />
                  
                </div>
                <div className="border-[1px] border-[#e6e6e6] rounded-[9px] py-2 px-8 bg-white my-5 m-auto w-full overflow-x-auto overflow-y-auto ">
                  <div className="flex w-full">
                    <h1 className="w-[50%]">เดือน</h1>
                    <h1 className="w-[50%]">ปี</h1>
                    <h1 className="w-[50%]">ชั้น</h1>
                    <h2 className="w-[50%]">ค่าใช้จ่าย</h2>
                    <h3 className="w-[50%]">ค่า ft</h3>
                    <h4 className="w-[50%]">ค่า unit</h4>
                  </div>
                  <div className="w-full">
                  {electricrmeter
              ?.filter((item: any) => {
                if (selectedPosition === "ทั้งหมด") return true;
                return item.name === selectedPosition;
              })
              .map((item: any, idx: any) => (
                <div
                  key={idx}
                  className="my-2 px-2 flex justify-start items-center  w-auto rounded-lg hover:bg-blue-200 overflow-y-auto h-[20%]"
                >
                  <p className="text-left w-[48%]">{item.month}</p>
                  <p className="text-left w-[50%]">{item.year}</p>
                  <p className="text-left w-[50%]">{item.name}</p>
                  <p className="text-left w-[51%]">{item.bill}</p>
                  <p className="text-left w-[50%]">{item.ft}</p>
                  <p className="text-left w-[49%]">{item.unit}</p>
                </div>
              ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-[100%] h-2/5 rounded-md border border-slate-300 drop-shadow-lg">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                ค่าใช้จ่ายน้ำรายเดือน
              </h1>
              <div className="flex justify-start items-center gap-4 2xl:w-[88%] xl:w-[86%] lg:w-[80%] flex-wrap mt-3 px-5">
                <div className="flex justify-start items-center  2xl:w-[17%] xl:w-[20%] lg:w-[28%] w-[35%] flex-wrap">
                  <Select
                    value={{ label: selectedPositionWater, value: selectedPositionWater }}
                    onChange={(selectedPositionWater: any) =>
                      setSelectedPositionWater(selectedPositionWater.value)
                    }
                    options={[
                      { label: "ทั้งหมด", value: "ทั้งหมด" },
                      { label: "ชั้น 1", value: "ชั้น 1" },
                      { label: "ชั้น 2", value: "ชั้น 2" },
                      { label: "ชั้น 3", value: "ชั้น 3" },
                    ]}
                  />
                </div>
                <div className="border-[1px] border-[#e6e6e6] rounded-[9px] py-2 px-8 bg-white my-5 m-auto w-full overflow-x-auto overflow-y-auto h-[50%]">
                  <div className="flex w-full">
                    <h1 className="w-[50%]">เดือน</h1>
                    <h1 className="w-[50%]">ปี</h1>
                    <h1 className="w-[50%]">ชั้น</h1>
                    <h2 className="w-[51%]">ค่าใช้จ่าย</h2>
                    <h4 className="w-[52%]">ค่า unit</h4>
                  </div>
                  <div className="w-full">
                  {waterrmeter
              ?.filter((item: any) => {
                if (selectedPositionWater === "ทั้งหมด") return true;
                return item.name === selectedPositionWater;
              })
              .map((item: any, idx: any) => (
                <div
                  key={idx}
                  className="my-2 px-2 flex justify-start items-center  w-auto rounded-lg hover:bg-blue-200 overflow-y-auto h-[20%]"
                >
                  <p className="text-left w-[49%]">{item.month}</p>
                  <p className="text-left w-[50%]">{item.year}</p>
                  <p className="text-left w-[51%]">{item.name}</p>
                  <p className="text-left w-[51%]">{item.bill}</p>
                  <p className="text-left w-[50%]">{item.unit}</p>
                </div>
              ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5 gap-3">
          <div className="bg-white w-[100%] h-1/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              ค่าใช้จ่ายรายปี
            </h1>
            <div className="w-full h-[300px] px-3 py-5">
              <Bar
                data={{
                  labels: ChartDataWaterBillYear.map((data) => data.year),
                  datasets: [
                    {
                      label: "Elect",
                      data: ChartDataElectBillYear.map(
                        (data) => data.total_bill
                      ),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                    {
                      label: "Water",
                      data: ChartDataWaterBillYear.map(
                        (data) => data.total_bill
                      ),
                      backgroundColor: "#055C9D",
                      borderColor: "#055C9D",
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chart;
