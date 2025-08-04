import React from "react";
import {Home} from "../Shared/Components/Home/Home";
import HelmetComponent from "./Helmet/HelmetProvider";

function Homes() {
  return (
    <>
      <HelmetComponent title="International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com'} />
      <Home />
    </>
  );
}

export default Homes;
