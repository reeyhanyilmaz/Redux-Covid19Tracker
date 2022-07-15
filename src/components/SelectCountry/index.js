import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { setCountryNames } from "../../redux/covidDataSlice";
import { useDispatch , useSelector } from "react-redux";

function SelectCountry() {
    const dispatch = useDispatch();
    const countryNames = useSelector(state => state.covidData.countryNames);
    console.log('countryNames', countryNames);

  return (
    <div style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
      <ReactFlagsSelect
        selected={countryNames}
        onSelect={(e) => {dispatch(setCountryNames(e))}}
        searchable={true}
        showSelectedLabel={true}
        showOptionLabel={true}
        className="w-72 mt-6" />
    </div>
  );
}

export default SelectCountry;
