import React, { useEffect } from 'react';
import { fetchCovidData } from '../../redux/covidDataSlice';
import { useSelector, useDispatch } from 'react-redux';
// import country from "../../redux/countryJSON/country"

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
        <div className="flex flex-row gap-4 mx-10 mt-6">
          <div className="basis-1/3 bg-gradient-to-r from-indigo-500 rounded-lg w-8 text-white">
            <p className='font-bold'>Infected</p>
            <p>
              {covidData.confirmed.value
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
          </div>

          <div className="basis-1/3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg w-8 text-white">
            <p className='font-bold'>Deaths</p>
            <p>
              {covidData.deaths.value
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
          </div>
          <div className="basis-1/3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg w-8 text-white">
            <p className='font-bold'>Active</p>
            <p>
              {(covidData.confirmed.value - covidData.deaths.value)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;