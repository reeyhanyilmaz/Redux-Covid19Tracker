import React, { useEffect } from 'react';
import { fetchCovidData } from '../../redux/covidDataSlice';
import { useSelector, useDispatch } from 'react-redux';
import CountUp from "react-countup";

function Cards() {
  const dispatch = useDispatch();

  const covidData = useSelector(state=> state.covidData.covidData);
  const countryNames = useSelector(state=> state.covidData.countryNames);

  useEffect(() => {
    dispatch(fetchCovidData(countryNames));
  }, [dispatch, countryNames]);

  return (
    <>
      {covidData !== "" && (
        <div className="flex flex-row gap-4 mx-10 mt-8 ">
          <div className="basis-1/3 bg-gradient-to-r from-indigo-500 rounded-lg w-8 text-white py-6 hover:-translate-y-6">
            <p className='font-bold text-3xl py-3'>Infected</p>
            <CountUp start={0} end={covidData.confirmed.value} duration={1} separator="," className='text-5xl py-10'/>
            <div className='text-xl py-3'>
                  <p>Last Updated: </p>
                  <i> { new Date(covidData.lastUpdate).toLocaleString()}</i>
              </div>             
          </div>

          <div className="basis-1/3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg w-8 text-white py-6 hover:-translate-y-6">
            <p className='font-bold text-3xl py-3'>Deaths</p>
            <CountUp start={0} end={covidData.deaths.value} duration={1} separator="," className='text-5xl'/>
            <div className='text-xl py-3'>
                  <p>Last Updated: </p>
                  <i> { new Date(covidData.lastUpdate).toLocaleString()}</i>
              </div>   
          </div>

          <div className="basis-1/3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg w-8 text-white py-6 hover:-translate-y-6">
            <p className='font-bold text-3xl py-3'>Active</p>
            <CountUp start={0} end={(covidData.confirmed.value - covidData.deaths.value)} duration={1} separator="," className='text-5xl' />
              <div className='text-xl py-3'>
                  <p>Last Updated: </p>
                  <i> { new Date(covidData.lastUpdate).toLocaleString()}</i>
              </div>      
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;