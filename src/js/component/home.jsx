import React from "react";
import { ListComponent } from "./List.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="vh-100" style={{ backgroundColor: "#f2f2f4" }}>
      <ListComponent />
    </div>
  );
};

export default Home;
