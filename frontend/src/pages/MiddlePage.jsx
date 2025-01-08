import React from "react";
import UpdatedLink from "../components/UpdatedLink";
import Banner from "../components/Banner";

const MiddlePage = ({url}) => {
  return (
    <>
      <main className="flex flex-col md:flex-row bg-[#f3f3f3] gap-5 md:gap-0 justify-between">
        <div className=" w-full md:w-2/3 flex flex-col ">
          <UpdatedLink url={url}/>
        </div>
        <div div className=" w-full md:w-1/3 flex justify-center items-center flex-col">
          <Banner url={url}/>
        </div>
      </main>
    </>
  );
};

export default MiddlePage;
