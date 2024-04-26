"use client";
import Layout from "@/layout";
import { FC, useEffect, useState } from "react";
import { Chart as ChartJS, Colors, defaults } from "chart.js/auto";
import "chart.js/auto";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import { axiosConfig } from "@/utils/axiosConfig";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { randomcolour } from "@/utils/colour";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart: FC = () => {
  const [chartDataWater, setChartDataWater] = useState<any>([]);
  const [chartDataElect, setChartDataElect] = useState<any>([]);
  const [ChartDataWaterBillMonth, setChartDataWaterBillMonth] = useState<any>(
    []
  );
  const [ChartDataElectBillMonth, setChartDataElectBillMonth] = useState<any>(
    []
  );
  // const [ChartDataElectBillUnitPerFloor, setChartDataElectBillUnitPerFloor] =useState<any[]>([]);
  // const [ChartDataWaterBillUnitPerFloor, setChartDataWaterBillUnitPerFloor] =useState<any[]>([]);
  const [ChartDataWaterBillYear, setChartDataWaterBillYear] = useState<any>([]);
  const [ChartDataElectBillYear, setChartDataElectBillYear] = useState<any>([]);
  const [ChartDataWaterBillMonthChart, setChartDataWaterBillMonthChart] =
    useState<any[]>([]);
  const [ChartDatElectBillMonthChart, setChartDataElectBillMonthChart] =
    useState<any>([]);

  const [waterrmeter, setWatermeter] = useState([]);
  const [electricrmeter, setElectricrmeter] = useState([]);

  const [configelectric, setConfigelectric] = useState([]);
  const [configwater, setConfigwater] = useState([]);

  useEffect(() => {
    fetchChartDataWater();
    fetchChartDataElect();
    fetchChartDataWaterBillMonth();
    fetchChartDataElectBillMonth();
    fetchChartDataWaterBillYear();
    fetchChartDataElectBillYear();
    fetchChartDataWaterBillMonthChart();
    fetchChartDataElectBillMonthChart();
    fetchElectricrmeter();
    fetchWatermeter();
    fetchConfigelectric();
    fetchConfigwater();
  }, []);

  const fetchConfigelectric = async () => {
    try {
      const response = await axiosConfig.get("/api/configelectric");
      setElectricrmeter(response.data);
      console.log("configelect:", response.data);
    } catch (error) {
      console.error("Error fetching configelect:", error);
    }
  };

  const fetchConfigwater = async () => {
    try {
      const response = await axiosConfig.get("/api/configwater");
      setElectricrmeter(response.data);
      console.log("configwater:", response.data);
    } catch (error) {
      console.error("configwater:", error);
    }
  };

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
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setChartDataWater({
          category: categorycolour,
          data: response.data.data,
        });
        console.log("Chart data Water:", response.data);
      }
    } catch (error) {
      console.error("Error fetching chart data Water:", error);
    }
  };

  const fetchChartDataElect = async () => {
    try {
      const response = await axiosConfig.get("/api/data_chart_elect");
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setChartDataElect({
          category: categorycolour,
          data: response.data.data,
        });
        console.log("Chart data Elect:", response.data);
      }
    } catch (error) {
      console.error("Error fetching chart data Elect:", error);
    }
  };

  const fetchChartDataElectBillMonth = async () => {
    try {
      const response = await axiosConfig.get("/api/data_electricbillmonth");
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setChartDataElectBillMonth({
          category: categorycolour,
          data: response.data.data,
        });
        console.log("chart data Elect Bill Month :", response.data);
      }
    } catch (error) {
      console.error("Error fetching chart data Elect Bill Month:", error);
    }
  };

  const fetchChartDataWaterBillMonth = async () => {
    try {
      const response = await axiosConfig.get("/api/data_waterbillmonth");
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setChartDataWaterBillMonth({
          category: categorycolour,
          data: response.data.data,
        });
        console.log("chart data water Bill Month :", response.data);
      }
    } catch (error) {
      console.error("Error fetching chart data Water Bill Month:", error);
    }
  };

  const fetchChartDataElectBillYear = async () => {
    try {
      const response = await axiosConfig.get("/api/data_electricbillyear");
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setChartDataElectBillYear({
          category: categorycolour,
          data: response.data.data,
        });
        console.log("chart data Elect Bill Year:", response.data);
      }
    } catch (error) {
      console.error("Error fetching chart data Elect Bill Year:", error);
    }
  };

  const fetchChartDataWaterBillYear = async () => {
    try {
      const response = await axiosConfig.get("/api/data_waterbillyear");
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setChartDataWaterBillYear({
          category: categorycolour,
          data: response.data.data,
        });
        console.log("chart data Water Bill Year:", response.data);
      }
    } catch (error) {
      console.error("Error fetching chart data Water Bill Year:", error);
    }
  };

  const fetchChartDataElectBillMonthChart = async () => {
    try {
      const response = await axiosConfig.get(
        "/api/data_electricbillmonthChart"
      );
      if (response.data) {
        const categorycolour = response.data?.category.map((category: any) => ({
          name: category,
          colour: randomcolour(),
        }));
        setChartDataElectBillMonthChart({
          category: categorycolour,
          data: response.data.data,
        });
        console.log("chart data Elect Bill Month Chart:", response.data);
      }
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
  const repeatTimes = Array.from(
    new Set(chartDataWater?.data?.map((data: any) => data.time))
  );
  repeatTimes.sort();

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
              {chartDataWater.data !== undefined && (
                <Line
                  data={{
                    labels: repeatTimes,
                    datasets: chartDataWater?.category?.map((category: any) => {
                      const filterdata = chartDataWater.data.filter(
                        (data: any) => data.name === category.name
                      );

                      let tempValue = 0;
                      const dataPoints = repeatTimes.map((time) => {
                        const dataPoint = filterdata.find(
                          (data: any) =>
                            data.time === time && data.name === category.name
                        );

                        if (dataPoint === undefined) {
                          return tempValue;
                        } else {
                          tempValue = dataPoint.value;
                          return dataPoint.value;
                        }
                      });
                      
                      return {
                        label: category.name,
                        data: dataPoints,
                        backgroundColor: category.colour,
                        borderColor: category.colour,
                      };
                    }),
                  }}
                />
              )}
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
              {chartDataElect.data !== undefined && (
                <Line
                  data={{
                    labels: chartDataElect?.data?.map((data: any) => data.time),
                    datasets: chartDataElect?.category?.map((category: any) => {
                      const filterdata = chartDataElect.data.filter(
                        (data: any) => data.name === category.name
                      );
                      const colour = randomcolour();
                      return {
                        label: category.name,
                        data: filterdata.map((data: any) =>
                          data.value.toString()
                        ),
                        backgroundColor: category.colour,
                        borderColor: category.colour,
                      };
                    }),
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5 gap-3">
          <div className="bg-white w-[100%] h-2/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              ค่าใช้จ่ายรายเดือน
            </h1>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                น้ำ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              {ChartDataWaterBillMonth.data !== undefined && (
                <Bar
                  data={{
                    labels: ChartDataWaterBillMonth?.data
                      ?.reduce((uniqueMonths: string[], data: any) => {
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
                        const monthLabel = monthNames[data.month];
                        if (!uniqueMonths.includes(monthLabel)) {
                          uniqueMonths.push(monthLabel);
                        }
                        return uniqueMonths;
                      }, [])
                      ?.sort((a: any, b: any) => {
                        const monthNames = [
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
                        return monthNames.indexOf(a) - monthNames.indexOf(b);
                      }),
                    datasets: ChartDataWaterBillMonth?.category?.map(
                      (category: any) => {
                        const filterdata = ChartDataWaterBillMonth.data.filter(
                          (data: any) => data.year === category.name
                        );
                        const colour = randomcolour();
                        return {
                          label: category.name?.toString(),
                          data: filterdata.map((data: any) =>
                            data.total_bill.toString()
                          ),
                          backgroundColor: category.colour,
                          borderColor: category.colour,
                        };
                      }
                    ),
                  }}
                />
              )}
            </div>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                ไฟ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              {ChartDataElectBillMonth.data !== undefined && (
                <Bar
                  data={{
                    labels: ChartDataElectBillMonth?.data
                      ?.reduce((uniqueMonths: string[], data: any) => {
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
                        const monthLabel = monthNames[data.month];
                        if (!uniqueMonths.includes(monthLabel)) {
                          uniqueMonths.push(monthLabel);
                        }
                        return uniqueMonths;
                      }, [])
                      ?.sort((a: any, b: any) => {
                        const monthNames = [
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
                        return monthNames.indexOf(a) - monthNames.indexOf(b);
                      }),
                    datasets: ChartDataElectBillMonth?.category?.map(
                      (category: any) => {
                        const filterdata = ChartDataElectBillMonth.data.filter(
                          (data: any) => data.year === category.name
                        );
                        const colour = randomcolour();
                        return {
                          label: category.name?.toString(),
                          data: filterdata.map((data: any) =>
                            data.total_bill.toString()
                          ),
                          backgroundColor: category.colour,
                          borderColor: category.colour,
                        };
                      }
                    ),
                  }}
                />
              )}
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
                      { label: "ชั้นที่ 1", value: "ชั้นที่ 1" },
                      { label: "ชั้นที่ 2", value: "ชั้นที่ 2" },
                      { label: "ชั้นที่ 3", value: "ชั้นที่ 3" },
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
                    value={{
                      label: selectedPositionWater,
                      value: selectedPositionWater,
                    }}
                    onChange={(selectedPositionWater: any) =>
                      setSelectedPositionWater(selectedPositionWater.value)
                    }
                    options={[
                      { label: "ทั้งหมด", value: "ทั้งหมด" },
                      { label: "ชั้นที่ 1", value: "ชั้นที่ 1" },
                      { label: "ชั้นที่ 2", value: "ชั้นที่ 2" },
                      { label: "ชั้นที่ 3", value: "ชั้นที่ 3" },
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
          <div className="bg-white w-[100%] h-2/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              ค่าใช้จ่ายรายปี
            </h1>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                น้ำ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              {ChartDataWaterBillYear.data !== undefined && (
                <Bar
                  data={{
                    labels: ChartDataWaterBillYear?.data?.map(
                      (data: any) => data.year
                    ),
                    datasets: [
                      {
                        label: "ข้อมูลการใช้น้ำ",
                        data: ChartDataWaterBillYear?.data?.map((data: any) => {
                          const yearData = ChartDataWaterBillYear?.data?.find(
                            (item: any) => item.year === data.year
                          );
                          return yearData ? yearData.total_bill : null;
                        }),
                        backgroundColor: "#000080",
                        borderColor: "#000080",
                      },
                    ],
                  }}
                />
              )}
            </div>
            <div className="flex justify-center items-center">
              <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
                ไฟ
              </h1>
            </div>
            <div className="w-full h-[300px] px-3 py-5">
              {ChartDataElectBillYear.data !== undefined && (
                <Bar
                  data={{
                    labels: ChartDataElectBillYear?.data?.map(
                      (data: any) => data.year
                    ),
                    datasets: [
                      {
                        label: "ข้อมูลการใช้ไฟ",
                        data: ChartDataElectBillYear?.data?.map((data: any) => {
                          const yearData = ChartDataElectBillYear?.data?.find(
                            (item: any) => item.year === data.year
                          );
                          return yearData ? yearData.total_bill : null;
                        }),
                        backgroundColor: "#FFD700",
                        borderColor: "#FFD700",
                      },
                    ],
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chart;
