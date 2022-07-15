import React from 'react';
import { Line, Bar } from "react-chartjs-2";
import { useSelector} from "react-redux";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

function ChartTable() {
    const covidData = useSelector(state => state.covidData.covidData);
    const countryNames = useSelector(state=> state.covidData.countryNames);

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

        {
            covidData ? (<Bar data={{
                labels: ["Infected", "Deaths", "Active"],
                datasets:
                    [{
                        label: "People",
                        backgroundColor: ["rgb(99 102 241)", "rgb(74 222 128)","rgb(234 179 8)"],
                        hoverBackgroundColor: ["rgb(99 102 241)", "rgb(74 222 128)","rgb(234 179 8)"],
                        data: [covidData.confirmed.value,
                            covidData.deaths.value,
                            covidData.confirmed.value - covidData.deaths.value]
                    }]
            }}

            className="mx-96 my-5"
            />) : null
        }
        
    </div>
  )
}

export default ChartTable;