import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



interface BarChartProps{
     horizontal?:boolean;
     data_1:number[];
     data_2:number[];
     title_1:string;
     title_2:string;
     bg_color_1:string;
     bg_color_2:string;
     labels?:string[];
}

export const BarChart=({horizontal=false,data_1=[],data_2=[],bg_color_1,bg_color_2,title_1,title_2,labels=months}:BarChartProps)=>{
   
    const data:ChartData<"bar",number[],string> = {
        labels,
        datasets: [
          {
            label: title_1,
            data: data_1,
            backgroundColor: bg_color_1,
            barThickness:"flex",
            barPercentage:1,
            categoryPercentage:0.5
          },
          {
            label: title_2,
            data: data_2,
            backgroundColor: bg_color_2,
            barThickness:"flex",
            barPercentage:1,
            categoryPercentage:0.5
          },
        ],
      };
   
    const options:ChartOptions<"bar"> = {
        responsive: true,
        indexAxis:horizontal?"y":"x",
        plugins: {
          legend: {
            display:false
          },
          title: {
            display: false,
          },
        },
        scales:{
            y:{
                beginAtZero:true,
                grid:{
                    display:false
                }
            },
            x:{
                grid:{
                    display:false
                }
            }
        }
      };
    return( <Bar options={options} data={data} />
)}