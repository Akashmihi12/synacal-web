import React from "react";
import Table from "./Table";

const data = [
  {
    head: "Streamlined Operations for Greater Efficiency",
    content:
      "Streamlining your business processes through digital transformation allows for a reduction in manual processes, automation of workflows, and real-time data analysis which leads to greater operational efficiency and cost reduction.",
  },
  {
    head: "Enhanced Customer Experience for Increased Loyalty",
    content:
      "Digital transformation enables personalized customer experiences that increase engagement and satisfaction, ultimately leading to improved brand loyalty and retention rates.",
  },
  {
    head: "Improved Agility and Flexibility for Competitive Advantage",
    content:
      "Embracing new technologies through digital transformation increases agility and flexibility to adapt to market changes, driving growth and providing a competitive advantage over others in the industry.",
  },
];

function Template() {
  return (
    <div className="w-full h-full ">
      <div className="text-[40px] font-medium leading-[48px] text-black  text-center">
        Exploring the Key Benefits for You
      </div>
      <div className="text-[18px] font-normal leading-[32px] text-[#31323E]  text-center mt-[1.7%] mb-[2%]">
        Transform your business into a future-proof, agile, and efficient
        organization with our digital transformation  services. Gain a
        competitive edge, improve customer experience, and unlock new growth
        opportunities with our expertise and innovative solutions.
      </div>
      <div className="w-full grid grid-cols-3 gap-6">
        <div className="w-full h-full ">
          <Table head={data[0].head} content={data[0].content} />
        </div>
        <div className="w-full h-full ">
          <Table head={data[1].head} content={data[1].content} />
        </div>
        <div className="w-full h-full ">
          <Table head={data[2].head} content={data[2].content} />
        </div>
      </div>
    </div>
  );
}

export default Template;
