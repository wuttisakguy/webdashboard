"use client";
import Layout from "@/layout";
import { FC, useEffect, useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { axiosConfig } from "@/utils/axiosConfig";


defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Chart: FC = () => {
  const [chartDataWater, setChartDataWater] = useState<any[]>([]);
  const [chartDataElect, setChartDataElect] = useState<any[]>([]);
  const [ChartDataWaterBillMonth, setChartDataWaterBillMonth] = useState<any[]>([]);
  const [ChartDataElectBillMonth, setChartDataElectBillMonth] = useState<any[]>([]);
  const [ChartDataWaterBillYear, setChartDataWaterBillYear] = useState<any[]>([]);
  const [ChartDataElectBillYear, setChartDataElectBillYear] = useState<any[]>([]);
 
  useEffect(() => {
    fetchChartDataWater();
    fetchChartDataElect();
    fetchChartDataWaterBillMonth();
    fetchChartDataElectBillMonth();
    fetchChartDataWaterBillYear();
    fetchChartDataElectBillYear();
  }, []);



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


  return (
    <Layout>
      <div className="w-full py-6 px-8 justify-start overflow-y-auto h-screen pb-24">
        <h1 className="text-black/80 text-[32px] font-[600] pb-3">Dashboard</h1>
        <div className="flex justify-between gap-3 pb-5">
          <div className="bg-white w-2/4 h-3/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              Watermeter
            </h1>
            <div className="w-full h-[400px] px-3 py-5">
              <Line
                data={{
                  labels: chartDataWater.filter(data => data.name === 'ชั้นที่ 1').map(data => data.time),
                  datasets: [
                    {
                      label: "ชั้นที่ 1",
                      data: chartDataWater.filter(data => data.name === 'ชั้นที่ 1').map(data => data.value.toString()),
                      backgroundColor: "#055C9D",
                      borderColor: "#055C9D",
                    },
                    {
                      label: "ชั้นที่ 2",
                      data: chartDataWater.filter(data => data.name === 'ชั้นที่ 2').map(data => data.value.toString()),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                  ],
                }}
                
              />
            </div>
          </div>
          <div className="bg-white w-2/4 h-4/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              Electricmeter
            </h1>
            <div className="w-full h-[400px] px-3 py-5">
              <Line
                data={{
                  labels: chartDataElect.filter(data => data.name === 'ชั้นที่ 1').map(data => data.time),
                  datasets: [
                    {
                      label: "ชั้นที่ 1",
                      data: chartDataElect.filter(data => data.name === 'ชั้นที่ 1').map(data => data.value.toString()),
                      backgroundColor: "#055C9D",
                      borderColor: "#055C9D",
                    },
                    {
                      label: "ชั้นที่ 2",
                      data: chartDataElect.filter(data => data.name === 'ชั้นที่ 2').map(data => data.value.toString()),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                    {
                      label: "ชั้นที่ 3",
                      data: chartDataElect.filter(data => data.name === 'ชั้นที่ 3').map(data => data.value.toString()),
                      backgroundColor: "#00A67E",
                      borderColor: "#00A67E",
                    },
                  ],
                }}
                
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <div className="bg-white w-full h-1/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
              ค่าใช้จ่ายรายเดือน
            </h1>
            <div className="w-full h-[400px] px-3 py-5">
            <Line
                  data={{
                    labels: ChartDataWaterBillMonth.map((data) => {
                      const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      return monthNames[data.month] + " " + data.year;
                    }),
                    datasets: [
                      {
                        label: "Elect",
                        data: ChartDataElectBillMonth.map((data) => data.total_bill),
                        backgroundColor: "#FFC700",
                        borderColor: "#FFC700",
                      },
                      {
                        label: "Water",
                        data: ChartDataWaterBillMonth.map((data) => data.total_bill),
                        backgroundColor: "#055C9D",
                        borderColor: "#055C9D",
                      },
                    ],
                  }}
                />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <div className="bg-white w-full h-1/5 rounded-md border border-slate-300 drop-shadow-lg">
            <h1 className="px-5 pb-2 pt-5 text-black/80 text-[24px] font-[600]">
            ค่าใช้จ่ายรายปี
            </h1>
            <div className="w-full h-[400px] px-3 py-5">
              <Line
                data={{
                  labels: ChartDataWaterBillYear.map((data) => data.year),
                  datasets: [
                    {
                      label: "Elect",
                      data: ChartDataElectBillYear.map((data) => data.total_bill),
                      backgroundColor: "#FFC700",
                      borderColor: "#FFC700",
                    },
                    {
                      label: "Water",
                      data: ChartDataWaterBillYear.map((data) => data.total_bill),
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
