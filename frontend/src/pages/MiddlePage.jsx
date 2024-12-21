import React from "react";
import UpdatedLink from "../components/UpdatedLink";
import Banner from "../components/Banner";

const MiddlePage = ({url}) => {
  return (
    <>
      <main className="flex flex-col md:flex-row bg-[#202020] gap-5 md:gap-0">
        <div className=" w-full md:w-1/2 flex justify-center items-center flex-col">
          <UpdatedLink url={url}/>
        </div>
        <div div className=" w-full md:w-1/2 flex justify-center items-center flex-col">
          <Banner url={url}/>
        </div>
      </main>
    </>
  );
};

export default MiddlePage;
