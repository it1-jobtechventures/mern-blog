// import React from 'react'
// import Logo from '../components/Logo'
// import UpdatedLink from '../components/UpdatedLink'
// import Banner from '../components/Banner'

// const MiddlePage = () => {
//   return (
//     <>
//       <main className='mb-5 flex '>
//         <div className='bg-[#20202080] h-full w-1/2'>
//           <UpdatedLink/>
//           <Banner/>
//         </div>
//         <div className='bg-white h-full flex justify-center  w-1/2 '>
//           <Logo/>
//         </div>
//       </main>
//     </>
//   )
// }

// export default MiddlePage
import React from "react";
import Logo from "../components/Logo";
import UpdatedLink from "../components/UpdatedLink";
import Banner from "../components/Banner";

const MiddlePage = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row">
        <div className="bg-[#20202080] w-full md:w-1/2">
          <UpdatedLink />
          <Banner />
        </div>
        <div className="bg-white w-full md:w-1/2 flex justify-center items-center">
          <Logo />
        </div>
      </main>
    </>
  );
};

export default MiddlePage;
