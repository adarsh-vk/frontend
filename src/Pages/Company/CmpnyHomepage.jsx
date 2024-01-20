import React from "react";
import CmpnyHeader from "../../Components/Company/Header/CmpnyHeader";
import AddSu from "../../Components/Company/body/AddSu/AddSu";
import AddPrk from "../../Components/Company/body/AddSu/AddPrk";

const CmpnyHomepage = () => {
  return (
    <div>
      <CmpnyHeader/>
      <AddSu />
      <AddPrk />
    </div>
  );
};

export default CmpnyHomepage;
