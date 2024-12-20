import React from "react";
import Logo from "../components/Logo";
import UpdatedLink from "../components/UpdatedLink";
import Banner from "../components/Banner";

const MiddlePage = ({url}) => {
  return (
    <>
      <main className="flex flex-col md:flex-row">
        <div className="bg-[#5f5f5f27] w-full md:w-1/2 flex justify-center items-center flex-col">
          <UpdatedLink url={url}/>
          <Banner url={url}/>
        </div>
        <div className="bg-white w-full md:w-1/2 flex justify-center items-center">
          <Logo url={url}/>
        </div>
      </main>
    </>
  );
};

export default MiddlePage;
