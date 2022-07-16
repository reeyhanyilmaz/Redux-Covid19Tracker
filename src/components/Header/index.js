import React from "react";

function Header() {
  return (
    <div  className="w-screen bg-slate-200 max-w-screen-2xl">
      <div className="w-8/12" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
         <span>
              <img src="assets/headerImg.jpg" alt="headerImage" className="my-4 mr-72 h-20 rounded-bl-full" />
        </span>
        
        <span>
              <b>Global and Country Cases of Corona Virus</b>
              <br />
              <i>(select a country from below)</i>
       </span>
      </div>
    </div>

  );
}
export default Header;
