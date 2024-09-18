// src/pages/markaive/MarkAIve.tsx

"use client";
import React from "react";
import MarkAIveMainTitle from "../../components/markaive/MarkAIveMainTitle";
import Hero from "../../components/markaive/Hero";
import MarkAIveCards from "../../components/markaive/MarkAIveCards";
import MarkAIvelefttextwithimage from "../../components/markaive/MarkAIvelefttextwithimage";
import MarkAIverighttextwithimage from "../../components/markaive/MarkAIverighttextwithimage";
import ExploreKeys from "../../components/markaive/ExploreKeys";
import HelpYou from "../../components/markaive/HelpYou";
import Started_bar from "../../components/getstarted/Started_bar";  // Referencing reusable Started_bar for ReadyToStart section
import QandABlock from "../../components/q_and_a/QandABlock";  // Import the existing QandABlock

const MarkAIve = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Main title and hero */}
      <div className="relative">
        <MarkAIveMainTitle />
        <Hero />
      </div>

      {/* Cards Section */}
      <MarkAIveCards />

      {/* Left Text with Right Image Section */}
      <MarkAIvelefttextwithimage />

      {/* Right Text with Left Image Section */}
      <MarkAIverighttextwithimage />

      {/* Explore Keys Section */}
      <ExploreKeys />

      {/* Help You Section */}
      <HelpYou />

      {/* Ready to Get Started Section */}
      <div className="w-full py-12 flex justify-center">
        <Started_bar />  {/* Using reusable Started_bar for ReadyToStart */}
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="w-full py-12 flex justify-center">
        <QandABlock />  {/* Referencing the FAQ section */}
      </div>
    </div>
  );
};

export default MarkAIve;
