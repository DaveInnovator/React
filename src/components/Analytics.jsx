import React from "react";
import Course from "../assets/creator_to_ceo_course_eod_2.png";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Course} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTCIS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2  ">Manage Data Analytics Centrally </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, corrupti, ratione quibusdam illum repudiandae
            voluptatibus reiciendis delectus quaerat provident amet, dolorem est
            iure tempora odit itaque vitae pariatur iusto eum?
          </p>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get started </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
