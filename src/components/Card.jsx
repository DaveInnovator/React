import React from "react";
import Bullseye from "../assets/bullseye.png";
import Layers from "../assets/layers.png";
const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img  className="w-20 mx-auto mt-[-3rem] bg-white" src={Bullseye}
            alt="/"
          />
     <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
 <p className="text-center text-4xl font-bold">$149</p>
 <div className="text-center font-medium">
   <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
   <p className="py-2 border-b mx-8 mt-8">1 User Allowed</p>
   <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
 </div>
<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start trial</button>
        </div>



        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-10  rounded-lg hover:scale-105 duration-300 ">
          <img  className="w-20 mx-auto mt-[-3rem] bg-white" src={Layers}
            alt="/"
          />
     <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
 <p className="text-center text-4xl font-bold">$199</p>
 <div className="text-center font-medium">
   <p className="py-2 border-b mx-8 mt-8">1 TB storage</p>
   <p className="py-2 border-b mx-8 mt-8">3 User Allowed</p>
   <p className="py-2 border-b mx-8 mt-8">Send up to 10 GB</p>
 </div>
<button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Start trial</button>
        </div>



        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img  className="w-20 mx-auto mt-[-3rem] bg-white" src={Bullseye}
            alt="/"
          />
     <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
 <p className="text-center text-4xl font-bold">$299</p>
 <div className="text-center font-medium">
   <p className="py-2 border-b mx-8 mt-8">5 TB storage</p>
   <p className="py-2 border-b mx-8 mt-8">10 User Allowed</p>
   <p className="py-2 border-b mx-8 mt-8">Send up to 20 GB</p>
 </div>
<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start trial</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
