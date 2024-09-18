import React from "react";
import Hero from "@/components/research_page/Hero";
import Cards from "@/components/research_page/Cards";
import Started_bar from "@/components/getstarted/Started_bar"; // Reuse the existing component
import QandABlock from "@/components/q_and_a/QandABlock"; // Reuse the Q&A Block

const ResearchPage = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Started_bar /> {/* Reuse the existing Started_bar section */}
      
      {/* Add some margin/padding to separate the Q&A section from the Started_bar */}
      <div className="mt-16"> {/* Adjust 'mt-16' to increase or decrease the spacing as needed */}
        <QandABlock /> {/* Q&A Section */}
      </div>
    </div>
  );
};

export default ResearchPage;
