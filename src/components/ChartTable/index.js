import React, { useEffect } from 'react';
import { Line, Bar } from "react-chartjs-2";
import { useSelector , useDispatch} from "react-redux";
import { fetchDataDaily } from "../../redux/covidDataSlice";

//chart özellikleri için gerekli importlar
import {Chart,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,
  LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,
  LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip} from 'chart.js';

Chart.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,
  PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,
  RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip);

function ChartTable() {
    const dispatch = useDispatch();
    const covidData = useSelector(state => state.covidData.covidData);
    const dailyData = useSelector(state => state.covidData.dailyData);

    useEffect(() => {
      dispatch(fetchDataDaily());
    },[dispatch]);


    //daily api'dan cekilen bilgiler
    let labels = [], infected = [], deaths = [];

    if (dailyData !== "") {
      labels = dailyData.map((item) => item.reportDate);
      infected = dailyData.map((item) => item.totalConfirmed);
      deaths = dailyData.map((item) => item.deaths.total);
    }
  
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>

       {/* Bar chart******************** */}
        <p className='text-2xl mt-5'>Selected Country Results</p>
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
            className="max-w-3xl max-h-96 m-4"
            />) : null
        }


        {/* Line chart******************  */}
       <p className='text-2xl mt-5'>Daily Global Cases</p>
        {
           dailyData ? (<Line data={{
            labels: labels,
            datasets: [
              {
                data: infected,
                label: "Infected",
                backgroundColor: "blue",
              },
              {
                data: deaths,
                label: "Deaths",
                backgroundColor: "red",
              }],
          }}
          className="max-w-3xl max-h-96 m-4"
           /> ) : null
        }       
    </div>
  )
}

export default ChartTable;